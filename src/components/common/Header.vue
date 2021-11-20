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
<button class="buttonh" type="button">
<router-link to="/login">Login</router-link>
</button>
<button class="buttonh" type="button">
<router-link to="/">Posts</router-link>
</button>
<button class="buttonh" type="button">
<router-link to="/contact">Contact</router-link>
</button>
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
.buttonh {
box-shadow: inset 0px 0px 0px #E7ABD1;
transition: all 0.5s;
background-image: linear-gradient(to top right,#F9EAF4,#E7ABD1 ,#D8B2DA,#C9B8E3,#B9BFEC,#aac5f5,#EAF1FD);
}

.buttonh:hover {
box-shadow: inset 0px -80px 0px cornflowerblue;
}
</style>
