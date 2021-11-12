<template>
<footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">Footer</h1>
      <div id="footer-links">
      <router-link to="/contact">Contact</router-link>
      </div>
  </div>
</footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  display: flex;
  flex-flow: row wrap;
  padding: 30px 30px 20px 30px;
  color: white;
  background-color:cornflowerblue;
  border-top: 1px solid #e5e5e5;
}
.footer > * {
  flex:  1 100%;
}
#footer-links{
  text-align-last: center;
  margin:1%;
}
#footer-links a{
  text-decoration: none;
  color: black;
}
</style>
