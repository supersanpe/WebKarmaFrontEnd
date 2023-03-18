import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnePageComponent } from './components/one-page/one-page.component';

const routes: Routes = [
  { path: '', component: OnePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
