<template>
  <div>
    <!-- Employee Login -->
    <div v-if="this.switch === true "> 

    </div>
    <!-- Admin Login -->
    <div v-if="this.switch === false">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data(){
    return{
      switch : true
    }
  },
}
</script>

<style scoped>
nav{
  text-align: right;
  background-color: whitesmoke;
  font-size: 20px;
  color: black;
  
}

a{
  color: black;
}

a:hover{
  background-color:white;
}
</style>