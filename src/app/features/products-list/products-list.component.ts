import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  NotFoundComponent,
  PageLayoutComponent,
  ProductCardComponent,
  SearchComponent,
} from '@angular-task/shared';
import { IProduct, ProductsService } from '@angular-task/data';
import { Observable } from 'rxjs';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'at-products-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    SearchComponent,
    PageLayoutComponent,
    RouterLinkWithHref,
    NotFoundComponent,
  ],
  providers: [
    ProductDetailsService,
  ],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'products-list',
  },
})
export class ProductsListComponent implements OnInit {
  private readonly _productService: ProductsService = inject(ProductsService);
  private readonly _productDetailsService: ProductDetailsService = inject(ProductDetailsService, {self: true});

  public readonly products$: Observable<IProduct[]> = this._productService.filteredProducts$;
  public readonly searchValue: string = this._productService.search;

  public ngOnInit(): void {
    this._productService.getProducts();
  }

  public onSearchChange(search: string): void {
    this._productService.setSearch(search);
  }

  public trackProductById(index: number, product: IProduct): string {
    return product.product_id;
  }

  public openProductDetails(productId: string): void {
    this._productDetailsService.openProductDetails(productId);
  }
}
