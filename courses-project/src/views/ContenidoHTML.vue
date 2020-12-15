<template>
  <b-container>
    <b-row class="justify-content-center">
      <h1>Curso de HTML5</h1>
    </b-row>
    <b-row class="justify-content-between ">
      <router-link to="/header">
        <img class="icon" src="../assets/flecha-izquierda.svg" alt="play" />
      </router-link>
      <router-link to="/contenidohtml">
        <img class="icon" src="../assets/proximo.svg" alt="play" />
      </router-link>
    </b-row>
    <b-row class="container justify-content-center">
      <div class="main">
        <h2>{{ resultado.title }}</h2>
        <br />
        <p>{{ resultado.description }}</p>
        <br />
        <img
          class="main__img"
          :src="resultado.categories"
          :alt="resultado.title"
        />
        <br />
        <ul>
          <li class="list" v-for="(value, index) in items" :key="index.id">
            {{ value }} <br />
          </li>
        </ul>
      </div>
    </b-row>
    <b-row class="justify-content-end mt-4">
      <router-link to="/test">
        <a href=""
          ><img
            class="siguiente "
            src="../assets/flecha-correcta.svg"
            alt="siguiente"
        /></a>
      </router-link>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      resultado: [],
      items: "",
    };
  },

  async mounted() {
    const respuesta = await axios.get("/api/topics/" + this.$route.params.id);
    this.resultado = respuesta.data;
    this.items = respuesta.data.content;
  },
};
</script>

<style scoped>
h1 {
  color: #1c447c;
}
.main {
  background: white;
  border-radius: 10px;
  margin-top: 25px;
  padding: 20px;
}
.main p {
  font-size: 18px;
}

.icon {
  display: flex;
  justify-content: space-between;
  opacity: 0.3;
  cursor: pointer;
  width: 30%;
}
.icon:hover {
  opacity: 1;
}
.siguiente {
  width: 50%;
}
.main__img {
  width: 50%;
  margin-bottom: 10px;
}
.list {
  list-style: none;
}
ul {
  padding: 0px;
}

a {
  opacity: 0.8;
  transform: rotateX(10deg);
  animation: one 2s infinite;
  animation-direction: alternate;
}
a:hover {
  transform: rotateX(0deg);
  transform: rotateY(0deg);
  animation: one;
  opacity: 1;
}

@keyframes one {
  0% {
    transform: rotateY(10deg);
    opacity: 1;
  }
  100% {
    transform: rotateX(30deg);
    opacity: 0.5;
  }
}
</style>
