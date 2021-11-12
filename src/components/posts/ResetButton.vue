<template>
  <div id="like-button">
    <button class="button" @click.prevent="resetLikes">
      <p>Reset Likes </p>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ResetButton',
  methods: {
    resetLikes: function () {
      this.$store.commit('resetLikes')
    }
  }
}
</script>

<style scoped>
#like-button {
  display: flex;
  flex-direction: row;
}
#like-button p::after{
content: '\1F5D8';
}

.button {
  height: auto;
  width: fit-content;
  padding: 1% 2% 1% 2%;
  border-radius: 2px;
  background-color: cornflowerblue;
  margin-right: 5px;
}
</style>
