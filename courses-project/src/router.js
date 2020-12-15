import Vue from "vue";
import Router from "vue-router";
import Test from "@/components/Test";
import Header from "@/components/Header";
import ContenidoHTML from "@/views/ContenidoHTML";
import Inicio from "@/views/Inicio";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Inicio",
      component: Inicio,
    },
    {
      path: "/header",
      name: "header",
      component: Header,
    },
    {
      path: "/contenidohtml/:id",
      name: "contenidohtml",
      component: ContenidoHTML,
    },
    {
      path: "/test",
      name: "test",
      component: Test,
    },
  ],
});
