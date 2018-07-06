<template>
  <div>
    <div class="diss"></div>
    <ul>
      <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
      <li><nuxt-link :to="{name:'news'}">NEWS</nuxt-link></li>
      <li><nuxt-link :to="{name:'asyncData'}">asyncData</nuxt-link></li>
    </ul>
  </div>
</template>

<script>


export default {
  components: {

  }
}
</script>

<style>
  .diss{
    width: 500px;
    height:500px;
    background-image: url('~static/logo.png');
    background-size: cover;
  }
</style>
