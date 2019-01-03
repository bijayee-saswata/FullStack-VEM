import axios from 'axios';
 
const url = 'http://localhost:5000/api/posts/';

class postService{
    //Get post
    static getPosts(){
        axios.get(url)
        .then(function (data) {
        //    data.map(post => ({
        //        ...post,
        //        createdAt: new Date(post.createdAt)
        //    }))
        console.log(data);
        function printValues(obj) {
            for (var key in obj) {
                if (typeof obj[key] === "object") {
                    printValues(obj[key]);   
                } else {
                    console.log(obj[key]);    
                }
            }
        }
        
        printValues(data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    //create post

    static insertPost(text){
        return axios.post(url, {
            text
        });
    }

    //Delete post
    static deletePost(id){
        return axios.delete(url + id);
    }
}

export default postService;