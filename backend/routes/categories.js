import express from "express"
import { Router } from "express";



//Model
import Category from "../models/Category.js";

const router = Router();


router.post("/", async (req, res) => {
    const newCat = new Category(req.body);
    try {
      const savedCat = await newCat.save();
      res.status(200).send(savedCat);
    } catch (err) {
      res.status(500).send(err);
    }
});

router.get("/", async (req, res) => {
    try {
      const cats = await Category.find();
      res.status(200).send(cats);
    } catch (err) {
      res.status(500).send(err);
    }
});

export default router;