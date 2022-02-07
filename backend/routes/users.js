import express from "express"
import { Router } from "express";
import dotenv from "dotenv"
import bcrypt from 'bcrypt'


dotenv.config()

//Model
import User from "../models/User.js";

const router = Router();

//update user
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(201).send(updatedUser);
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).send("Please only update your own account")
    }
})

//delete user


export default router;