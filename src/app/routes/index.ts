import { Router } from 'express';
import { UserRoutes } from '../modules/users/user.router';
import { AuthRoutes } from '../modules/auth/auth.router';
import { SellerReqRoutes } from '../modules/sellerRequest/sellerRequest.router';
import { BuyerRoutes } from '../modules/buyer/buyer.router';

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
  {
    path: '/buyer',
    routes: BuyerRoutes,
  },
  {
    path: '/request',
    routes: SellerReqRoutes,
  },
];

modulesRoute.forEach((route) => router.use(route.path, route.routes));

export default router;
