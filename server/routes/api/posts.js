const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//mongodb connection
async function loadPosts(){
    const client = await mongodb.connect('mongodb://abc123:abc123@ds131983.mlab.com:31983/nodeblog', {
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

//Delete posts 


module.exports = router;