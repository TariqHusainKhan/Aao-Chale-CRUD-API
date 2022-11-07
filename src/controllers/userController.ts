import { Request, Response, NextFunction } from "express";
const User = require("../models/userModel")

export default {
    userDetail, userList, updateUser
}

export async function updateUser(req: Request, res: Response, next: NextFunction) {
    const _id = req.params._id
    try {
        const data = await User.findOne({_id})
        if (!data) {
            return next({
                status: 404,
                code: `invaild_id`,
                message: 'User not found'
            })
        }

        const user = await User.findOneAndUpdate({ _id }, req.body, { new:true, runValidators:true, upsert: false });
        
        res.json({
            success: true,
            message: `User updated successfully.`,
            user
        })
    } catch (error) {
        return next(error)
    }
}

export async function userDetail(req: Request, res: Response, next: NextFunction) {
    const _id = req.params._id
    try {
        const data = await User.findOne({ _id })
        if (!data) {
            return next({
                status: 404,
                code: `invaild_id`,
                message: 'User not found'
            })
        }
        
        res.json({
            success: true,
            message: `User fetched successfully.`,
            data
        })
    } catch (error) {
        return next(error)
    }
}

export async function userList(req: Request, res: Response, next: NextFunction) {
    try {
        const data = await User.find({})
        
        res.json({
            success: true,
            message: `User fetched successfully.`,
            data
        })
    } catch (error) {
        return next(error)
    }
}