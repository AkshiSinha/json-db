import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ReactiveFormComponentComponent} from './reactive-form-component/reactive-form-component.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataServiceService} from './data-service.service';
// import { emp } from './employee.module';

const routes: Routes = [
  {
    path: 'reactiveform',
    pathMatch: 'full',
    component: ReactiveFormComponentComponent
  }
  

];


@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
