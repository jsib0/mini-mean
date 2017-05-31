import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';
import { ProductsNewComponent } from './products/products-new/products-new.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { CustomerNewComponent } from './customer/customer-new/customer-new.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { OrdersNewComponent } from './orders/orders-new/orders-new.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';

import { routing } from './app.router'
import { ProductsService } from './products/products.service';
import { OrdersService } from './orders/orders.service';
import { CustomerService } from './customer/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrdersComponent,
    DashboardComponent,
    CustomerComponent,
    ProductsComponent,
    ProductsNewComponent,
    ProductsListComponent,
    CustomerNewComponent,
    CustomerListComponent,
    OrdersNewComponent,
    OrdersListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ProductsService, OrdersService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
