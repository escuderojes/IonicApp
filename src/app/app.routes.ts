import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'presen',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'principal',
    loadComponent: () => import('./home/principal/principal.page').then(m => m.PrincipalPage)
  },
  {
    path: 'examen',
    loadComponent: () => import('./home/examen/examen.page').then(m => m.ExamenPage)
  },
  {
    path: 'pagos',
    loadComponent: () => import('./home/pagos/pagos.page').then(m => m.PagosPage)
  },
  {
    path: 'presen',
    loadComponent: () => import('./presentacion/presen/presen.page').then(m => m.PresenPage)
  },
  {
    path: 'cursos',
    loadComponent: () => import('./course/cursos/cursos.page').then(m => m.CursosPage)
  },
  {
    path: 'precios',
    loadComponent: () => import('./planes/precios/precios.page').then(m => m.PreciosPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./home/perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'curso',
    loadComponent: () => import('./course/curso/curso.page').then( m => m.CursoPage)
  },
];
