import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import './style.css'; // Global styles (optional)

const app = createApp(App);

// Use the router in the app
app.use(router);

app.mount('#app');
