<template>
  <div id="posts-list">
<!-- for loopib posts array läbi, luues uue Post componenti iga iterationiga. -->
    <div v-for="(post, index) in posts" :key="index">
      <Post :date=post.date :text=post.text :img-url=post.image.src />
    </div>
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  name: 'PostsList',
  components: {
    Post
  },
  data () { // data on pmst iga komponendi isiklik in-memory db
    return {
      postsa: []
    }
  },
  computed: {
    posts () {
      return this.$store.getters.getAllPostsArray
    }
  }
  // async mounted () {
  //   await fetch('https://api.npoint.io/b5c08d0e15c1c01572f1', {
  //     method: 'GET'
  //   }).then(async (res) => {
  //     const {posts} = await res.json()
  //     // this.$store.mutations.setAllPostsArray([], posts)
  //     this.posts = posts
  //   })
  // }
}
</script>

<style scoped>
  #posts{
    width: 70%;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-left: 15%;
  }
</style>
