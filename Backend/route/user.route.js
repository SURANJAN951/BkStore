import express from 'express';
const router = express.Router();
import { login } from '../controller/user.Controller.js';
import { signup } from '../controller/user.Controller.js';

router.post("/signup", signup);
router.post("/login", login); //  you have a login function in your controller

export default router;
