<template>
    <div class="q-pa-md">
        <q-btn color="primary" label="Delete" 
        @click="confirmDialog = true" />

    </div>
    <q-dialog v-model="confirmDialog" persistent>
        <q-card style="min-width: 300px;">
        <q-card style="min-width: 300px; background-image: url('https://i.ibb.co/WNGPK23R/93-B83-F89-3437-4667-9921-D572-D0-E38985.jpg'); background-size: cover; background-position: center;" class="text-white">
            <q-card-section>
                <q-icon name="warning" color="red"
                size="40px" class = "q-pa-md"/>
            <div>
            <div class="text-h6">Confirm</div>
            <div class="text-body2">Are you sure to delete</div>
            </div>
            </q-card-section>
            <q-card-section>
                <q-btn flat label="Cancel" color="black" v-close-popup  />
                <q-btn flat label="Confrim" color="negative" @click="deleteAction" />
            </q-card-section>
            
        </q-card>
        </q-card>
    </q-dialog>
</template>
<script setup>
import { ref } from 'vue';
const confirmDialog = ref(false)
const deleteAction = ()=> {
    console.log("Delete success")
    confirmDialog.value = false
}

</script>