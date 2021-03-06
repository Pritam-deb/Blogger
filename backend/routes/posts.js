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
            res.status(200).send(updatedPost);
          } catch (err) {
            res.status(500).send(err);
          }
        } else {
          res.status(401).send("You can update only your post!");
        }
      } catch (err) {
        res.status(500).send(err);
    }
})

//delete post
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).send("Post has been deleted...");
        } catch (err) {
          res.status(500).send(err);
        }
      } else {
        res.status(401).send("You can delete only your post!");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });
  

//get post
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).send(post);
    } catch (err) {
      res.status(500).send(err);
    }
});
  
//get all posts with request query
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if (username) {
        posts = await Post.find({ username });
      } else if (catName) {
        posts = await Post.find({
          categories: {
            $in: [catName],
          },
        });
      } else {
        posts = await Post.find();
      }
      res.status(200).send(posts);
    } catch (err) {
      res.status(500).send(err);
    }
});

export default router;