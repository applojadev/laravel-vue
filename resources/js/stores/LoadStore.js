import { defineStore } from 'pinia'

export const useLoad = defineStore('load', {
    state: () => ({        
        loading: false
    }),    
    getters: {
        getLoading() {
            return this.loading
        },
    },
    actions: {
        setLoading(state) {
            this.loading = !this.loading
        },
    }    
})