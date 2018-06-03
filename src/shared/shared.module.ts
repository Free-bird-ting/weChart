import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {ScrollbarDirective} from "./scrollbar/scrollbar.directive";
// import {ButtonClickDirective} from "./forbidden/button-click.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // 响应式表单
    ReactiveFormsModule,
    HttpClientModule,
    // 第三方模块
    NgZorroAntdModule,
  ],
  exports: [
    // 官方模块
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // 第三方模块
    NgZorroAntdModule,
    // 滚动条
    // ScrollbarDirective,
    // ButtonClickDirective,
  ],
  declarations: [
    // 滚动条
    // ScrollbarDirective,
    // ButtonClickDirective
  ]
})
export class SharedModule {}
