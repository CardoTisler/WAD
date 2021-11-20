<template>
<form autocomplete="off" class="form">
  <div class="con">
   <header class="head-form">
      <h2>Log In</h2>
      <p>Welcome back!</p>
   </header>
   <i class="login__icon fas fa-user"></i>
  <div class="input">
    <input class = "login_input" name="e-mail" placeholder="e-mail" type="text">
  </div>
  <div class="input">
    <input class = "login_input" name="password" placeholder="Password" type="password">
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
    width: 75vh;
    min-height: 50vh;
    border-radius: 5px;
    margin: 2% auto;
    padding: 2%;
    background-image: linear-gradient(to top right,#F9EAF4,#E7ABD1 ,#D8B2DA,#C9B8E3,#B9BFEC,#aac5f5,#EAF1FD);
    box-shadow: 0 0 30px 20px #aac5f5;
}
form .con {
    display: flex;
    flex-direction:column;
    align-items:center;
    flex-wrap: wrap;
    margin: 0 auto;
    font-size:24px;
}

.login_input {
height:5vh;
border: none;
border-bottom: 2px solid #D1D1D4;
background: none;
padding: 10px;
padding-left: 24px;
font-weight: 700;
width: 75%;
transition: .2s;
}

.login_input:active,
.login_input:focus,
.login_input:hover {
outline: none;
border-bottom-color: cornflowerblue;
  }

.loginbutton {
  outline:none;
  border-radius: 15px;
  display: block;
  margin: 15px auto;
  padding: 15px 45px;
  width:20%;
}
</style>
