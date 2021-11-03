<template>
  <div id="like-button">
    <button class="button" @click.prevent="incrementLike">
      <i class="fa fa-thumbs-up" aria-hidden="true"></i>
    </button>
    <div>
      <p v-if="likes === 1">{{likes}} like</p>
      <p v-else>{{likes}} likes</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LikeButton',
  data () {
    return {
      likes: 0
    }
  },
  methods: {
    incrementLike: function () {
      this.likes += 1
    }
  }
}
</script>
<style scoped>
#like-button{
  display: flex;
  flex-direction: row;
}
.button{
  height: auto;
  width: fit-content;
  padding: 1% 2% 1% 2%;
  border-radius: 2px;
  background-color: cornflowerblue;
  margin-right: 5px;
}
.fa-thumbs-up{
  color: white;
}
</style>
