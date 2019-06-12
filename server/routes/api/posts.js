const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//mongodb connection
async function loadPosts(){
    const client = await mongodb.connect('mongodb://uid:ups@ds.mlab.com:31983/nodeblog', {
        useNewUrlParser : true
    });
    return client.db('nodeblog').collection('posts');
}


//Get posts

router.get('/', async (req,res)=>{
    const posts = await loadPosts();
    res.send(await posts.find({}).toArray());
})

//Add posts

router.post('/', async (req,res)=>{
    const posts = await loadPosts();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

//Delete posts 

router.delete('/:id', async (req,res)=>{
    const posts = await loadPosts();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

module.exports = router;
