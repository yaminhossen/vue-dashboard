import Layout from "src/pages/private/pages/user_management/Layout.vue"
import All from "src/pages/private/pages/user_management/All.vue"
import Create from "src/pages/private/pages/user_management/Create.vue"
import Details from "src/pages/private/pages/user_management/Details.vue"
import Edit from "src/pages/private/pages/user_management/Edit.vue"

let prefix = `user`;
export default {
    path: `${prefix}`,
    component: Layout,
    children: [
        { 
            path: ``, 
            name: `${prefix}All`,
            component: All,
        },
        { 
            path: `create`, 
            name: `${prefix}Create`,
            component: Create,
        },
        { 
            path: `details/:id`, 
            name: `${prefix}Details`,
            component: Details,
        },
        { 
            path: `edit/:id`, 
            name: `${prefix}Edit`,
            component: Edit,
        },
    ]
}