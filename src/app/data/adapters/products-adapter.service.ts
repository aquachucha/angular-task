import { IProductList, IProductWithDesc } from '@angular-task/data';
import { Observable } from 'rxjs';

/**
 * Abstract service class for getting products data.
 * It needs to be implemented in order to isolate API interaction from the app logic.
 * Adapter service can also be mocked via DI.
 */
export abstract class ProductsAdapterService {
  public abstract getProductList(): Observable<IProductList>;

  public abstract getProductById(productId: string): Observable<IProductWithDesc>;
}
