<template>
  <div id="like-button">
    <button class="button" @click.prevent="resetLikes">
      <p>Reset Likes</p>
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

.button {
  height: auto;
  width: fit-content;
  padding: 1% 2% 1% 2%;
  border-radius: 2px;
  background-color: cornflowerblue;
  margin-right: 5px;
}
</style>
