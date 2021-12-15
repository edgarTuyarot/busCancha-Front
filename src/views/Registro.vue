<template>
  <h1>Registrar Nuevo Usuario</h1>
  <form class="form" @submit.prevent="setearNuevoUsuario">
    <Inputs :usuario="usuario" />
    <button class="btn btn-success">Enviar</button>
  </form>
</template>

<script>
import Inputs from "../components/Inputs.vue";
export default {
  setup() {
    return {
      usuario: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  components: {
    Inputs,
  },
  methods: {
    async setearNuevoUsuario() {
      let nuevoUser = this.usuario;
        console.log(nuevoUser)
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/user`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(nuevoUser),
        });
        const dataDB = await res.json();
        this.$router.push('/login');

      } catch (e) {
        console.log(e);
      }
      
    },

  },
};
</script>


<style>
</style>