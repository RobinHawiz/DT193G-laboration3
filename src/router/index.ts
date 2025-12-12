import { createRouter, createWebHistory } from "vue-router";
import { HomeView, BooklistView, InfoView } from "@/views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Startsida",
      component: HomeView,
    },
    {
      path: "/boklista",
      name: "Boklista",
      component: BooklistView,
    },
    {
      path: "/info",
      name: "Info",
      component: InfoView,
    },
  ],
});

router.beforeEach((to) => {
  document.title = to.name as string;
});

export default router;
