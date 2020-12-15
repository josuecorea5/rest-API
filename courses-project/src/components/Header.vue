<template>
  <b-container class="bv-example-row">
    <div class="container__main">
      <router-link to="/">
        <img src="../assets/html5-logo.svg" alt="" />
      </router-link>
      <b-col class="p-0"
        ><h1 class="d-flex justify-content-center">{{ msg }}</h1>
      </b-col>
    </div>
    <b-col class="d-flex justify-content-center">
      <h2 sm="12" class="text-center">CON ESTE CURSO APRENDERÁS</h2></b-col
    >
    <ul class="list__object">
      <li v-for="(image, index) in images" :key="index">
        <img :src="image.src" alt="" />
      </li>
    </ul>
    <b-col class="contenedor">
      <h3 class="mt-3">Módulos</h3>
      <b-list-group
        class="d-flex justify-content-center mb-3"
        v-for="(tem, i) in resultado"
        :key="i.tem"
      >
        <div class="list">
          <b-list-group-item class="list__topic"
            >{{ tem.title }}
          </b-list-group-item>
          <router-link :to="{ name: 'contenidohtml', params: { id: tem._id } }">
            <img
              class="list__topic--icon"
              src="../assets/play.svg"
              alt="play"
            />
          </router-link>
        </div>
      </b-list-group>
    </b-col>
  </b-container>
</template>

<script>
import axios from "axios";
// import Button from "@/components/Button";
export default {
  data() {
    return {
      msg: "Curso de HTML5",
      temasCurso: [
        { tema: "¿Que es HTML?" },
        { tema: "¿Estructura básica de HTML?" },
        { tema: "Creando tu primer Hello World con HTML" },
        // { tema: "Uso de la etiqueta <p>" },
        // { tema: "Uso de Cabeceras HTML" },
      ],
      images: [
        {
          src: "https://i.imgur.com/7mkgmSk.png",
        },
        { src: "https://i.imgur.com/IxydW7S.png" },
        { src: "https://i.imgur.com/rSRcMBm.png" },
      ],
      resultado: [],
    };
  },

  created() {
    axios.get("http://localhost:3000/api/topics/").then((result) => {
      this.resultado = result.data;
    });
  },
};
</script>

<style scoped>
img {
  width: 100px;
  padding: 0;
}
h1 {
  width: 90%;
  color: #1c447c;
}
h2 {
  /* 0E0BAD */

  padding: 10px;
  background: #1c447c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
.container__main {
  display: flex;
}
.icon {
  border: none;
  padding: 0;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list__object {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin-top: 20px;
}
.list__topic {
  background-color: #1c447c;
  color: white;
  font-weight: bold;
  font-size: 20px;
  width: 95%;
}
.list__topic--icon {
  border: none;
  margin-left: 5px;
  opacity: 0.3;
  cursor: pointer;
  width: 40%;
}
.list__topic--icon:hover {
  opacity: 1;
}
</style>
