import { Routes } from '@angular/router';
import { PublicLayout } from './layout/public-layout/public-layout';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayout,
        children: [
            {
                path: '',
                loadComponent: () => import('./features/landing/landing').then((m) => m.Landing),
            },
            {
                path: 'login',
                loadComponent: () => import('./features/auth/login/login').then((m) => m.Login),
            },
        ],
    },

    {
        path: 'dashboard',
        component: Dashboard,
    },
];
