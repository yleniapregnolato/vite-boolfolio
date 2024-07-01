import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import AboutPage from './pages/AboutPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsPage,
        },
        {
            path: "/About",
            name: "about",
            component: AboutPage,
        }
        
    ],
});

export { router };