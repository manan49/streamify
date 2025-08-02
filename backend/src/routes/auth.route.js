import express from 'express';
import {signup , logout, login, onboard} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/onboarding", protectRoute ,onboard);

// forgot-password


// check if user is logged in
router.get("/me", protectRoute, (req,res)=>{
    res.status(200).json({ success: true, user: req.user});
})

export default router;
