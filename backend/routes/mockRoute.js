import express from 'express';
import { dependencyController, postContoller } from '../controllers/dependencyController.js';


const router = express.Router();



router.get('/getdependency/:name', dependencyController);
router.post('/postdependency', postContoller);

export default router;