import { createRouter, createWebHistory } from "vue-router"
import VHome from "@/views/v-home"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: VHome,
    },
    {
      path: "/post/:id",
      name: "post-detail",
      component: () => import("@/views/v-post"),
    },
  ],
})

export default router
