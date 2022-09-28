import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProductWithDesc } from '@angular-task/data';
import { ProductCardComponent } from '@angular-task/shared';

/**
 * Component for rendering modal window content.
 */
@Component({
  selector: 'at-product-details',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'product-details',
  },
})
export class ProductDetailsComponent {
  @Input() public product!: IProductWithDesc;
}
