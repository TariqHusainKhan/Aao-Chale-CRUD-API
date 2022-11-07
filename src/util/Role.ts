import { Request, NextFunction } from "express"

export {
  checkAdmin,
  checkStaff,
  checkStudent,
  checkSuperAdmin,
}

async function checkSuperAdmin(req: Request, res, next: NextFunction) {
    if (res.userRole === 'superAdmin') {
        return next()
    } else {
        return next({
            status: 400,
            message: "Your are not authorized to perform this request"
        })
    }
}

async function checkAdmin(req: Request, res, next: NextFunction) {
    if (res.userRole === 'admin') {
        return next()
    } else {
        return next({
            status: 400,
            message: "Your are not authorized to perform this request"
        })
    }
}

async function checkStaff(req: Request, res, next: NextFunction) {
    if (res.userRole === 'staff') {
        return next()
    } else {
        return next({
            status: 400,
            message: "Your are not authorized to perform this request"
        })
    }
}

async function checkStudent(req: Request, res, next: NextFunction) {
    if (res.userRole === 'student') {
        return next()
    } else {
        return next({
            status: 400,
            message: "Your are not authorized to perform this request"
        })
    }
}