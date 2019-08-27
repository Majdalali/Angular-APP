import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule } from '@angular/material/button';
import {MatInputModule ,MatOptionModule,MatExpansionModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountUpModule } from 'countup.js-angular2';
import {FormsModule,} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { HttpClientModule ,  HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthGuard} from './services/auth.guard';
import {TokenInterceptorService} from "./services/token-interceptor.service";
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact/contact.component';
import { AppComponent,  } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostCreateComponent } from './about/post-create/post-create.component';
import { PostListComponent } from './about/post-list/post-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NewloginpageComponent } from './newloginpage/newloginpage.component';
import { PAGENOTFOUNDComponent } from './pagenotfound/pagenotfound.component';
import { InsideotherComponent } from './insideother/insideother.component';
import { PartsComponent } from './parts/parts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PostCreateComponent,
    PostListComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    NewloginpageComponent,
    PAGENOTFOUNDComponent,
    InsideotherComponent,
    PartsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    FontAwesomeModule,
    CountUpModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatExpansionModule,
    NgFlashMessagesModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ValidateService,AuthService,AuthGuard, 
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule {
  ngOnInit() {
    
  }
  }

