// validation 
import { Request, Response, NextFunction } from "express"
import Joi from "joi"

export const logInValidation = (req: Request, res: Response, next: NextFunction) => {
    const loginSchema = Joi.object().keys({
        mobile: Joi.string().required(),
        otp: Joi.number().required(),
    })
    //input body 
    const body = {
        ...req.body
    }
    // validate
    const { error } = loginSchema.validate(body)
    if (error) {
        return res.status(406).json(`ERROR : ${error.message}`)
    } else {
        next()
    }
}

export const signUpValidation = (req: Request, res: Response, next: NextFunction) => {
    const signUpSchema = Joi.object().keys({
        mobile: Joi.string().required(),
    })
    //input body 
    const body = {
        ...req.body
    }
    // validate
    const { error } = signUpSchema.validate(body)
    if (error) {
        return res.status(406).json(`ERROR : ${error.message}`)
    } else {
        next()
    }
}

export const accountSetupValidation = (req: Request, res: Response, next: NextFunction) => {
    const accountSetupSchema = Joi.object().keys({
        fullName: Joi.string().required(),
        email: Joi.string().email(),
    })
    //input body 
    const body = {
        ...req.body
    }
    // validate
    const { error } = accountSetupSchema.validate(body)
    if (error) {
        return res.status(406).json(`ERROR : ${error.message}`)
    } else {
        next()
    }
}

export const userUpdateValidation = (req: Request, res: Response, next: NextFunction) => {
    const userUpdateSchema = Joi.object().keys({
        fullName: Joi.string(),
        gender: Joi.string(),
        dob: Joi.string(),
        bio: Joi.string(),
        profileLink: Joi.string(),
        documentLink: Joi.string(),
        lat: Joi.string(),
        long: Joi.string()
    })
    //input body 
    const body = {
        ...req.body
    }
    // validate
    const { error } = userUpdateSchema.validate(body)
    if (error) {
        return res.status(406).json(`ERROR : ${error.message}`)
    } else {
        next()
    }
}

export default {
    logInValidation, signUpValidation, accountSetupValidation, userUpdateValidation
}