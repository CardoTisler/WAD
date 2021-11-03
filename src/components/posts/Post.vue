<template>
  <div class="post">
    <div class="post_header">
      <img class="post_icon" alt="Profile icon" src="../../assets/images/login.png">
      <p>{{new Date(date).toLocaleDateString()}}</p>
    </div>
    <div class="post_image_container">
      <img v-if="imgUrl !== `none`" class="post_image" alt="Post image" :src="imgUrl">
    </div>
      <div class="post_description_container">
        <p>{{text}}</p>
        <LikeButton />
    </div>
  </div>
</template>

<script>
import LikeButton from './LikeButton'
export default {
  name: 'Post',
  props: {
    text: {
      type: String
    },
    date: {
      type: String
    },
    imgUrl: {
      type: String,
      required: true
    }
  },
  components: {
    LikeButton
  }
}
</script>

<style scoped>
.post{
  box-shadow: 0px 0px 10px 2px lightgray;
  margin: 0% 10% 5% 10%;
  padding-bottom: 2%;
}
.post_header{
  padding: 0% 2% 0% 4%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.post_icon{
  padding: 3% 3% 3% 0%;
  height: 7%;
  width: 7%;
}
.post_image_container{

}
.post_image{
  height: 100%;
  width: 100%;
}
.post_description_container{
  padding: 0% 5% 0% 5%;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
</style>
