<template>
  <div>
    <h3>Some User Details</h3>
    <p>the user id is: {{$attrs.id}}</p>
    <RouterLink :to="{name:'userEdit', params:{id:$attrs.id}}">Edit user</RouterLink>
  </div>
</template>

<script>
  export default {
    name: "UserDiv"
  }
</script>

<style scoped>

</style>
