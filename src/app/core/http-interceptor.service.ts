import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

/**
 * 请求监听拦截器
 * ==
 * 监听所有请求，进行请求成功失败的统一处理
 */
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({withCredentials: true});
    if (req.method === 'POST') {
      req = req.clone(
        // {setHeaders: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        {setHeaders: {'Content-Type': 'application/json; charset=UTF-8'}}
      );
    }
    console.log('请求路径和参数', req.url, req.body);
    // 在静态环境中,需要将post请求转化为get请求
    return next.handle(req);
  }

}
