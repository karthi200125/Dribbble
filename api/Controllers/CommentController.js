// commentController.js

import CommentModel from "../Models/CommentModel.js";
import ProjectModel from "../Models/ProjectModel.js";
import { CreateError } from "../Utils/CreateError.js";

export const createComment = async (req, res, next) => {
    try {
        const { userId, profilePic, comment, username, proId } = req.body;
        const newComment = await CommentModel.create({
            proId,
            userId,
            profilePic,
            comment,
            username
        });
        await ProjectModel.findByIdAndUpdate(proId, { $push: { projectComments: newComment._id } });
        res.status(200).json(newComment._id);
    } catch (error) {
        next(CreateError(500, "Create Comment failed"));
    }
};

export const deleteComment = async (req, res, next) => {
    try {
        const { commentId, proId } = req.body;        
        await CommentModel.findByIdAndDelete(commentId);
        await ProjectModel.findByIdAndUpdate(proId, { $pull: { projectComments: commentId } });
        res.status(200).json(commentId);
    } catch (error) {
        next(CreateError(500, "Delete Comment failed"));
    }
};

export const getComments = async (req, res, next) => {
    try {
        const { proId } = req.body;                
        const project = await ProjectModel.findOne({ _id: proId });        
        const procommentsid = project.projectComments;        
        const getComments = await CommentModel.find({ _id: { $in: procommentsid } });
        res.status(200).json(getComments);
    } catch (error) {
        next(CreateError(500, "Get Comments failed", error));
    }
};

