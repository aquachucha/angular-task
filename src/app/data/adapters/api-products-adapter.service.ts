import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from '../entities';
import { IProductList, IProductWithDesc } from '../entities';
import { ProductsAdapterService } from './products-adapter.service';

/**
 * Service for getting data from API
 */
@Injectable()
export class ApiProductsAdapterService extends ProductsAdapterService {
  private readonly _http: HttpClient = inject(HttpClient);

  public getProductList(): Observable<IProductList> {
    return this._http.get<IProductList>(Endpoints.ProductList);
  }

  public getProductById(productId: string): Observable<IProductWithDesc> {
    return this._http.get<IProductWithDesc>(Endpoints.ProductById(productId));
  }
}
