import { NextFunction, Request, Response } from "express";
import { destroyProject, getProjectList, insertProjectInfo, updateProjectInfo } from "@services/project.service";

const retrieveProject = async (req: Request, res: Response, next: NextFunction) => {
  let query: { project_id?: number } = {};

  if (req.query.project_id) {
    query['project_id'] = Number(req.query.project_id)
  }
  return await getProjectList({
    params: {
      attributes: {},
      where: {
        ...query
      }
    }
  })
    .then((data) => {
      return res.status(200).json(data)
    })
}

const updateProject = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.project_id) {
    return res.status(422).send("Please provide project id.")
  }

  const payload = {
    fields: {
      ...req.body,
      project_id: undefined
    },
    project_id: req.body.project_id
  }

  return await updateProjectInfo(payload)
    .then((data) => {
      if (data[0]) {
        res.status(200).json({
          message: "Successfully updated project information.",
        })
      } else {
        res.status(422).json({
          message: "Couldn't find any information on this project. " +
            "ERR: project.controlller.ts (updateProject)",
        })
      }
    })
}

const insertProject = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.project_name) {
    return res.status(422).send("Please provide project name.")
  }

  const payload = {
    ...req.body
  }

  return await insertProjectInfo(payload)
    .then((data) => {
      if (data.result) {
        res.status(200).json({
          message: "Project added successfully",
        })
      } else {
        console.log("Couldn't create project. " +
          "ERR: project.controlller.ts (insertProject)");

        res.status(422).json({
          message: "Couldn't create project. " + data.message,
        })
      }
    })
}

const removeProject = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.query.project_id) {
    return res.status(422).send("Please provide project id.")
  }

  return await destroyProject({ project_id: req.query.project_id })
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({
          message: "Successfully deleted project data.",
        })
      } else {
        res.status(422).json({
          message: "Couldn't find any information on this project. " +
            "ERR: project.controlller.ts (deleteProject)",
        })
      }
    })
}

import { countAvailableUnits, getOverallLot } from "@services/lot.service"
import { countClient } from "@services/client.service";
import { countAgent, retrieveTopAgent } from "@services/agent.service";

const getStatistics = async (req: Request, res: Response, next: NextFunction) => {
  let payload = {};

  if (req.query.project_id) {
    payload = {
      project_id: req.query.project_id
    }
  }

  const availableUnits = await countAvailableUnits(payload)
    .then((data: { available: number }) => {
      return { available_units: data.available }
    })
    .catch((err: {}) => { })

  const overAllLot = await getOverallLot({ params: payload })
    .then((data) => {
      return { overall_lot: data }
    })
    .catch((err: {}) => { })

  const agentCount = await countAgent()
    .then((data) => {
      return { agent_count: data }
    })
    .catch((err: {}) => { })

  const topAgent = await retrieveTopAgent()
    .then((data) => {
      return { top_agent: data }
    })
    .catch((err: {}) => { })

  const clientCount = await countClient()
    .then((data) => {
      return { client_count: data }
    })
    .catch((err: {}) => { })


  return res.status(200).json({
    ...availableUnits, ...overAllLot, ...agentCount, ...topAgent, ...clientCount
  })
}

export {
  getStatistics,
  retrieveProject,
  updateProject,
  removeProject,
  insertProject
}