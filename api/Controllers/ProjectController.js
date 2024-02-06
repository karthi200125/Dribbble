import { CreateError } from "../Utils/CreateError.js";
import ProjectModel from '../Models/ProjectModel.js';
import UserModel from "../Models/UserModel.js";
import CommentModel from "../Models/CommentModel.js";

export const createProject = async (req, res, next) => {
    try {
        const { proTitle, proDesc, proImage, userId, isPublished , category , proLink , commentON} = req.body;
        const newProject = await ProjectModel.create({ proTitle, proDesc, proImage, isPublished, userId , category , proLink  , commentON});
        await UserModel.findByIdAndUpdate(userId, { $push: { createdProjects: newProject._id } });
        res.status(200).json(newProject);
    } catch (error) {
        next(CreateError(error, req, "Create new project failed"));
    }
};

export const deleteProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProject = await ProjectModel.findByIdAndDelete(id);
        await UserModel.findByIdAndUpdate(req.body.userId, { $pull: { createdProjects: id } });
        await CommentModel.deleteMany({ _id: { $in: deletedProject.projectComments } });
        res.status(200).json("Project has been deleted");
    } catch (error) {
        next(CreateError(error, req, "Delete project failed"));
    }
};

export const updateProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateProject = await ProjectModel.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json(updateProject);
    } catch (error) {
        next(CreateError(error, req, "Project update failed"));
    }
};

export const getProject = async (req, res, next) => {
    try {
        const { id } = req.params;        
        const getProject = await ProjectModel.findById(id);
        res.status(200).json(getProject);
    } catch (error) {
        next(CreateError(error, req, "Get project failed"));
    }
};

export const getAllProjects = async (req, res, next) => {
    try {
        const { userId, like, create, save } = req.body;
        const user = await UserModel.findById(userId);
        let allProjects;

        if (userId && like) {
            const likedId = user.likedProjects;
            allProjects = await ProjectModel.find({ _id: { $in: likedId } });
        }
        else if (userId && save) {
            const savedId = user.savedProjects;
            allProjects = await ProjectModel.find({ _id: { $in: savedId } });
        }
        else if (userId && create) {
            const createdProjectids = user.createdProjects;
            allProjects = await ProjectModel.find({ _id: { $in: createdProjectids } });
        }
        else if (userId) {
            allProjects = await ProjectModel.find({ userId });
        }
        else {
            allProjects = await ProjectModel.find();
        }

        res.status(200).json(allProjects);
    } catch (error) {
        next(CreateError(error, req, "Get all projects failed"));
    }
};

export const saveProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const user = await UserModel.findById(userId);
        const isAlreadySaved = user.savedProjects.includes(id);
        if (!isAlreadySaved) {
            await UserModel.findByIdAndUpdate(userId, { $push: { savedProjects: id } });
            res.status(200).json(id);
        } else {
            await UserModel.findByIdAndUpdate(userId, { $pull: { savedProjects: id } });
            res.status(200).json(id);
        }
    } catch (error) {
        next(CreateError(error, req, "Save project failed"));
    }
};

export const likeProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const user = await UserModel.findById(userId);
        const isAlreadyLiked = user.likedProjects.includes(id);
        if (!isAlreadyLiked) {
            await UserModel.findByIdAndUpdate(userId, { $push: { likedProjects: id } });
            await ProjectModel.findByIdAndUpdate(id, { $push: { likedUsers: userId } });
            res.status(200).json(id);
        } else {
            await UserModel.findByIdAndUpdate(userId, { $pull: { likedProjects: id } });
            await ProjectModel.findByIdAndUpdate(id, { $pull: { likedUsers: userId } });
            res.status(200).json(id);
        }
    } catch (error) {
        next(CreateError(error, req, "Like project failed"));
    }
};

