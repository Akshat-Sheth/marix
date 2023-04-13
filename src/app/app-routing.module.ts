import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const authModule = () => import('./authentication/authentication.module').then(x => x.AuthenticationModule);
const routes: Routes = [{
  path: '', loadChildren:authModule
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
