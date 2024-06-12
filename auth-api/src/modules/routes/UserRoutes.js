import UserController from "../controller/UserController.js";

import { Router } from "express";

const router = new Router();

router.get("/api/user/email/:email", UserController.findByEmail);

export default router;
