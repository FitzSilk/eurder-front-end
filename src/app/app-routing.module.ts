import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemComponent} from './item/item.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ItemDetailComponent} from './item/item-detail/item-detail.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerDetailComponent} from './customer/customer-detail/customer-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'items', component: ItemComponent},
  {path: 'detail/:id', component: ItemDetailComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/:id', component: CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
