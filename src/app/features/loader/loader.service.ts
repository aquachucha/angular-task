import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
  public readonly loaderShown$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
