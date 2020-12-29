import { AddPaymentComponent } from './payments/add-apyment/add-payment.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { FindAllGymsComponent } from './gyms/find-all-gyms/find-all-gyms.component';
import { EditGymComponent } from './gyms/edit-gym/edit-gym.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddWorktimeComponent } from './worktime/add-worktime/add-worktime.component';
import { FindAllWorktimeComponent } from './worktime/find-all-worktime/find-all-worktime.component';
import { AddSportsManComponent } from './sportsMan/add-sports-man/add-sports-man.component';
import { DisplaySportsManComponent } from './sportsMan/display-sports-man/display-sports-man.component';
import { AddSportComponent } from './sports/add-sport/add-sport.component';
import { AddSportsSportsmanComponent } from './sports/add-sports-sportsman/add-sports-sportsman.component';
import { AddTrainComponent } from './trains/add-train/add-train.component';
import { AddArbitrateComponent } from './arbitrates/add-arbitrate/add-arbitrate.component';
import { AddArbitrateSportComponent } from './arbitrates/add-arbitrate-sport/add-arbitrate-sport.component';
import { AddTrainSportComponent } from './trains/add-train-sport/add-train-sport.component';
import { DisplaySportComponent } from './sports/display-sport/display-sport.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminDashboardComponent,
    LoginComponent,
    FindAllGymsComponent,
    EditGymComponent,
    WelcomeComponent,
    AddWorktimeComponent,
    FindAllWorktimeComponent,
    AddSportsManComponent,
    DisplaySportsManComponent,
    AddSportComponent,
    AddSportsSportsmanComponent,
    AddPaymentComponent,
    AddTrainComponent,
    AddArbitrateComponent,
    AddArbitrateSportComponent,
    AddTrainSportComponent,
    DisplaySportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
