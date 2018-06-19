import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhoneComponent } from './components/phone/phone.component';
import { LaptopComponent } from './components/laptop/laptop.component';
import { TabletComponent } from './components/tablet/tablet.component';
import { SmartwatchComponent } from './components/smartwatch/smartwatch.component';
import { SetmycolorDirective } from './directives/setmycolor.directive';
import { SetmycolorhilightDirective } from './directives/setmycolorhilight.directive';
import { AddpostComponent } from './components/addpost/addpost.component';


const appRoutes: Routes = [
    {path:'phone', component: PhoneComponent },
    {path:'laptop', component: LaptopComponent },
    {path:'tablet', component: TabletComponent },
    {path:'smartwatch', component: SmartwatchComponent },
    {path:'addpost', component: AddpostComponent }

    
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PhoneComponent,
    LaptopComponent,
    TabletComponent,
    SmartwatchComponent,
    SetmycolorDirective,
    SetmycolorhilightDirective,
    AddpostComponent
 
  ],
  imports: [
     RouterModule.forRoot(appRoutes),
     BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
