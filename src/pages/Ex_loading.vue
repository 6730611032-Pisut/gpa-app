<template>
    <div class="q-pa-md">
    <q-btn color="primary" icon="cloud_download" label="Load Data" @click="loadData" />
    </div>
</template>
<script setup>
import { useQuasar} from 'quasar';
const $q = useQuasar()
const loadData = () => {
    $q.loading.show()
    // $q.loading.show({
    //     spinner : 'null',
    //     message : `<div class='text-center'>
    //         <img src='https://i.ibb.co/WNGPK23R/93-B83-F89-3437-4667-9921-D572-D0-E38985.jpg'
    //         style = 'width: 500px; height: 500px; border-radius: 8px'>
    //         <div class='q-mt-md text-h6'> ออมกำลังขำคุณ 5555... </div>
    //         </div>`,
    //         html: true,
    //         backgroundColor: 'dark',
    //         messageColor: 'white'

    // })
    // $q.loading.show({message: 'Loading data...'})
    // $q.loading.show({
    //     message : 'loading data',
    //     spinner: QSpinnerFacebook,
    //     spinnerColor: 'blue',
    //     backgroundColor : 'cyan-2',
    //     messageColor: 'blue-4'
    // })
    setTimeout(()=> {
        $q.loading.hide()
        $q.notify({
            type: 'negative',
            message: 'Load Data Success',
            position: 'top-right'
        })
    },5000)
}
</script>