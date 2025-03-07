import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LearnRoutingComponent } from './components/learn-routing/learn-routing.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ChildRoutesComponent } from './components/child-routes/child-routes.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { QueryFragmentComponent } from './components/query-fragment/query-fragment.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  {
    path: 'learn-routing',
    component: LearnRoutingComponent,
    children: [{ path: 'child-routes', component: ChildRoutesComponent }],
  },
  { path: 'login', component: LoginComponent },
  { path: 'learn-routing/:name', component: GreetingsComponent },
  { path: 'query-fragment', component: QueryFragmentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
