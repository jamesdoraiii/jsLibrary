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
        useridofposter: req.user.id
    };
 
    Post.create(newPost)
        .then(post => res.status(200).json(post))
        .catch(err => res.status(500).json({ error: err }))
 })


//This router finds all posts made by the user who is currently validated
router.get('/finduserposts', (req, res) => {
    Post.findAll({ where: { useridofposter: req.user.id} })
       .then(posts => res.status(200).json(posts))
       .catch(err => res.status(500).json({ error: err }))
});


//This router finds x number recent posts, (use limit) STILL NEED TO FIGURE OUT HOW TO FIND THE MOST RECENT POSTS
router.get('/findrecentposts', (req, res) => {
    Post.findAll(
        {order: [
            ['id', 'DESC']
        ]},
        {limit: 10})
       .then(posts => res.status(200).json(posts))
       .catch(err => res.status(500).json({ error: err }))
});

//This router deletes a post based on the specific post id
router.delete('/deletepost/:id', (req, res) => {
    Post.destroy({ where: { id: req.params.id} })
        .then(deleted => res.status(200).json({
            deleted: req.body.name,
            message: 'post succesfully deleted'
        }))
        .catch(err => res.status(500).json({ error : err }))
 })

 //You need to write a new update router which will update specific entries and add 1 to the likes when pressed.
 //----------------------------------

 router.put('/like1up/:id', (req,res) =>{

    Post.findOne({where: {id:req.params.id}}).then((post) => 
        
        Post.update({
            numberoflikes: post.numberoflikes+=1

        },
        {where: {id: req.params.id}}
        ).then(
            function updateSuccess(updatedLog) { //8
                res.json({
                    
                });            
            },
            function updateError(err){ //9
                res.send(500, err.message);
            }
))});


 //Also write a new update router which will update specific entries and subtract 1 when the like is pressed a second time. You will then use a ternary so that a user cant like a post multiple times, it will go up or it will go down. 

 router.put('/like1down/:id', (req,res) =>{

    Post.findOne({where: {id:req.params.id}}).then((post) => 
        
        Post.update({
            numberoflikes: post.numberoflikes-=1

        },
        {where: {id: req.params.id}}
        ).then(
            function updateSuccess(updatedLog) { //8
                res.json({
                    
                });            
            },
            function updateError(err){ //9
                res.send(500, err.message);
            }
))});


 //You need to write a router which will bring in the top 10 entries with the highest amount of likes based on a time frame (day, week, month)
 //----------------------------------

 router.get('/findtopposts', (req, res) => {
    Post.findAll(
        {order: [
            ['numberoflikes', 'DESC']
        ]},
        {limit: 10})
       .then(posts => res.status(200).json(posts))
       .catch(err => res.status(500).json({ error: err }))
});




module.exports = router;