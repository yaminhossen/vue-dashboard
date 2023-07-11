import DashboardLayout from "pages/private/pages/Dashboard/Layout.vue";
import AdminDashboard from "pages/private/pages/Dashboard/AdminDashboard";
import TeacherDashboard from "pages/private/pages/Dashboard/TeacherDashboard";

let prefix = `Dashboard`;
export default {
    path: `${prefix}`,
    name:`${prefix}`,
    component: DashboardLayout,
    children: [
        {
            path: `adminDashboard`,
            name: `Admin${prefix}`,
            component: AdminDashboard,
        },
        {
            path: `teacherDashboard`,
            name: `Teacher${prefix}`,
            component: TeacherDashboard,
        },
    ]
}