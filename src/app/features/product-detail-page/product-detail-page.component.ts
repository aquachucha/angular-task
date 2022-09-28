import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { Observable } from 'rxjs';
import { NotFoundComponent, PageLayoutComponent, ProductCardComponent } from '@angular-task/shared';
import { IProductWithDesc, ProductsService } from '@angular-task/data';

@Component({
  selector: 'at-product-detail-page',
  standalone: true,
  imports: [CommonModule, PageLayoutComponent, NotFoundComponent, RouterLinkWithHref, ProductCardComponent],
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ProductDetailPageComponent {
  private readonly _productId: string = inject(ActivatedRoute).snapshot.params['id'];
  private readonly _productService: ProductsService = inject(ProductsService);

  public readonly product$: Observable<IProductWithDesc> = this._productService.getProductById(this._productId);
  public readonly loading$: Observable<boolean> = this._productService.loading$;
}
