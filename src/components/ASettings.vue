<template>
    <div>
        <div>Settings</div>
        <form action="" @submit.prevent="Asettings()">
            <div class="my-3">
                <div class="my-4">
                    <label for="type">Max Experience.:</label><input type="text" name="Type" id="type"  v-model="max_exp">
                </div>
                <div class="my-4">
                    <label for="name">Max Proficiency Level:</label><input type="text" name="Name" id="name" v-model="max_prof">
                </div>
                <div class="my-4">
                    <label for="name">Max Team Size:</label><input type="text" name="Name" id="name" v-model="max_team_size">
                </div>
            </div>
            <button class="btn btn-primary"><Edit /></button>
        </form>
    </div>
</template>

<script>
import Edit from 'vue-material-design-icons/AccountEdit.vue'
export default {
    name: "Asettings",
    components: {
        Edit
    },
    data(){
        return{
            max_exp:'',
            max_prof:'',
            max_team_size:''
        }
    },
    methods : {
        Asettings(){
            var obj={
                max_exp:this.max_exp,
                max_prof:this.max_prof,
                max_team_size:this.max_team_size
            }
            console.log(obj)
            // axios.post('/Asettings',obj)
        
            // .then((response)=>{
            //     console.log(response.data)
            
            // }).catch((e)=>{
            //     console.log(e)
            // })
        }

    }
}
</script>

<style scoped>

</style>