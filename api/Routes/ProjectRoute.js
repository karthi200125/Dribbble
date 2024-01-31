import express from 'express';
import { createProject, deleteProject, getAllProjects, getProject, likeProject, saveProject, updateProject } from '../Controllers/ProjectController.js';

const router = express.Router()

router.put('/createpro', createProject)
router.delete('/deletpro/:id', deleteProject)
router.put('/updatepro/:id', updateProject)
router.get('/getuallpro', getAllProjects)
router.get('/getpro/:id', getProject)
router.post('/saveproject/:id', saveProject)
router.post('/likeproject/:id', likeProject)

export default router;