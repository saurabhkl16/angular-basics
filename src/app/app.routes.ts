import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LearnRoutingComponent } from './components/learn-routing/learn-routing.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ChildRoutesComponent } from './components/child-routes/child-routes.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { QueryFragmentComponent } from './components/query-fragment/query-fragment.component';
import { HandleApiComponent } from './components/handle-api/handle-api.component';
import { ParentComponent } from './components/parent/parent.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';

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
  { path: 'handle-api', component: HandleApiComponent },
  { path: 'parent-comp', component: ParentComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
