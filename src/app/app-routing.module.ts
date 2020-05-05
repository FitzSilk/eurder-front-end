import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ItemComponent} from './item/item.component';
import {ItemDetailComponent} from './item/item-detail/item-detail.component';
import {ItemFormComponent} from './item/item-form/item-form.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerDetailComponent} from './customer/customer-detail/customer-detail.component';
import {ItemCreateComponent} from './item/item-create/item-create.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'items', component: ItemComponent},
  {path: 'detail/:id', component: ItemDetailComponent},
  {path: 'update/:id', component: ItemFormComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/:id', component: CustomerDetailComponent},
  {path: 'new', component: ItemCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
