import Vue from "vue";
import Router from "vue-router";

import Login from "@/views/Login";
import Dashboard from "@/views/Dashboard";
import Impressum from "@/views/Impressum";
import About from "@/views/About";
import Contact from "@/views/Contact";
import Table from "@/views/Table";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/home"
    },
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "login",
      component: Login
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/impressum",
      name: "impressum",
      component: Impressum
    },
    {
      path: "/table",
      name: "table",
      component: Table,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    }
  ]
});

export default router;
