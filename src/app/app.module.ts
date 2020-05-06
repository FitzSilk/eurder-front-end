import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ItemComponent} from './item/item.component';
import {ItemDetailComponent} from './item/item-detail/item-detail.component';
import {ItemFormComponent} from './item/item-form/item-form.component';
import {MessagesComponent} from './services/messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CustomerComponent} from './customer/customer.component';
import {CustomerDetailComponent} from './customer/customer-detail/customer-detail.component';
import {ItemCreateComponent} from './item/item-create/item-create.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {ItemSearchComponent} from './item/item-search/item-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemDetailComponent,
    ItemFormComponent,
    CustomerComponent,
    CustomerDetailComponent,
    MessagesComponent,
    ItemCreateComponent,
    CustomerCreateComponent,
    ItemSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    FlexModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
