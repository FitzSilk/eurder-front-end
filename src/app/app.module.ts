import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ItemComponent} from './item/item.component';
import {ItemDetailComponent} from './item/item-detail/item-detail.component';
import {ItemFormComponent} from './item/item-form/item-form.component';
import {MessagesComponent} from './services/messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {CustomerComponent} from './customer/customer.component';
import {CustomerDetailComponent} from './customer/customer-detail/customer-detail.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemDetailComponent,
    ItemFormComponent,
    CustomerComponent,
    CustomerDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ItemCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
