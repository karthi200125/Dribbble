import mongoose, { Schema } from "mongoose";

const CommentModel = new mongoose.Schema({
    comment: { type: String },
    profilePic: { type: String },
    username: { type: String },
    userId: { type: String },
    proId: { type: String },
}, { timestamps: true });

export default mongoose.model("Comment", CommentModel);
