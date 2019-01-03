<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <!-- Create post here -->
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="postContainer">
      <div class="post"
      v-for="(post, index) in posts"
      v-bind:item="post"
      v-bind:index="index"
      v-bind:key="post._id">
        <p class="text">{{ post.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import postService from '../postService.js'
export default {
  name: 'postComponent',
  data(){
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created(){
    try{
      this.posts = await postService.getPosts();
    } 
    catch(error){
      this.error = error.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
