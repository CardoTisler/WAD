<template>
  <div id="contact">
  <div id ="content">
  <h2>Contact us</h2>
  <i class="fa fa-phone" aria-hidden="true"></i>
    <p>Telephone: +372 123 456 78</p>
    <i class="fa fa-envelope" aria-hidden="true"></i>
    <p>Email: FakeEmail@mail.com</p>
    <i class="fa fa-home" aria-hidden="true"></i>
    <p>Aadress: Fake Aadress 13-30, City</p>
  </div>
  </div>
</template>
<script>

export default {
  name: 'Contact'
}
</script>
<style scoped>
#contact {
    width: 75vh;
    min-height: 50vh;
    border-radius: 5px;
    margin: 2% auto;
    padding: 2%;
    background-image: linear-gradient(to top right,#F9EAF4,#E7ABD1 ,#D8B2DA,#C9B8E3,#B9BFEC,#aac5f5,#EAF1FD);
    box-shadow: 0 0 30px 20px #aac5f5;
    font-size:24px;
}
#contact .con {
    display: flex;
    flex-direction:column;
    align-items:center;
    flex-wrap: wrap;
    margin: 0 auto;
}
</style>
