import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterdataComponent } from './characterdata/characterdata.component';
import { RouteErrorComponent } from './route-error/route-error.component';

const routes: Routes = [
  {path: 'characterdata', component: CharacterdataComponent},
  {path: '**', component: RouteErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
