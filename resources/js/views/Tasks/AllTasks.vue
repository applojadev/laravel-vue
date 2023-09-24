<template>
    <div>
    <h3 class="text-center">All Tasks</h3>
    <br/>    
    <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="task in tasks" :key="task.id">
                <td>{{ task.id }}</td>
                <td>{{ task.title }}</td>
                <td>{{ task.description }}</td>
                <td>{{ task.created_at }}</td>
                <td>{{ task.updated_at }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: task.id }}" class="btn btn-primary">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteTask(task.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>        
    </div>
</template>

<script>

import { useLoad } from "../../stores/LoadStore";     

export default {
    data() {
        const load = useLoad()
        return {
            tasks: [],
            load: load
        }
    },
    created() {
        this.load.setLoading()
        http
            .get('/tasks')
            .then(response => {
                this.tasks = response.data;
            })
            .catch(error => console.log(error))
            .finally(() => this.load.setLoading())
    },
    methods: {
        deleteTask(id) {
            http
                .delete(`/delete/${id}`)
                .then(response => {
                    let i = this.tasks.map(item => item.id).indexOf(id);
                    this.tasks.splice(i, 1)
                });
        }

    }
}

</script>