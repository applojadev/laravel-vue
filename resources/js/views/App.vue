<template>
    <v-app>
        <v-navigation-drawer>
            <br>
            <p class="m-3">
                Bem vindo ao canal {{ name }}
            </p>
        </v-navigation-drawer>

        <v-app-bar title="Application"></v-app-bar>

        <v-main>
            <div class="container">
                <div class="text-center" style="margin: 30px 0px 20px 0px;">
                    <h3 class="text-secondary">Laravel & Vue CRUD Single Page Application (SPA) Tutorial</h3>
                </div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse">
                        <div class="navbar-nav">
                            <router-link to="/" class="nav-item nav-link">Home</router-link>
                            <router-link to="/tabs" class="nav-item nav-link">Ver Tabs</router-link>
                            <router-link to="/create" class="nav-item nav-link">Create Task</router-link>
                        </div>
                    </div>
                </nav>
                <br />
                <router-view v-slot="{ Component }">
                    <transition name="custom-classes" enter-active-class="animate__animated animate__fadeIn" mode="out-in">
                        <component :is="Component" :key="$route.path" />
                    </transition>
                </router-view>
            </div>
            <v-bottom-navigation>
                <v-btn to="/" value="Home">
                    <v-icon>mdi-home</v-icon>
                    Home
                </v-btn>

                <v-btn to="/tabs" value="Ver Tabs">
                    <v-icon>mdi-tab</v-icon>
                    Ver Tabs
                </v-btn>

                <v-btn to="/create" value="Create Task">
                    <v-icon>mdi-plus-circle</v-icon>
                    Create Task
                </v-btn>
            </v-bottom-navigation>
            <v-overlay :model-value="loading" class="align-center justify-center">
                <v-progress-circular color="primary" indeterminate size="64">
                </v-progress-circular>
            </v-overlay>
        </v-main>
    </v-app>
</template>

<script>

import { computed } from 'vue'
import { useLoad } from "../stores/LoadStore";

export default {
    data() {
        const load = useLoad()        
        return {
            name: 'Dev Build',
            loading: computed(() => load.loading)
        }
    },

}

</script>

