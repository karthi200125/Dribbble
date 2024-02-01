import { CreateError } from '../Utils/CreateError.js';
import UserModel from '../Models/UserModel.js';

export const userUpdate = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedUser = await UserModel.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        next(CreateError(error, req, "User update failed"));
    }
};

export const userDelete = async (req, res, next) => {
    try {
        const { id } = req.params;
        await UserModel.findByIdAndDelete(id);
        res.status(200).json("User has been deleted");
    } catch (error) {
        next(CreateError(error, req, "User account delete failed"));
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await UserModel.find();
        res.status(200).json(allUsers);
    } catch (error) {
        next(CreateError(error, req, "Get all users failed"));
    }
};

export const getUser = async (req, res, next) => {
    try {
        const { id } = req.params;        
        const getUser = await UserModel.findById(id);
        res.status(200).json(getUser);
    } catch (error) {
        next(CreateError(error, req, "Get single user failed"));
    }
};

export const userFollow = async (req, res, next) => {
    try {
        const { myid, userId } = req.body;
        console.log(req.body)
        const isAlreadyFollowed = await UserModel.findById(userId);

        if (isAlreadyFollowed) {
            await UserModel.findByIdAndUpdate(myid, { $push: { followed: userId } });
            await UserModel.findByIdAndUpdate(userId, { $push: { followers: myid } });
            res.status(200).json("User has been followed");
        } else {
            await UserModel.findByIdAndUpdate(myid, { $pull: { followed: userId } });
            await UserModel.findByIdAndUpdate(userId, { $pull: { followers: myid } });
            res.status(200).json("User has been unfollowed");
        }
    } catch (error) {
        next(createError(error, req, "User follow failed"));
    }
};


