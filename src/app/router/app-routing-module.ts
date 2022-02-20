import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from '../Netafim/empty/empty/empty.component';

import { HomeComponent } from '../Netafim/home/home.component';
import { PageNotFoundComponent } from '../Netafim/page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '', redirectTo: 'Empty', pathMatch: 'full' },
  { path: 'Empty', component: EmptyComponent },
  { path: 'Home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
