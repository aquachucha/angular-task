import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadComponent: () => import('@angular-task/features/products-list').then(c => c.ProductsListComponent),
  },
  {
    path: 'list/details/:id',
    loadComponent: () => import('@angular-task/features/product-detail-page').then(c => c.ProductDetailPageComponent),
  },
  {
    path: '**',
    redirectTo: '/list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
