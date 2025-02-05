import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EpkComponent } from './epk/epk.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route (e.g., login page)
  { path: 'epk', component: EpkComponent },
  { path: 'contact', component: ContactComponent },  // Dashboard route
  { path: 'home', component: HomeComponent },  // Dashboard route
  { path: '**', redirectTo: '/home'}  // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
