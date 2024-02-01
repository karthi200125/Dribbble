import mongoose, { Schema } from "mongoose";

const userModel = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String },
    userTitle: { type: String },
    available: { type: Boolean, default: true },
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    followed: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdProjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
    savedProjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
    likedProjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
}, { timestamps: true });

export default mongoose.model("User", userModel);
