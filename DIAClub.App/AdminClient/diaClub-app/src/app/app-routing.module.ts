import { AddEventComponent } from './add-event/add-event.component';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'add-event-component', component: AddEventComponent },
  { path: 'manage-event-component', component: ManageEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
