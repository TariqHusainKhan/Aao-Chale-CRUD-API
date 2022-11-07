import { Router } from "express"
import { updateUser, userList, userDetail } from "../controllers/userController"
import { userUpdateValidation } from "../util/lib"

const router = Router()

router.post("/:_id", userUpdateValidation, updateUser)
router.get("/:_id", userDetail)
router.get("/", userList)

export default router
