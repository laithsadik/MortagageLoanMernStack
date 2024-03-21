import express from "express";
import { signUp, signIn,getPassword,changePassword, signOut } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/getpassword", getPassword);
router.post("/changepassword", changePassword);
router.get("/signout", signOut);

export default router;
