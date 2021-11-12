<template>
  <div>
    <Header username="random" email="email@random.com"/>
    <div id="resetButton">
      <ResetButton/>
    </div>

    <PostsList />
  </div>
</template>

<script>
import PostsList from '../components/posts/PostsList.vue'
import Header from '../components/common/Header'
import ResetButton from '../components/posts/ResetButton'

export default {
  name: 'Posts',
  components: {
    ResetButton,
    PostsList,
    Header
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#resetButton{
  margin-left: 47%;
}
</style>
