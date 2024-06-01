import { countClient, destroyClient, getClientList, insertClientInfo, updateClientInfo } from "@services/client.service";

type clientTypes = {
  client_id?: number,
}

const retrieveClient = async (args: clientTypes) => {
  let query: { client_id?: number } = {};

  if (args.client_id) {
    query['client_id'] = Number(args.client_id)
  }
  return await getClientList({
    params: {
      attributes: {},
      where: {
        ...query
      }
    }
  })
    .then((data) => {
      return data
    })
    .catch((err) => {
      return null
    })
}

const updateClient = async (args: clientTypes) => {
  // if (!args.client_id) {
  //   return res.status(422).send("Please provide client id.")
  // }

  const payload = {
    fields: {
      ...args,
      client_id: undefined
    },
    client_id: args.client_id
  }

  return await updateClientInfo(payload)
    .then((data) => {
      if (data[0]) {
        return {
          result: true,
          message: "Successfully updated client information.",
        }
      } else {
        return {
          result: true,
          message: "Couldn't find any information on this client. " +
            "ERR: client.controlller.ts (updateClient)",
        }
      }
    })
    .catch((err) => {
        return {
          result: false
        }
    })
}

// const insertClient = (args: clientTypes) => {
//   if (!args.client_name) {
//     return res.status(422).send("Please provide client name.")
//   }

//   const payload = {
//     ...args
//   }

//   return await insertClientInfo(payload)
//   .then((data) => {
//     if (data.result) {
//       res.status(200).json({
//         message: "Client added successfully",
//       })
//     } else {
//       console.log("Couldn't create client. " +
//         "ERR: client.controlller.ts (insertClient)");

//       res.status(422).json({
//         message: "Couldn't create client. " + data.message,
//       })
//     }
//   })
// }

// const removeClient = (args: clientTypes) => {
//   if (!req.query.client_id) {
//     return res.status(422).send("Please provide client id.")
//   }

//   return await destroyClient({ client_id: req.query.client_id })
//     .then((deleted) => {
//       if (deleted) {
//         res.status(200).json({
//           message: "Successfully deleted client data.",
//         })
//       } else {
//         res.status(422).json({
//           message: "Couldn't find any information on this client. " +
//             "ERR: client.controlller.ts (deleteClient)",
//         })
//       }
//     })
//     .catch((err) => {
//       next()
//     })
// }

// const getClientCount = (args: clientTypes) => {
//   return await countClient()
//   .then((data) => {
//     return res.status(200).json(data)
//   })
// }

export {
  clientTypes,
  retrieveClient,
  updateClient,
  // removeClient,
  // insertClient,
  // getClientCount
}