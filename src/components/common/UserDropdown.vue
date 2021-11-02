<template>
  <details>
    <summary><img src="../../assets/images/login.png"></summary>
    <p>{{username}}</p>
    <p>{{email}}</p>
  </details>
</template>
<script>
export default{
  name: 'UserDropdown',
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
<style>
details {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: .5em .5em 0;
}
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}

summary {
  font-weight: bold;
  margin: -.5em -.5em 0;
  padding: .5em;
}

details[open] {
  margin-top: 100px;
  background-color: white;
  z-index: 1;

}

details[open] summary {
  border-bottom: 1px solid #aaa;
  margin-bottom: .5em;

}
summary img{
  height: 20px;
  width: 20px;
}
</style>
