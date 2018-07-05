<template>
  <div>
    <h2>About Index News</h2>
    <ul>
      <li><nuxt-link :to="{name:'index'}">home</nuxt-link></li>
      <li><nuxt-link :to="{name:'news-id',params:{id:3306,title:'I m news'},query:{msg:'abc'}}">NEWS1</nuxt-link></li>
      <li><nuxt-link :to="{name:'news-id',params:{id:3307}}">NEWS2</nuxt-link></li>
    </ul>
  </div>
</template>
