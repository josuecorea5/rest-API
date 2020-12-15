<template>
  <div id="Inicio">
    <!--Esta es la Barra de Navegación -->
    <navbar />
    <!--Esta es la Portada -->
   <Portada />
    <!--Esta es la Parte Media -->
   <MidContent />


    <!--Este es el pie de página -->
  <PiePagina />
  </div>
</template>

<script>
import navbar from "@/components/Globales/nav";
import Portada from '@/components/Inicio/Portada';
import MidContent from '@/components/Inicio/MidContent';
import PiePagina from '@/components/Globales/footer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: "Main",
  components: {
    navbar,
    Portada,
    MidContent,
    PiePagina
  },
  data(){
    return{
    }
  }
};
</script>

<style>
jumbotron{
  background: #1c447c;
}
</style>