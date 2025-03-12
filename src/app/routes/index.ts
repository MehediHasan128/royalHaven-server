import { Router } from 'express';
import { UserRoutes } from '../modules/users/user.router';
import { AuthRoutes } from '../modules/auth/auth.router';

const router = Router();

const modulesRoute = [
  {
    path: '/users',
    routes: UserRoutes,
  },
  {
    path: '/auth',
    routes: AuthRoutes,
  },
];

modulesRoute.forEach((route) => router.use(route.path, route.routes));

export default router;
