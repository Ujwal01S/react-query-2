import express from "express";
import {
  deletePost,
  demoPostController,
  getDemoController,
  pagginatePageContoller,
} from "../controllers/demoController.js";

const router = express.Router();

router.post("/demo", demoPostController);

router.get("/getdemo", getDemoController);

router.get("/list-demo/:page", pagginatePageContoller);
router.delete('/delete/:id', deletePost);

export default router;
