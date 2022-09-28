import { Injectable } from '@angular/core';
import { IProduct } from '@angular-task/data';
import { BehaviorSubject, combineLatest, map, Observable, Subject } from 'rxjs';

/**
 * Class for storing an internal state
 */
@Injectable()
export class ProductsStore {
  private readonly _products$: Subject<IProduct[]> = new Subject<IProduct[]>();
  private readonly _search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private readonly _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  //region Queries
  public readonly loading$: Observable<boolean> = this._loading$.asObservable();

  public readonly search$: Observable<string> = this._search$.asObservable();

  public readonly products$: Observable<IProduct[]> = this._products$.asObservable();

  public readonly filteredProducts$: Observable<IProduct[]> = combineLatest([
    this._search$,
    this._products$,
  ])
    .pipe(
      map(([search, products]: [string, IProduct[]]) => {
        return products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
      }),
    );

  public get search(): string {
    return this._search$.value;
  }
  //endregion

  //region Actions
  public setProducts(products: IProduct[]): void {
    this._products$.next(products);
  }

  public setSearch(filter: string): void {
    this._search$.next(filter);
  }

  public setLoading(loading: boolean): void {
    this._loading$.next(loading);
  }
  //endregion
}
