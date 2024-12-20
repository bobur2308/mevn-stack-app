import { createRouter, createWebHistory } from 'vue-router';

// Import views
import HomePage from '../views/HomePage.vue';
import PostPage from '../views/PostsPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import AddPostPage from '../views/AddPostPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/post', name: 'Post', component: PostPage },
  { path: '/profile', name: 'Profile', component: ProfilePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/add-post', name:"add-post", component:AddPostPage}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
