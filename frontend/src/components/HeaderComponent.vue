<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Function to navigate to home page
const goHome = () => {
  router.push('/');
};
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- Replace button with an image for logo -->
        <img
          src="https://anorbank.uz/upload/resize_cache/iblock/965/150_150_1/cnq3bo9kmgi8gpsy0ayx99anuutul16p.PNG" 
          alt="Logo"
          class="navbar-brand"
          style="cursor: pointer;"
          width="50"
          height="50"
          @click="goHome"
        />

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/post">Posts</router-link>
            </li>
          </ul>
          <div class="ml-auto">
            <router-link class="btn btn-primary mx-1" to="/login">Login</router-link>
            <router-link class="btn btn-secondary mx-1" to="/register">Register</router-link>
            <router-link class="btn btn-outline-dark mx-1" to="/profile">Profile</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
}
</style>
