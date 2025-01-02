import asyncHandler from 'express-async-handler'
import {ObjectId} from "mongodb"
import {prisma} from "../config/prismaConfig.js"


// CONTROLLER FUNCTION FOR CREATING A USER
export const createUser = asyncHandler(async (req, res) => {
    console.log("creating a user")

    let {email} = req.body
    const userExists = await prisma.user.findUnique({where: {email}})

    if (!userExists) {
        const user = await prisma.user.create({data: req.body })
        res.send({
            message: "User registered successfully",
            user: user, 
        })
    }
    else res.status(201).send({message:"User already registered"}) 
})

// CONTROLLER FUNCTION FOR BOOKING A RESIDENCY VISIT

export const bookVisit = asyncHandler(async (req, res) => {
    const {email, date} = req.body
    const {id} = req.params

    try {
        const alreadyBooked = await prisma.user.findUnique({
            where: {email: email},
            select: {bookedVisits: true}
        })

        if(alreadyBooked.bookedVisits.some((visit)=>visit.id === id)) {
            res.status(400).json({message: "This residency is already booked by you"})
        }
        else {
            await prisma.user.update({
                where: {email: email},
                data: {
                    bookedVisits: {push: {id, date}}
                }
            })
            res.send("Your visit is booked successfully")
        }
    } catch (err) {
        throw new Error(err.message)
    }
})

// CONTROLLER FUNCTION FOR GETTING ALL BOOKINGS OF A USER

export const getAllBookings = asyncHandler(async (req, res) => {
     const {email}  = req.body
     try {
        const bookings = await prisma.user.findUnique({
            where: {email},
            select: {bookedVisits: true}
        })
        
        res.status(200).send({bookings})
     } catch(err) {
        throw new Error(err.message)
     }
})

// CONTROLLER FUNCTION FOR CANCELING A BOOKING OF A USER
export const cancelBooking = asyncHandler(async (req, res) => {
    const {email} = req.body
    const {id} = req.params
    try {
        const user = await prisma.user.findUnique({
            where: {email},
            select: {bookedVisits: true}
        })

        const index = user.bookedVisits.findIndex((visit) => visit.id === id)

        if(index === -1) {
            res.status(404).json({message: "Booking not found"})
        } else {
            user.bookedVisits.splice(index, 1)
            await prisma.user.update({
                where: {email},
                data: {
                    bookedVisits: user.bookedVisits
                }
            })
            res.send("Booking canceled successfully")
        }
    } catch (err) {
        throw new Error(err.message)
    }
})

// CONTROLLER FUNCTION FOR ADDING A RESIDENCY TO THE FAVOURITES OF A USER
export const toFav = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { rid } = req.params;

    // Validate ObjectId format
    if (!ObjectId.isValid(rid)) {
        return res.status(400).json({ message: "Invalid residency ID format" });
    }

    const residencyId = new ObjectId(rid).toString();

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.favResidenciesID.includes(residencyId)) {
            const updatedUser = await prisma.user.update({
                where: { email },
                data: {
                    favResidenciesID: {
                        set: user.favResidenciesID.filter((id) => id !== residencyId),
                    },
                },
            });
            res.json({ message: "Removed from favourites", user: updatedUser });
        } else {
            const updatedUser = await prisma.user.update({
                where: { email },
                data: {
                    favResidenciesID: {
                        push: residencyId,
                    },
                },
            });
            res.json({ message: "Added to favourites", user: updatedUser });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// CONTROLLER FUNCTION FOR GETTING ALL THE FAVOURITES RESIDENCIES OF A USER.

export const getAllFav = asyncHandler(async (req, res) => {
    const {email} = req.body
    try{
        const getAllfav = await prisma.user.findUnique({
            where: {email},
            select: {favResidenciesID: true}
        })
        res.status(200).send({favResidenciesID: getAllfav.favResidenciesID})
    } catch (err) {
        throw new Error(err.message)
    }
});