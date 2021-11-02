<template>
  <div>
    <Header username="random" email="email@random.com"/>
    <PostsList />
  </div>
</template>

<script>
import PostsList from '../components/posts/PostsList.vue'
import Header from '../components/common/Header'

export default {
  name: 'Posts',
  components: {
    PostsList, Header
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
