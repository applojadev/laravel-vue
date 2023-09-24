<template>
    <div>
        <h3 class="text-center">Edit Task</h3>
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="updateTask">
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" class="form-control" v-model="task.title">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control" v-model="task.description">
                    </div>
                    <button type="submit" class="btn btn-primary text-white mt-3">Update Task</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import { useLoad } from "../../stores/LoadStore";

export default {
    data() {
        const load = useLoad()
        return {
            task: {},
            load: load
        }
    },
    created() {
        this.load.setLoading()
        http
            .get(`/edit/${this.$route.params.id}`)
            .then((response) => {

                this.task = response.data;
            })
            .catch(error => console.log(error))
            .finally(() => this.load.setLoading())
    },
    methods: {
        updateTask() {
            this.load.setLoading()
            http
                .post(`/update/${this.$route.params.id}`, this.task)
                .then((response) => {
                    this.$router.push({ name: 'home' });
                })
                .catch(error => console.log(error))
                .finally(() => this.load.setLoading())
        }
    }
}

</script>