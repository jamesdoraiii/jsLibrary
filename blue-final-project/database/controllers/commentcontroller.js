var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Comment = sequelize.import('../models/comment');

//This router creates new comments
router.post('/create', (req, res) => {
    const newComment = {
        commentcontent: req.body.comment.commentcontent,
        useridofcommenter: req.body.comment.useridofcommenter,
        postidofparent: req.body.comment.postidofparent
        
    };
 
    Comment.create(newComment)
        .then(comment => res.status(200).json(comment))
        .catch(err => res.status(500).json({ error: err }))
});


//This router finds all comments located under a specific post
router.get('/findpostcomments/:postid', (req, res) => {
    Comment.findAll({ where: { postidofparent: req.params.postid} })
       .then(comments => res.status(200).json(comments))
       .catch(err => res.status(500).json({ error: err }))
});

//This router finds all comments made by a specific user
router.get('/findusercomments/:userid', (req, res) => {
    Comment.findAll({ where: { useridofcommenter: req.params.userid} })
       .then(comments => res.status(200).json(comments))
       .catch(err => res.status(500).json({ error: err }))
});


//This router deletes a comment based on the id
router.delete('/deletecomment/:id', (req, res) => {
    Comment.destroy({ where: { id: req.params.id} })
        .then(deleted => res.status(200).json({
            deleted: req.body.name,
            message: 'comment succesfully deleted'
        }))
        .catch(err => res.status(500).json({ error : err }))
 })



module.exports = router;