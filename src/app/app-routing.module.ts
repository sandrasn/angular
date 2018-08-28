import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from './shared/guards/user.guard';

 const routes: Routes = [
//   {path: '',redirectTo:'auth', pathMatch:'full'},
//   {path:'auth', loadChildren: './authentication/authentication.module#AuthenticationModule', canLoad: [UserGuard]},
//   {path: '**', redirectTo:''}
 ];//here we provide all roots

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
