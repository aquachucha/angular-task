import { Dialog } from '@angular/cdk/dialog';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, take, tap } from 'rxjs';
import { ProductsService } from '@angular-task/data';
import { IS_MOBILE } from '../../tokens/is-mobile';

/**
 * Self-service for managing the process of rendering product details.
 */
@Injectable()
export class ProductDetailsService {
  private readonly _router: Router = inject(Router);
  private readonly _productService: ProductsService = inject(ProductsService);
  private readonly _isMobile: boolean = inject(IS_MOBILE);
  private readonly _dialog: Dialog = inject(Dialog);

  public openProductDetails(productId: string): void {
    if (this._isMobile) {
      this._router.navigate(['list', 'details', productId]);
    } else {
      forkJoin([
        import('@angular-task/features/products-list/product-details'),
        this._productService.getProductById(productId),
      ])
        .pipe(
          take(1),
          tap(([{ProductDetailsComponent}, product]) => {
            const ref = this._dialog.open(ProductDetailsComponent, {
              autoFocus: false,
              panelClass: 'products-list__dialog',
            });
            ref.componentInstance!.product = product;
          }),
        )
        .subscribe();
    }
  }
}
