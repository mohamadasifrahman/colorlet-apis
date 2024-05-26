import express from 'express';

import authRoute from './authRoutes'

const v1Router = express.Router();

const v1Routes = [
    {
        path: '/auth',
        route: authRoute,
    }
];

v1Routes.forEach((route) => {
    v1Router.use(route.path, route.route);
});


export default v1Router;