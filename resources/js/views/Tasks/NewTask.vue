<template>
    <div>
        <h3 class="text-center">New Task</h3>
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="newTask">
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" class="form-control" v-model="task.title">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control" v-model="task.description">
                    </div>
                    <button type="submit" class="btn btn-primary text-white mt-3">Add Task</button>
                </form>
            </div>
        </div>
    </div>    
</template>

<script>

export default {
    data() {
        return {
            task: {}
        }
    },
    methods: {
        newTask() {
            http
                .post('/create', this.task)
                .then(response => (
                    this.$router.push({ name: 'home' })
                ))
                .catch(error => console.log(error))
        }
    }
}
    
</script >
