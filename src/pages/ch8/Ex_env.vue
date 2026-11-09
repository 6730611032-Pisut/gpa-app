<template>
  <q-page padding>
    <div class="text-h6">{{ appTitle }}</div>
    <div>API:{{ appUrl }}</div>
    <div>MODE: {{ mode }}</div>
  </q-page>
</template>
<script setup>
const appTitle = import.meta.env.QCLI_APP_TITLE
const appUrl = import.meta.env.QCLI_API_URL
const mode = import.meta.env.MODE
</script>