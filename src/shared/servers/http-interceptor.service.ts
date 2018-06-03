import {Injectable} from '@angular/core';
import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest,
  HttpResponse, HttpSentEvent
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {PermissionService} from './permission.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  param = function (obj, needTrim = true) {
    let query = '',
      name, value, fullSubName, subName, subValue, innerObj, i;

    for (name in obj) {
      if (obj.hasOwnProperty(name) && obj[name] !== null) {
        value = obj[name];
        if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
            if (value[i].hasOwnProperty('trim')) {
              subValue = value[i].trim();
            }
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += this.param(innerObj) + '&';
          }
        } else if (value instanceof Object) {
          for (subName in value) {
            if (value.hasOwnProperty(subName)) {
              if (value[subName].hasOwnProperty('trim')) {
                subValue = value[subName].trim();
              }
              fullSubName = name + '[' + subName + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += this.param(innerObj) + '&';
            }
          }
        } else if (value !== undefined && value !== null) {
          if (needTrim) {
            query += encodeURIComponent(name) + '=' + encodeURIComponent((value + '').trim()) + '&';
          } else {
            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
          }
        }
      }
    }

    return query.length ? query.substr(0, query.length - 1) : query;
  };

  constructor(private router: Router,
              private permissionService: PermissionService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /** -------------start: 请求转换处理 ------------------ ***/
    // 给post请求加上form data格式
    if (!req.headers['lazyUpdate'] && req.method === 'POST') {
      // 将body中的参数转为&拼接的字符串
      // todo param转化方法是由于EMM的历史遗留问题，在后台取值是只能通过此方式设置之后取到值
      req = req.clone({body: this.param(req.body, !req.url.endsWith('/login'))}).clone(
        {setHeaders: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
      );
    }
    if (environment.api_changeable) {
      // todo: (不成熟的解决方案待优化) 在开发环境下将所有获取静态数据的请求全部改为get请求, angular/cli 的服务器暂时没有配置对post的处理
      // if (req.urlWithParams.indexOf('./assets/fake') !== -1) {
      //   req = req.clone({method: 'GET'});
      // }
      // todo: 开发环境下的跨域问题：在跨域的情况下允许 其他源（域名、IP）携带cookie (生产环境在同一服务器下，不存在跨域问题)
      req = req.clone({withCredentials: true});
    }
    /** ------------------end: 请求转换完成 ----------------------- ***/
    // 权限控制
    /**
     * permissionService
     */

    return next
    // 调用下一个拦截器
      .handle(req)
      .do(
        // 响应成功拦截：200 （处理响应）
        (res: HttpResponse<any>) => {
          /*-------------start: 响应拦截 (统一处理响应结果)-------------------------*/

          /*-------------end: 响应处理完成-------------------------*/
        },
        // 响应异常拦截
        (error: HttpErrorResponse) => {
          if (error.status === 403) {
            // 定义: 403为未登录状态, 跳转登录
            this.router.navigate(['/login']);
          } else if (environment.env === 'dev') {
            // 开发环境下提示服务器异常
            window.alert('服务端异常（此提示仅存在于开发阶段：environment.env === \'dev\'）:详情参见日志（console）'); // translateService
          }
        }
      );
  }
}

