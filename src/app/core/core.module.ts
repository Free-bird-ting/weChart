import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, NZ_MESSAGE_CONFIG, zh_CN} from 'ng-zorro-antd';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpInterceptorService} from './http-interceptor.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [],
  providers: [
    // ng-zorro的全局设置
    {provide: NZ_MESSAGE_CONFIG, useValue: {nzMaxStack: 1}},
    // http拦截器
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    // 必要的全局服务
  ],
  exports: [
    NgZorroAntdModule,
  ]
})
export class CoreModule { }
