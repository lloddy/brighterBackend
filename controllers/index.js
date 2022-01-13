const express = require('express');
const router = express.Router();
const Blogs = require('../models/blogs');

router.get('/', (req, res) => {
    res.send("Hello World!")
});

// INDEX
router.get('/blogs', async (req, res) => {
    try {
        res.json(await Blogs.find({}));
    } catch (error) {
        res.status(400).json(error);
    };
});

// DELETE
router.delete('/blogs/:id', async (req, res) => {
    try {
        res.json(await Blogs.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    };
});

// UPDATE
router.put('/blogs/:id', async (req, res) => {
    try {
        res.json(
            await Blogs.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })
        );        
    } catch (error) {
        res.status(400).json(error);
    };
});

// CREATE
router.post('/blogs', async (req, res) => {
    try {
        res.json(await Blogs.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    };
});

module.exports = router;