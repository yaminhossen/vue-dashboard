import commonRoutes from './sub_routes/public/common.routes';
import privateRoutes from './sub_routes/private/private.routes';

const routes = [
  commonRoutes,
  privateRoutes,


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
