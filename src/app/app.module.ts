import { DialogModule } from '@angular/cdk/dialog';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { DataModule } from '@angular-task/data';
import { LoaderComponent, LoaderInterceptor, LoaderService } from '@angular-task/features/loader';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app.routing-module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DataModule,
    BrowserModule,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule,
    DialogModule,
    LoaderComponent,
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
