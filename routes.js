import express from 'express';
import { createBlogHandler, createUserHandler, loginUserHandler } from './controllers/userControllers.js';
// import { authenticate } from './authenticate.js';

const router = express.Router();

router.post('/createUser',createUserHandler);
router.post('/loginUser',loginUserHandler);
router.post('/createBlog',createBlogHandler);
export {router as routes};