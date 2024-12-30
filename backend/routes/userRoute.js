import express from "express"
import {createUser, bookVisit, allBookings} from "../controllers/userController.js"

const router = express.Router()

router.post("/register", createUser)
router.post("/bookVisit/:id", bookVisit)
router.get("/allBookings", allBookings)

export {router as userRoute}