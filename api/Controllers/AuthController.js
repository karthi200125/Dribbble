import UserModel from '../Models/UserModel.js'
import { CreateError } from '../Utils/CreateError.js'
import bcrypt from 'bcryptjs'

export const Register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) return res.status(400).json("User already registered");
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const newuser = await UserModel.create({ username: username, email: email, password: hashedPassword });
        res.status(201).json(newuser);
    } catch (error) {
        next(CreateError(500, "Create new user failed"));
    }
};

export const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email })
        if (!user) next(CreateError(404, "user Not found"))
        const ComparedPassword = bcrypt.compare(user.password, password)
        if (!ComparedPassword) next(CreateError(404, "Wring password"))
        res.status(200).json(user)
    } catch (error) {
        next(CreateError(500, "Login failed"))
    }
}

export const GoogleLogin = async (req, res) => {
    try {

    } catch (error) {

    }
}