import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  list = {
    avataUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    wechatld: '01',
    sign: '签名1',
    city: '北京'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
