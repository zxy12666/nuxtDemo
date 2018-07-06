<template>
  <div>
    <h1>姓名：{{info.name}}</h1>
    <h2>年龄：{{info.age}}</h2>
    <h2>兴趣：{{info.interest}}</h2>
    <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        name:'hello World',
      }
    },
    async asyncData(){
      let {data}=await axios.get('https://api.myjson.com/bins/8gdmr')
      return {info: data}

    }
  }
</script>
