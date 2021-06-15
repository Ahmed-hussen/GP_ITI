import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductOptionComponent } from './product-options/product-options.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import {GalleriaModule} from 'primeng/galleria';
import {DataViewModule} from 'primeng/dataview';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductOptionComponent
  ],
  imports: [
    CommonModule, 
    DynamicDialogModule,
    InputNumberModule,
    RadioButtonModule,
    ButtonModule,
    GalleriaModule,
    DataViewModule,
    FormsModule
  ]
})
export class ProductExploreModule { }
