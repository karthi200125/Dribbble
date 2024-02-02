import express from 'express';
import { createProject, deleteProject, getAllProjects, getProject, likeProject, saveProject, updateProject } from '../Controllers/ProjectController.js';

const router = express.Router()

router.post('/createpro', createProject)
router.delete('/deletepro/:id', deleteProject)
router.put('/updatepro/:id', updateProject)
router.post('/getallpro', getAllProjects)
router.get('/getpro/:id', getProject)
router.post('/saveproject/:id', saveProject)
router.post('/likeproject/:id', likeProject)

export default router;