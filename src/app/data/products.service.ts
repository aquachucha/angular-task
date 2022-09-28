import { inject, Injectable } from '@angular/core';
import { finalize, Observable, take, tap } from 'rxjs';
import { ProductsAdapterService } from './adapters';
import { IProduct, IProductList, IProductWithDesc } from './entities';
import { ProductsStore } from './store';

/**
 * Facade service for exposing and caching data from API.
 */
@Injectable()
export class ProductsService {
  private readonly _productsAdapterService: ProductsAdapterService = inject(ProductsAdapterService);
  private readonly _productsStore: ProductsStore = inject(ProductsStore);

  public readonly search$: Observable<string> = this._productsStore.search$;
  public readonly loading$: Observable<boolean> = this._productsStore.loading$;
  public readonly products$: Observable<IProduct[]> = this._productsStore.products$;
  public readonly filteredProducts$: Observable<IProduct[]> = this._productsStore.filteredProducts$;

  public get search(): string {
    return this._productsStore.search;
  }

  public setSearch(search: string): void {
    this._productsStore.setSearch(search);
  }

  public getProducts(): void {
    this._productsStore.setLoading(true);
    this._productsAdapterService.getProductList()
      .pipe(
        take(1),
        tap((data: IProductList) => this._productsStore.setProducts(data.products)),
        finalize(() => this._productsStore.setLoading(false)),
      )
      .subscribe();
  }

  public getProductById(productId: string): Observable<IProductWithDesc> {
    this._productsStore.setLoading(true);
    return this._productsAdapterService.getProductById(productId)
      .pipe(finalize(() => this._productsStore.setLoading(false)));
  }
}
