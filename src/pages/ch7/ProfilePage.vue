<template>
    <q-page padding>
        <div class="text-h4 q-mb-lg">My Profile</div>
        <div v-if="!profile" class="row justify-center q-mt-xl">
            <q-spinner-dots color="primary" size="40px"></q-spinner-dots>
        </div>
        <q-card bordered  v-else   class="bg-white shadow-6 rounded-borders"  style="border-radius: 16px; border: 5px solid #bbdefb;">
            <q-card-section>
                <div>Name: {{ profile.name }}</div>
                <div>Role: {{ profile.role }}</div>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {getProfile} from '@/services/auth.service'
const profile = ref(null)
onMounted(async ()=> {
    const res = await getProfile()
    profile.value = res.data.data
})
</script>