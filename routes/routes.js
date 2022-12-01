const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const Model = require('../model/model');
//post
router.post('/createPost',async (req,res)=>{
    const newPost = new Model({
        title : req.body.title,
        author : req.body.author,
        content : req.body.content
    })
    try{
        const result = await newPost.save();
        res.status(200).json(result);

    }catch(error)
    {
        res.status(400).json({message : error.message})
    }
})

//get

router.get('/getAllPost', async (req,res)=>{
    try{
        const result = await newPost.save();
        res.status(200).json(result);

    }catch(error)
    {
        res.status(500).json({message : error.message})
    }
})

router.get('/getPost/:id',(req,res)=>{

    const id =req.params.id
    res.send(`Post data with id ${id} `)
})
//patch
router.patch('/editPost/:id',(req,res)=>{

    const id =req.params.id
    res.send(`Edit data with id ${id} `)
})
//delete
router.delete ('/deletePost/:id',(req,res)=>{

    const id =req.params.id
    res.send(`Deleted data with id ${id} `)
})

router.get("/",(req,res)=>{
    res.send("Prabhneet")
})



module.exports = router;