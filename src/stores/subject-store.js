import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '@/boot/axios';

export const useSubjectStore = defineStore('subjects',() => {
    const subjects = ref([])
    async function fetchAll() {
        try{
           const res = await api.get('/subjects')
           subjects.value = res.data
        } catch (error){
            console.error('Error:', error)
        };
        
    }
    return {subjects, fetchAll}
})