import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {DataService} from '../shared/servers/data.service';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpInterceptorService} from '../shared/servers/http-interceptor.service';
import { UserContentComponent } from './user-content/user-content.component';
import { SocialComponent } from './social/social.component';
import { InformationComponent } from './information/information.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserContentComponent,
    SocialComponent,
    InformationComponent,
    GroupDetailComponent,
    UserDetailComponent
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
