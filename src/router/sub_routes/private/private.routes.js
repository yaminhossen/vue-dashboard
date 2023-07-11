import MainLayoutVue from "src/layouts/MainLayout.vue";
import PrivateLayouts from "src/pages/private/layouts/PrivateLayouts.vue";
import dashboard_routes from "./subroutes/dashboardroutes/dashboard_routes"
import user_managementRoutes from "./subroutes/user_management.routes";

export default{
    path:'/',
    component: MainLayoutVue,
    children:[
        {
            path:'admin',
            component: PrivateLayouts,
            children:[
                dashboard_routes,
                
            ]
        }
    ]
}