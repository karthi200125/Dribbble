import express from 'express';
import { getAllUsers, getUser, userDelete, userFollow, userUpdate } from '../Controllers/UserController.js';
import { VerifyToken, VerifyUser } from '../Utils/VerifyToken.js'

const router = express.Router()

router.put('/userupdate/:id', VerifyToken, VerifyUser, userUpdate)
router.delete('/userdelete/:id', VerifyToken, VerifyUser, userDelete)
router.get('/getallusers', getAllUsers)
router.get('/getuser/:id', getUser)
router.post('/userfollow', VerifyToken, VerifyUser, userFollow)

export default router;