<template>
  <div id="app">
    <HeaderComponent />
    <main>
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import './style.css'; // Ensure your global CSS is included
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>


<style>
main {
  min-height: 80vh; /* Adjust height to fit Header and Footer */
  padding: 20px;
}
</style>
