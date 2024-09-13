import express from "express";
import {
  deletePost,
  demoPostController,
  editController,
  getDemoController,
  pagginatePageContoller,
  singleDemoContoller,
} from "../controllers/demoController.js";

const router = express.Router();

router.post("/demo", demoPostController);

router.get("/getdemo", getDemoController);

router.get("/list-demo/:page", pagginatePageContoller);

router.delete('/delete/:id', deletePost);

router.put('/edit/:id', editController);

//get single user
router.get('/single-demo/:id', singleDemoContoller);

export default router;
