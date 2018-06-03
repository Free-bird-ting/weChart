import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {DataService} from '../shared/servers/data.service';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpInterceptorService} from '../shared/servers/http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    CoreModule,
    BrowserModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
