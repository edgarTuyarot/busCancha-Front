<template>

  <router-view />

</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navi {
  display: flex;
  background: rgba(90, 154, 238, 0.4);
  padding: 12px;
  justify-content: center;
}

.navi a {
  font-weight: bold;
  text-decoration: none;
  color: #6a7e75;
  margin: 5px;
}
.navi a:hover {
  color: rgb(133, 184, 161);
  transition: 1s;
}

.navi a.router-link-exact-active {
  color: #1f523b;
}
.footer {
  position: fixed;
  text-align: center;
  margin-bottom: 0;
}
</style>