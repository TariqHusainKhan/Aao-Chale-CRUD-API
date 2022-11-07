import { Router } from "express"
import {
    authRouter, userRouter
} from "."

const router = Router()

router.use("/auth", authRouter)
router.use("/user", userRouter)

export default router