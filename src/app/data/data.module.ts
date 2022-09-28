import { NgModule } from '@angular/core';
import { ProductsAdapterService, ApiProductsAdapterService } from './adapters';
import { ProductsService } from './products.service';
import { ProductsStore } from './store';

/**
 * Data module. Responsible for managing data through the app.
 */
@NgModule({
  providers: [
    ProductsStore,
    ProductsService,
    ApiProductsAdapterService,
    {
      provide: ProductsAdapterService,
      useClass: ApiProductsAdapterService,
    },
  ],
})
export class DataModule {
}
