<script setup>
import {ref} from 'vue'

const name = ref('')
const email = ref('')

function teste(){
    console.log("teste ", name.value, email.value)
}
</script>
<template id="FormClient">
    <form @submit.prevent="teste">
    <p>
        <label>Nome:</label>
        <input type="text" id="ClientName" v-model="name"> <br>
        <label>Email</label>
        <input type="text" id="Email" v-model="email"><br>
        <input type="submit" value="submit">
    </p>
    </form>
</template>
