<template>
  <div>
    <h1>The User Page</h1>
    <hr/>
    <button class="btn" @click="navigateToHome">Go To Home</button>
    <hr/>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: "User",
    methods:{
      navigateToHome(){
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>
