import { OrderBy } from './orderBy.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ProductListComponent
    ],
    declarations: [
        ProductListComponent, 
        ProductDetailComponent,
        OrderBy 
    ],
    providers: [],
})
export class ProductsModule { }
