<template>
<form autocomplete="off" class="form">
  <div class="con">
   <header class="head-form">
      <h2>Log In</h2>
      <p>Welcome back!</p>
   </header>
  <div class="input">
    <input name="e-mail" placeholder="e-mail" type="text">
  </div>
  <div class="input">
    <input name="password" placeholder="Password" type="password">
  </div>
  <button class="loginbutton" type="button">
    <p>Log In</p>
  </button>
  </div>
</form>
</template>
<script>
export default {
  name: 'Login'
}
</script>
<style scoped>
form {
    width: 25%;
    min-height: 50vh;
    border-radius: 5px;
    margin: 2% auto;
    padding: 2%;
    background-image: linear-gradient(#f4c2c2, #aac5f5  45%, cornflowerblue);
}
form .con {
    display: flex;
    flex-direction:column;
    align-items:center;
    flex-wrap: wrap;
      margin: 0 auto;
}
</style>
