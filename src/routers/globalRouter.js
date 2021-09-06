import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

// This creates a router explained in README.md
const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
