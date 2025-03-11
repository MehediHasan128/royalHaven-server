import { Router } from 'express';
import { UserRoutes } from '../modules/users/user.router';

const router = Router();

const modulesRoute = [
  {
    path: '/users',
    routes: UserRoutes,
  },
];

modulesRoute.forEach((route) => router.use(route.path, route.routes));

export default router;
