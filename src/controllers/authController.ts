import { Request, Response, NextFunction } from "express";
import { generateOtp } from "../util/Helper";
const User = require("../models/userModel")

export default {
    signUp, accountSetup, verifyOtp, logIn
}

export async function signUp(req: Request, res: Response, next: NextFunction) {
    const { mobile } = req.body
    try {
        const user = new User()
        user.mobile = mobile
        user.otp = await generateOtp()
        const data = await user.save()

        res.json({
            success: true,
            message: `User sign-up successfully.`,
            data
        })
    } catch (error) {
        return next(error)
    }
}

export async function accountSetup(req: Request, res: Response, next: NextFunction) {
    const _id = req.params._id
    const { fullName, email } = req.body
    try {
        const isUserExist = await User.findOne({_id})
        if (!isUserExist) {
            return next({
                status: 404,
                code: `invaild_id`,
                message: 'User not found'
            })
        }

        if (!isUserExist.isMobileVerified) {
            return next({
                status: 401,
                code: `verify_mobile`,
                message: 'Please verify your mobile number then try again'
            })
        }

        isUserExist.fullName = fullName
        isUserExist.email = email
        const data = await isUserExist.save()

        res.json({
            success: true,
            message: `User account setup successfully.`,
            data
        })
    } catch (error) {
        return next(error)
    }
}

export async function verifyOtp(req: Request, res: Response, next: NextFunction) {
    const { mobile, otp } = req.body
    try {
        const isUserExist = await User.findOne({mobile})
        if (!isUserExist) {
            return next({
                status: 404,
                code: `invaild_id`,
                message: 'User not found'
            })
        }

        if (isUserExist.otp !== otp) {
            return next({
                status: 401,
                code: `invaild_otp`,
                message: 'Invalid otp, please try again.'
            })
        }

        isUserExist.isMobileVerified = true
        const data = await isUserExist.save()

        res.json({
            success: true,
            message: `User account is verified successfully.`,
            data
        })
    } catch (error) {
        return next(error)
    }
}

export async function logIn(req: Request, res: Response, next: NextFunction) {
    const { mobile, otp } = req.body
    try {
        const isUserExist = await User.findOne({mobile})
        if (!isUserExist) {
            return next({
                status: 404,
                code: `invaild_id`,
                message: 'User not found'
            })
        }

        if (!isUserExist.isMobileVerified) {
            return next({
                status: 401,
                code: `verify_mobile`,
                message: 'Please verify your mobile number then try again'
            })
        }

        if (isUserExist.otp !== otp) {
            return next({
                status: 401,
                code: `invaild_otp`,
                message: 'Invalid otp, please try again.'
            })
        }

        res.json({
            success: true,
            message: `User loged-in successfully.`,
            isUserExist
        })
    } catch (error) {
        return next(error)
    }
}
