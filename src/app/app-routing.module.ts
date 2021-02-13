import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "Page1", loadChildren: () => import('src/app/Page1').then(m => m.Page1Module) },
  { path: "Page2", loadChildren: () => import('src/app/Page2').then(m => m.Page2Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
