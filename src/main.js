import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

import HomeView from './views/HomeView.vue'
import ProfileView from './views/ProfileView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactView from './views/ContactView.vue'
import ContactThanksView from './views/ContactThanksView.vue'
import DemoView from './views/demo/DemoView.vue'
import UiView from './views/demo/UiView.vue'
import AnimationView from './views/demo/AnimationView.vue'
import CounterView from './views/demo/CounterView.vue'
import TodoView from './views/demo/TodoView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/profile', component: ProfileView },
    { path: '/projects', component: ProjectsView },
    { path: '/contact', component: ContactView },
    { path: '/contact-thanks', component: ContactThanksView },
    { path: '/demo', component: DemoView },
    { path: '/demo/ui', component: UiView },
    { path: '/demo/animation', component: AnimationView },
    { path: '/demo/counter', component: CounterView },
    { path: '/demo/todo', component: TodoView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

createApp(App).use(router).mount('#app')
