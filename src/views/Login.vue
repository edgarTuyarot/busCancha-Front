<template>
  <div>
    <h1>Iniciar Sesion</h1>
    <div class="container position-absolute bottom-50 start-50 translate-middle-x">
      <form @submit.prevent="login" class="">
        <input type="email" placeholder="Email" v-model="usuario.email" class="" />

        <input
          type="text"
          placeholder="contraseña"
          v-model="usuario.password"
          class=""
        />

        <button class="btn btn-success  ">Ingresar</button>
      </form>
      <div v-if="error == 1" class="alert alert-danger" role="alert">
        <h1>Datos incorrectos</h1>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  setup() {
    return {
      usuario: {
        email: "edgar@edgar",
        password: "12345678",
        error: 0,
      },
    };
  },
  computed: {
    ...mapState(["userLog"]),
  },
  methods: {
     ...mapActions(["setearPropietario"]),
    async login() {
      let nuevoUser = this.usuario;

      try {
        const res = await fetch(`http://127.0.0.1:8000/api/login/`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(nuevoUser),
        });
        const dataDB = await res.json();

        sessionStorage.nombre = dataDB[1];
        sessionStorage.mail = dataDB[2];
        sessionStorage.usuarioId = dataDB[0];
        sessionStorage.prop = dataDB[3];
        sessionStorage.id_cancha = dataDB[4];
        if(dataDB[3]==1){
          let propietario={
            nombre:dataDB[1],
            id:dataDB[0],
            email:dataDB[2],
            cancha:dataDB[4]
          }
          this.setearPropietario(propietario)
        }
        this.$router.push("/");

      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style scoped >


</style>