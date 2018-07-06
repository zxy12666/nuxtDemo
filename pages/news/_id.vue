<template>
  <div>
    <h2>news content</h2>
    <p>newsId{{$route.params.id}}</p>
    <p>{{$route.query.msg}}</p>
    <ul>
      <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
    </ul>
  </div>
</template>
<script>


  export default {
    validate({params}){
      return /^\d+$/.test(params.id)
    },
    data(){
      return{
        title:this.$route.params.title,
      }
    },
    head(){
      return {
        title:this.title,
        meta:[
          {hid:'description',name:'news',content:'This is news page'}
        ]
      }
    }
  }
</script>

<style>

</style>
