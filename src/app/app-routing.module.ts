import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './student/create/create.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path : '', component : HomeComponent
  },
  {
    path : 'create', component : CreateComponent
  },
  {
    path: 'view', component : StudentComponent  
  },
  {
    path: 'edit/:id', component : CreateComponent  
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


