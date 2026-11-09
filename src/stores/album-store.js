import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "@/boot/axios";

export const useAlbumStore = defineStore('album', ()=>{
  const albums = ref ([])
  const loading = ref(false)
  const errMsg = ref('')
async function loadAlbums() {
    loading.value = true
    errMsg.value = ''
    try{
        const respone = await api.get('/albums')
        albums.value = respone.data
    } catch (error){
        if(error.respose){
            errMsg.value = `Server Error (${error.response.status})`
        }
        else if(error.request){
            errMsg.value = 'Unable to connect to the server.'
        }
        
        else {
             errMsg.value = error.message
        
    }
    console.error(error)
    } finally{
    loading.value = false
    }
}
    return{ albums, loading, errMsg, loadAlbums}
})