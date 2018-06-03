import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class DataService {
  url;

  constructor() {
    let path = environment.path;
    /**
     * 用自定义设置的IP（localStorage： EMM-IP） 替换API调用的地址
     * User： 在本地浏览器打开 console 输入 ：window.localStorage.setItem("EMM-IP","")
     */
    if (environment.api_changeable && window.localStorage && window.localStorage.getItem('EMM-IP')) {
      console.log('*******************************');
      console.warn('API(change): ' + environment.path + ' ==> ' + window.localStorage.getItem('EMM-IP'));
      console.log('*******************************');
      environment.path = path = window.localStorage.getItem('EMM-IP');
    }

    this.url = {
      template: {
        device: path + ''
      },
      login: {
        login: path + '/login',
      },
      dashboard: {
        get_users_and_devices_number: path + '/get_users_and_devices_number',
        get_violation_type_statistics: path + '/get_violation_type_statistics',
        get_sensitive_word_list: path + '/get_sensitive_word_list',
      },
      emmrent: {
        api_get_emm_leftlist: path + '/api/get/emm/leftlist',
        api_get_incbyid: path + '/api/get/incbyid',
        api_edit_inc: path + '/api/edit/inc',
        api_update_status: path + '/api/update/status',
        api_add_licenses: path + '/api/add/licenses',
        api_get_licenses: path + '/api/get/licenses',
        api_add_Incorporation: path + '/api/add/Incorporation',
        api_get_licensefile: path + '/api/get/licensefile',
      }
    };
  }

  /**
   * 将参数对象转化为查询参数
   */
  public getParams(paramsObject): HttpParams {
    let params = new HttpParams();
    for (let p in paramsObject) {
      if (paramsObject[p] !== null) {
        let value = paramsObject[p];
        if (typeof value === 'string') {
          value = value.trim();
        }
        params = params.set(p, value);
      }
    }
    return params;
  }

  /**
   * 将参数对象转化为查询参数
   */
  public getWholeParams(paramsObject) {
    return {params: this.getParams(paramsObject)};
  }
}

