import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';
import { NewloginpageComponent} from './newloginpage/newloginpage.component'
import { PAGENOTFOUNDComponent } from './pagenotfound/pagenotfound.component';
import { InsideotherComponent } from './insideother/insideother.component';
import { PartsComponent } from './parts/parts.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'newlogin', component: NewloginpageComponent },
  {path:'register', component: RegisterComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
  { path: "movies",
   component: InsideotherComponent,
   children: [
    {path: 'movie/:id', component: PartsComponent},
   ] 
  },
  
  {path:'404', component: PAGENOTFOUNDComponent},
  {path:"**", redirectTo: "/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
