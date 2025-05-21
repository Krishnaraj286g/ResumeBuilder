const express = require("express");
const router = express.Router();
const Resume = require("../models/Resume");
const auth = require("../middleware/authMiddleware");

router.get("/",auth,async(req,res) => {
    const resumes = await Resume.find({userId:req.user.id});
    res.json(resumes);
});

router.post("/",auth,async(req,res) => {
    const newResume = new Resume({...req.body,userId:req.user.id});
    await newResume.save();
    res.status(201).json(newResume);
});

module.exports = router;