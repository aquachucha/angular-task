import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from './loader.service';
import { finalize, Observable } from 'rxjs';

export class LoaderInterceptor implements HttpInterceptor {
  private readonly _loaderService: LoaderService = inject(LoaderService);
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loaderService.loaderShown$.next(true);
    return next.handle(req).pipe(
      finalize(() => this._loaderService.loaderShown$.next(false)),
    );
  }
}
