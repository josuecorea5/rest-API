<template>
  <header>
    <a href=""><img src="@/assets/logo.png" class="logo" /></a>
    <i class="fas fa-bars" @click="menuToggle"></i>
    <ul class="nav">
      <li><a href="">Inicio</a></li>
      <li><a href="">Cursos</a></li>
      <li><a href="">Blogs</a></li>
      <li><a href="">Sign In</a></li>
      <li><a href="">Log in</a></li>
      <li><a href="">Contactanos</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  methods: {
    menuToggle () {
      const toggleMenu = document.querySelector(".fa-bars");
      const toggleNav = document.querySelector(".nav");
      toggleMenu.classList.toggle("fa-times");
      toggleNav.classList.toggle("active");
    },
  },
};
</script>

<style scoped lang="css" src="../../../public/css/Globales/navbar.css">
</style>