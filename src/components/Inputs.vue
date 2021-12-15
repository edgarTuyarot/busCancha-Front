<template>
<input type="text" placeholder="Nombre" v-model="usuario.name">
<input type="email" placeholder="Email" v-model="usuario.email">
<input type="text" placeholder="contraseña" v-model="usuario.password">


</template>

<script>

export default {
    props:{
    usuario:Object,
},


}
</script>

<style>

</style>