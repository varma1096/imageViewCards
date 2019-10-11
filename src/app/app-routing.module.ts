import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicationComponent } from './medication/medication.component';


const routes: Routes = [
  {path:'',component:MedicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
