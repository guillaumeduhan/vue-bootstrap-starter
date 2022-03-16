import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home";
import Notfound from "../components/NotFound";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:catchAll(.*)",
    name: "Notfound",
    component: Notfound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;