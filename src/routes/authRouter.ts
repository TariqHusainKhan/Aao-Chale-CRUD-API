import { Router } from "express"

import { accountSetupValidation, logInValidation, signUpValidation } from "../util/lib"
import { accountSetup, logIn, signUp, verifyOtp } from "../controllers/authController"

const router = Router()

router.post("/sign-up", signUpValidation, signUp)
router.post("/login", logInValidation, logIn)
router.post("/account-setup/:_id", accountSetupValidation, accountSetup)
router.post("/verify-otp", logInValidation, verifyOtp)

export default router