import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Workspace from '../components/Workspace.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/workspace', component: Workspace }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;