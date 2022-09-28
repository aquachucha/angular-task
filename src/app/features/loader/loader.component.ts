import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'at-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'loader',
  },
})
export class LoaderComponent {
  public readonly loaderShown$ = inject(LoaderService).loaderShown$;
}


