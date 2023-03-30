import express from "express";
import { signup, signin, googleAuth } from "../controllers/auth.js";

const router = express.Router();

// Create a User 
router.post("/signup", signup);

// Sign In
router.post("/signin", signin);

// Google Authentication
router.post("/google", googleAuth);

export default router;