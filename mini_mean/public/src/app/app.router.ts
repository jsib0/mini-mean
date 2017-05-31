import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'customers', component: CustomerComponent},
    { path: 'dashboard', component: DashboardComponent, children: []},
    { path: 'orders', component: OrdersComponent, children: []},
    { path: 'products', component: ProductsComponent, children: []},
];
export const routing = RouterModule.forRoot(APP_ROUTES);
