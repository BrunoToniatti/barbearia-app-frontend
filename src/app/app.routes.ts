import { Routes } from '@angular/router';
import { Intro } from './pages/intro/intro';
import { Login } from './pages/login/login';
import { Appointments } from './pages/appointments/appointments';

export const routes: Routes = [
  {
    path: '',
    component: Intro,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'appointments',
    component: Appointments,
  }
];
