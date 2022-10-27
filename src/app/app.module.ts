import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { CreateComponent } from './student/create/create.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { CaroselComponent } from './carosel/carosel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CreateComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TableComponent,
    CaroselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
    