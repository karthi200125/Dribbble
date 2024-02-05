import mongoose, { Schema } from "mongoose";

const ProjectModel = new mongoose.Schema({
    userId: { type: String },
    proTitle: { type: String },
    proDesc: { type: String },
    proImage: { type: String },
    proVideo: { type: String },
    proLink: { type: String },
    category: { type: String, default: "Discover" },
    isPublished: { type: Boolean, default: false },
    commentON: { type: Boolean, default: true },
    likedUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    projectComments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
}, { timestamps: true });

export default mongoose.model("Project", ProjectModel);
