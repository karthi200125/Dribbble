import jwt from 'jsonwebtoken';
import { CreateError } from './CreateError.js';

export const VerifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return next(CreateError(401, "You are not authenticated"));
    const token = authHeader.split(' ')[1];
    if (!token) return next(CreateError(401, "Invalid token format"));
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) return next(CreateError(401, "Token is not valid"));
        req.userId = decoded;
        next();
    });
};


export const VerifyUser = async (req, res, next) => {
    try {
        const userVerified = req.userId.id === req.params.id || req.body.userId        
        if (userVerified) {
            next()
        }
        else {
            next(CreateError(500, "Verify user failed"));
        }
    } catch (error) {
        return next(CreateError(500, "Verify user failed"));
    }
};

