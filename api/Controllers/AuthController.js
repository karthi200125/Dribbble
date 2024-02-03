import UserModel from '../Models/UserModel.js';
import { CreateError } from '../Utils/CreateError.js';
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';

export const Register = async (req, res, next) => {
    try {
        const { username, email, password: enteredPassword } = req.body;
        const user = await UserModel.findOne({ email });        
        if (user) return next(CreateError(404, "This email already registered"));
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(enteredPassword, salt);
        const newuser = await UserModel.create({ username, email, password: hashedPassword });
        const { password, ...data } = newuser._doc;
        const token = JWT.sign({ id: newuser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
        res.cookie("access_token", token, { httpOnly: true, secure: true, sameSite: 'Lax' }).status(200).json({ token, ...data });
    } catch (error) {
        next(CreateError(500, "Create new user failed"));
    }
};

export const Login = async (req, res, next) => {
    try {
        const { email, password: enteredPassword } = req.body;        
        const user = await UserModel.findOne({ email });
        if (!user) return next(CreateError(404, "User not found"));
        const comparedPassword = await bcrypt.compare(enteredPassword, user.password);
        if (!comparedPassword) return next(CreateError(404, "Wrong password"));
        const { password, ...data } = user._doc;
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
        res.cookie("access_token", token, { httpOnly: true, secure: true, sameSite: 'Lax' }).status(200).json({ token, ...data });
    } catch (error) {
        next(CreateError(500, "Login failed"));
    }
};

export const GoogleLogin = async (req, res) => {
    try {

    } catch (error) {

    }
}