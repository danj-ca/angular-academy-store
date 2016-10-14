import { ProductListComponent } from './products/product-list.component';
import { ContactComponent } from './shared/contact.component';
import { HomeComponent } from './shared/home.component';
//import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductListComponent }
];

// Note - ng2 snippet for routing adds this module,
//        but I'm just using the app app module. 
//        Leaving this here to consider when it could be useful.

// @NgModule({
//   imports: [RouterModule.forChild|Root(routes)],
//   exports: [RouterModule],
// })
// export class NameRoutingModule { }

// export const routedComponents = [NameComponent];
export const routing = RouterModule.forRoot(routes);