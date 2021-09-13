<template>
  <div>
    <h4>Import file:</h4>
    <input type="file" accept=".xlsx" ref="file" id="file" @change=handleFileUpload()>
    <button @click="submitFile()">Upload File</button>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
    data: function(){
    return{
        file: null,
    }
 },
 name:'Doc',
methods:{
    handleFileUpload:function(){
        console.log("File upload is called")
        this.file = this.$refs.file.files[0];
    },
    submitFile:function(){
        let formData = new FormData();
        formData.append('file',this.file)
        axios.post("http://localhost:8081/filesend",formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    .then(res=>{
        console.log(res);
        console.log("File sent successfully");
    })
    .catch(err =>{
        console.log(err);
    })
    }
}
}
</script>
 
<style scoped>
  
</style>