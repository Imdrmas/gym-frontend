import { FindAllWorktimeComponent } from './worktime/find-all-worktime/find-all-worktime.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FindAllGymsComponent } from './gyms/find-all-gyms/find-all-gyms.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'home/:username',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'find-all-gyms/:id',
        component: FindAllGymsComponent,
        children: [
          {
            path: 'find-all-worktime/:id',
            component: FindAllWorktimeComponent,
          }
        ]
      }
     ]
  },
  {
    path: 'admin-dashboard/:username',
    component: AdminDashboardComponent
  }
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
