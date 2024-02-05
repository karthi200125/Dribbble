import express from 'express'
import { createComment, deleteComment, getComments } from '../Controllers/CommentController.js'

const router = express.Router()

router.post('/createcomment', createComment)
router.post('/getcomments', getComments)
router.delete('/deletecomment', deleteComment)

export default router;