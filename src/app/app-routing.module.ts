import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemComponent} from './item/item.component';
import {ItemDetailComponent} from './item/item-detail/item-detail.component';
import {ItemFormComponent} from './item/item-form/item-form.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerDetailComponent} from './customer/customer-detail/customer-detail.component';
import {ItemCreateComponent} from './item/item-create/item-create.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';

const routes: Routes = [
  {path: '', redirectTo: '/items', pathMatch: 'full'},
  {path: 'items', component: ItemComponent},
  {path: 'detail/:id', component: ItemDetailComponent},
  {path: 'update/:id', component: ItemFormComponent},
  {path: 'new', component: ItemCreateComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/:id', component: CustomerDetailComponent},
  {path: 'register', component: CustomerCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
