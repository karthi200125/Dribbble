import express from 'express';
import { getAllUsers, getUser, userDelete, userFollow, userUpdate } from '../Controllers/UserController.js';

const router = express.Router()

router.put('/userupdate/:id', userUpdate)
router.delete('/userdelete/:id', userDelete)
router.get('/getallusers', getAllUsers)
router.get('/getuser/:id', getUser)
router.get('/userfollow', userFollow)

export default router;