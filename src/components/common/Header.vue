<!-- TODO: Center header div-->
<!-- TODO: Fix summary toggle wobble-->
<!-- TODO: Stickynote clickable area too large-->
<template>
  <div id="header">
    <div id ="header-content">
      <a class="home" href="/login"><img alt='home' src="../../assets/images/stickynote.png"></a>
      <div class="search">
        <input type="text" placeholder="Search">
        <button type="submit"><i class="fa fa-search"></i></button>
      </div>

      <UserDropdown :username=this.username :email=this.email />

    </div>
    <div id="header-links">
      <router-link to="/login">Login</router-link>
      <router-link to="/">Posts</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>
<script>
import UserDropdown from './UserDropdown'

export default{
  name: 'header',
  components: {UserDropdown},
  props: {
    username: {
      type: String
    },
    email: {
      type: String
    }
  }
}
</script>
<style scoped>
#header{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#header-content{
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:space-around;
  height: 50px;
  width: 100%;

}
#header-links{
  margin-bottom: 2%;
  margin-top: 0.5%;
  width: 30%;
  text-align-last: justify;
}
#header-links a{
  text-decoration: none;
  color: black;
}
#header-links a:hover{

}
.search input[type=text]{
  width: 70%;
}
.search{
  width: 50%;
  margin-top: auto;
  margin-bottom: auto;

}
.search ~ button{
  height: 20%;
  width: 5%;
}

.home img{
  padding: 3% 3% 3% 0%;
  height: 7%;
  width: 7%;

}
.home{
  padding-left: 5%;
  margin: 3px;

}
summary img{
  height: 20px;
  width: 20px;
}
</style>
