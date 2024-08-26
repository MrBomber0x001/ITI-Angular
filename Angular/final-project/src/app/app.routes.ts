import { Routes } from '@angular/router';
import { BodyComponent } from './Components/body/body.component';
import { MasterProductsComponent } from './Components/master-products/master-products.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { TemplateDerivenFormComponent } from './Components/Forms/template-deriven-form/template-deriven-form.component';
import { ReactiveFormComponent } from './Components/Forms/reactive-form/reactive-form.component';

// ? 1- normal routes 
//? 2- error page handling 
//? 3- 2 paths route to the same component
//? 4- programmatically routing 
//? 5- how to extract anything from my url 
//? 6- dynamic routing 
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: BodyComponent },
    { path: "post", component: ReactiveFormComponent },
    { path: 'shop', component: ShoppingComponent },
    { path: "products", component: MasterProductsComponent },
    { path: "products/:ID", component: ProductsDetailsComponent },
    { path: "add", component: TemplateDerivenFormComponent },
    { path: "**", component: ErrorComponent }
];
