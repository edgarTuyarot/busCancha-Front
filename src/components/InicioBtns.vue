<template>
  <div v-if="login">
    <h2>Hola! {{ user }}</h2>
  <div class="position-absolute bottom-50 start-50 translate-middle-x">
    <h5>Empeza a buscar tus turnos:</h5>
    <button class="btn btn-info">
      <router-link to="/buscador">Buscador</router-link>
    </button>
    <h5>o</h5>
    <h5>Mira tus reservas</h5>
    <button class="btn btn-info">
     <router-link to="/userdashboard">Mis Reservas</router-link>
    </button>
  </div>
    
  </div>
  <div v-else>
    <h3>Registrate o inicia sesion para empezar.</h3>
    <button class="btn btn-info">
      <router-link to="/login">Iniciar Sesion</router-link>
    </button>
    <button class="btn btn-info">
      <router-link to="/registro">Registrarte</router-link>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    login: Boolean,
    userReservas: [],
  },
  setup() {
    let user = sessionStorage.nombre;
    return { user };
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
</style>