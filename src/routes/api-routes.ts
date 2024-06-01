import { Router } from "express";

import { 
  authenticateToken,
  login
 } from "@controllers/auth.controller";

import { 
  handleCountAvailableLot, 
  updateLot, 
  insertLot, 
  retrieveLot, 
  removeLot, 
  retrieveOverallLot
} from "@controllers/lot.controller";

import { 
  getAgentCount,
  getTopAgent,
  insertAgent, 
  removeAgent, 
  retrieveAgent, 
  updateAgent 
} from "@controllers/agent.controller";

import { 
  getClientCount,
  insertClient,
  removeClient, 
  retrieveClient, 
  updateClient 
} from "@controllers/client.controller";

import { 
  insertMethod, 
  removeMethod, 
  retrieveMethod, 
  updateMethod 
} from "@controllers/method.controller";

import { 
  getTotalCollectibles,
  insertPayment, 
  removePayment, 
  retrievePayment, 
  updatePayment 
} from "@controllers/payment.controller";

import { 
  insertProject,  
  removeProject, 
  retrieveProject, 
  updateProject 
} from "@controllers/project.controller";

const router = Router();

router.post("/login", login)

// Lot Services
router.get("/lot", authenticateToken, retrieveLot)
router.put("/lot", authenticateToken, updateLot)
router.post("/lot", authenticateToken, insertLot)
router.delete("/lot", authenticateToken, removeLot)
router.get("/lot/available", authenticateToken, handleCountAvailableLot)
router.get("/lot/overall", authenticateToken, retrieveOverallLot)

// Agent Services
router.get("/agent", authenticateToken, retrieveAgent)
router.put("/agent", authenticateToken, updateAgent)
router.post("/agent", authenticateToken, insertAgent)
router.delete("/agent", authenticateToken, removeAgent)
router.get("/agent/top", authenticateToken, getTopAgent)
router.get("/agent/count", authenticateToken, getAgentCount)

// Client Services
router.get("/client", authenticateToken, retrieveClient)
router.put("/client", authenticateToken, updateClient)
router.post("/client", authenticateToken, insertClient)
router.delete("/client", authenticateToken, removeClient)
router.get("/client/count", authenticateToken, getClientCount)

// Project Services
router.get("/project", authenticateToken, retrieveProject)
router.put("/project", authenticateToken, updateProject)
router.post("/project", authenticateToken, insertProject)
router.delete("/project", authenticateToken, removeProject)

// Method Services
router.get("/method", authenticateToken, retrieveMethod)
router.put("/method", authenticateToken, updateMethod)
router.post("/method", authenticateToken, insertMethod)
router.delete("/method", authenticateToken, removeMethod)

// Payment Services
router.get("/payment", authenticateToken, retrievePayment)
router.put("/payment", authenticateToken, updatePayment)
router.post("/payment", authenticateToken, insertPayment)
router.delete("/payment", authenticateToken, removePayment)
router.get("/payment/collectibles", authenticateToken, getTotalCollectibles)

export default router;