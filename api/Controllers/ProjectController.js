import { CreateError } from "../Utils/CreateError.js";
import ProjectModel from '../Models/ProjectModel.js';
import UserModel from "../Models/UserModel.js";

export const createProject = async (req, res, next) => {
    try {
        const { proTitle, proDesc, proImage, userId } = req.body;
        const newProject = await ProjectModel.create({ proTitle, proDesc, proImage });
        await UserModel.findByIdAndUpdate(userId, { $push: { createdProjects: newProject._id } });
        res.status(200).json(newProject);
    } catch (error) {
        next(CreateError(error, req, "Create new project failed"));
    }
};

export const deleteProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        await ProjectModel.findByIdAndDelete(id);
        await UserModel.findByIdAndUpdate(req.body.userId, { $pull: { createdProjects: id } });
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
        const allProjects = await ProjectModel.find();
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
            res.status(200).json("Project has been saved");
        } else {
            await UserModel.findByIdAndUpdate(userId, { $pull: { savedProjects: id } });
            res.status(200).json("Project has been unsaved");
        }
    } catch (error) {
        next(createError(error, req, "Save project failed"));
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
            res.status(200).json("Project has been liked");
        } else {
            await UserModel.findByIdAndUpdate(userId, { $pull: { likedProjects: id } });
            await ProjectModel.findByIdAndUpdate(id, { $pull: { likedUsers: userId } });
            res.status(200).json("Project has been Disliked");
        }
    } catch (error) {
        next(createError(error, req, "Like project failed"));
    }
};
