import mongoose, { Schema } from "mongoose";

const ProjectModel = new mongoose.Schema({
    userId: { type: String },
    proTitle: { type: String },
    proDesc: { type: String },
    proImage: { type: String },    
    isPublished: { type: Boolean, default: false },
    likedUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
}, { timestamps: true });

export default mongoose.model("Project", ProjectModel);
