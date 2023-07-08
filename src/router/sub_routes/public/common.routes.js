import MainLayoutVue from "src/layouts/MainLayout.vue";
import PublicLayout from "src/pages/public/layouts/PublicLayout.vue"
import Home from "src/pages/public/Home.vue";
import Login from "src/pages/public/Login.vue";
import Register from "src/pages/public/Register.vue"

export default {
    path: '/',
    component: MainLayoutVue,
    children: [
        { 
            path: '', 
            component: PublicLayout,
            children: [
                { 
                    path: '', 
                    name: "Home",
                    component: Home, 
                },
                { 
                    path: 'login', 
                    name: "Login",
                    component: Login, 
                },
                { 
                    path: 'register', 
                    name: "Register",
                    component: Register, 
                },
            ]
        }
    ]
}