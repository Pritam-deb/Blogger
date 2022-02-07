import express from "express"
import { Router } from "express";
import dotenv from "dotenv"
import bcrypt from 'bcrypt'


dotenv.config()

//Model
import User from "../models/User.js";
import Post from "../models/Post.js"

const router = Router();

//create post
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(201).send(savedPost);
    } catch (err) {
        res.status(500).send(err)
    }
})


//update post
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
          try {
            const updatedPost = await Post.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            );
            res.status(200).json(updatedPost);
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json("You can update only your post!");
        }
      } catch (err) {
        res.status(500).json(err);
    }
})

//delete post
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({username: user.username})
                await User.findByIdAndDelete(req.params.id)
                res.status(201).send("The user has been deleted");
            } catch (err) {
                res.status(500).json(err)
            }
        } catch (error) {
            res.status(404).send("User not found")
        }
    } else {
        res.status(401).send("Please only delete your own account")
    }
})

//get post
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).send(others)
    } catch (err) {
        res.status(400).send(err)
    }
})


export default router;