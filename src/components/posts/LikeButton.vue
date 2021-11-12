<template>
  <div id="like-button">
    <button class="button" @click.prevent="incrementLike">
      <i class="fa fa-thumbs-up" aria-hidden="true"></i>
    </button>
    <div>
      <p v-if="likeCount === 1">{{ likeCount }} like</p>
      <p v-else>{{ likeCount }} likes</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LikeButton',
  props: {
    likeCount: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },

  methods: {
    incrementLike: function () {
      // Currently increment like count in browser side
      this.$store.commit('incrementLikeCount', this.id)
    }
  }
}
</script>
<style scoped>
#like-button {
  display: flex;
  flex-direction: row;
}

.button {
  height: auto;
  width: fit-content;
  padding: 1% 2% 1% 2%;
  border-radius: 2px;
  background-color: cornflowerblue;
  margin-right: 5px;
}

.fa-thumbs-up {
  color: white;
}
</style>
