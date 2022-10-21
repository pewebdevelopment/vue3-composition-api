import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'

createApp(App).use(Router).mount('#app')


// import VueRouter from 'vue-router'
// import Home from './components/HomeComponent.vue'
// import About from './components/AboutComponent.vue'

// VueRouter.useLink(VueRouter);
// const routes = [
// {path: '/', component: Home},
// {path: '/', component: About}
// ]

// const router = new VueRouter({
//     routes

// })