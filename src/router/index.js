import { createRouter, createWebHistory } from 'vue-router';
import { landingPageRoutes } from '@/features/landing-page';

const routes = [
  ...landingPageRoutes,
  // Add other feature routes here
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
