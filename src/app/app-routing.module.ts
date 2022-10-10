import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'users/create', pathMatch: 'full' },
  { 
    path: 'users', 
    loadChildren: () => {
      return import('./users/users.module').then(mod => mod.UsersModule);
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
