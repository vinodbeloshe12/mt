import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'cart', component: CartComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule { }
