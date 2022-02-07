import express from "express"
import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"


dotenv.config()

//Model
import User from "../models/User.js";

const router = Router();

//register user
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })

        const user = await newUser.save()
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

//login user
router.post('/login', async (req, res) => {
    try {
        //check username
        const user = await User.findOne({ username: req.body.username })
        if(!user) return res.status(400).send("Wrong Credentials!")

        //check password
        const validate = await bcrypt.compare(req.body.password, user.password)
        if(!validate) return res.status(400).send("Wrong Password")

        //after login create token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        await res.header("auth-token", token);

        //show user
        const {password, ...others} = user._doc
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err)
    }
})

export default router;