<template>
    <div>
        <div>Settings</div>
        <form action="">
            <div class="my-3">
                <div class="my-4">
                    <label for="type">Max Experience.:</label><input type="text" name="Type" id="type">
                </div>
                <div class="my-4">
                    <label for="name">Max Proficiency Level:</label><input type="text" name="Name" id="name">
                </div>
                <div class="my-4">
                    <label for="name">Max Team Size:</label><input type="text" name="Name" id="name">
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
    }
}
</script>

<style scoped>

</style>