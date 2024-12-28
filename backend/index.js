import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import {userRoute} from './routes/userRoute.js'
import {residencyRoute} from './routes/residencyRoute.js'

const app = express()

const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

app.use("/api/user", userRoute )
app.use("/api/residency", residencyRoute )