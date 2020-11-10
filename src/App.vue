<template>
   <div id="app">
       <p>hello world</p>
       <router-view></router-view>
   </div>
</template>

<script>
export default {
   name: 'app',
}
</script>

<style lang="scss" scoped>
   #app{
       p{
           font-size: 30px;
       }
       background: #ccc;
   }
</style>