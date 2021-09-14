<template>
  <div>
      <div>
    <h4>Import file:</h4>
    <hr>
    <input type="file" accept=".xlsx" ref="file" id="file" @change=handleFileUpload()>
    <button @click="submitFile()">Upload File</button>
  </div>
  <div class="my-4">
      <hr>
      <h4>Imported data from File:</h4>
      <table>
          <thead>
              <tr>
                  <th scope="col">Appraiser Name</th>
                  <th scope="col">Employee Name</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="f in filedata" :key="f.AppraiserName">
                  <td>{{f.AppraiserName}}</td>
                  <td>{{f.EmployeeName}}</td>
              </tr>
          </tbody>
      </table>

  </div>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
    data: function(){
    return{
        file: null,
        filedata: {},
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
        this.fetchImportedData()
    })
    .catch(err =>{
        console.log(err);
    })
    },
    fetchImportedData(){
        console.log("Fetch Imported func called");
        axios.get("http://localhost:8081/fetchimporteddata")
        .then(res=>{
            console.log(res);
            this.filedata = res.data.ImportedData
            
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
},
mounted:function(){
    this.fetchImportedData()
}
}
</script>
 
<style scoped>
  
</style>