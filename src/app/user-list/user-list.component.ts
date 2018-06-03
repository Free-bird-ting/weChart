import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  selectedUser;
  data = [
    {
      title: '朱珠的群聊1',
      sign: '我是超级英雄'
    },
    {
      title: '猪猪的群聊2',
      sign: '我是超级英雄'
    },
    {
      title: '刘婷美容院',
      sign: '修身养性'
    },
    {
      title: '刘婷俱乐部',
      sign: '艺术来源于生活更高于生活'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  onSelect(user): void {
    this.selectedUser = user;
  }

}
