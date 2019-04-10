var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Post = sequelize.import('../models/post');


//This router creates new posts
router.post('/create', (req, res) => {
    const newPost = {
        trackname: req.body.post.trackname,
        artistname: req.body.post.artistname,
        link: req.body.post.link,
        numberoflikes: req.body.post.numberoflikes,
        useridofposter: req.body.post.useridofposter
        
    };
 
    Post.create(newPost)
        .then(post => res.status(200).json(post))
        .catch(err => res.status(500).json({ error: err }))
 })


//This router finds all posts made by a specific user
router.get('/finduserposts/:userid', (req, res) => {
    Post.findAll({ where: { useridofposter: req.params.userid} })
       .then(posts => res.status(200).json(posts))
       .catch(err => res.status(500).json({ error: err }))
});


//This router finds x number recent posts, (use limit)
router.get('/findrecentposts', (req, res) => {
    Post.findAll({limit: 5},)
       .then(posts => res.status(200).json(posts))
       .catch(err => res.status(500).json({ error: err }))
});

//This router deletes a post based on the id
router.delete('/deletepost/:id', (req, res) => {
    Post.destroy({ where: { id: req.params.id} })
        .then(deleted => res.status(200).json({
            deleted: req.body.name,
            message: 'post succesfully deleted'
        }))
        .catch(err => res.status(500).json({ error : err }))
 })

module.exports = router;