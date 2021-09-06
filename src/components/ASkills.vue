<template>
    <div>
        <div>Add Skills to Master</div>
        <form action="">
            <div class="my-3">
                <div class="my-4">
                    <label for="type">Type:</label><input type="text" name="Type" id="type">
                </div>
                <div class="my-4">
                    <label for="name">Name:</label><input type="text" name="Name" id="name">
                </div>
            </div>
            <button class="btn btn-primary"><Plus /></button>
        </form>
        <table class="table mt-3">
            <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                </tr> 
            </thead>
            <tbody>
                <tr v-for="skill in skills" :key="skill.name">
                    <td>{{skill.type}}</td>
                    <td>{{skill.name}}</td>
                    <td><button class="btn btn-primary">Edit</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Plus from 'vue-material-design-icons/Plus.vue'

export default {
    name: "skills",
    data(){
        return{
            skills: [{
                type: "Non-technical",
                name: "SEO"
            },
            {
                type: "Technical",
                name: "C++"
            },
            {
                type: "Technical",
                name: "C"
            }]
        }
    },
    components: {
        Plus
    }
}
</script>

<style scoped>

</style>

