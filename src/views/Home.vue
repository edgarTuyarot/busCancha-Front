<template>
<div class="position-absolute top-50 start-50 translate-middle">
  <h1 class="title"><b>busCancha</b></h1>
  <Navbar/>
</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// @ is an alias to /src

import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  data() {
    return {
    };
  },
  components: {
    Navbar,
  },
  computed: {
    ...mapState(["canchas", "reservas", "canchasLibres"]),
  },
  methods: {
    ...mapActions(["cargarReservas", "cargarCanchas"]),
  },
  created() {
    this.cargarCanchas();
  },
};
</script>
<style>
</style>