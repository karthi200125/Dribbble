import express from 'express';
import { createProject, deleteProject, getAllProjects, getProject, likeProject, saveProject, updateProject } from '../Controllers/ProjectController.js';
import { VerifyToken, VerifyUser } from '../Utils/VerifyToken.js';

const router = express.Router()

router.post('/createpro', VerifyToken, VerifyUser, createProject)
router.delete('/deletepro/:id', VerifyToken, VerifyUser, deleteProject)
router.put('/updatepro/:id', VerifyToken, VerifyUser, updateProject)
router.post('/getallpro', getAllProjects)
router.get('/getpro/:id', getProject)
router.post('/saveproject/:id', VerifyToken, VerifyUser, saveProject)
router.post('/likeproject/:id', VerifyToken, VerifyUser, likeProject)

export default router;