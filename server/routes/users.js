import express from "express";
import { Delete, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Update User 
router.put("/:id", verifyToken, update);

// Delete User 
router.delete("/:id", verifyToken, Delete);

//Get a User
router.get("/find/:id", getUser);

// Subscribe
router.put("/sub/:id", verifyToken, subscribe);

// Unsubscribe
router.put("/unsub/:id", verifyToken, unsubscribe);

// Like 
router.put("/like/:videoId", verifyToken, like);

// Unlike
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;