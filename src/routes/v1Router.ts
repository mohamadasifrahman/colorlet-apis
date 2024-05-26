import express from 'express';

import authRoute from './authRoutes'
import paletteRoute from './paletteRoutes';

const v1Router = express.Router();

const v1Routes = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/palette',
        route: paletteRoute,
    }
];

v1Routes.forEach((route) => {
    v1Router.use(route.path, route.route);
});


export default v1Router;