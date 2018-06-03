import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  @Input() user;
  data = [
    {
      title: '朱珠的群聊1',
      description: '我是超级英雄'
    },
    {
      title: '猪猪的群聊2',
      description: '我是超级英雄'
    },
    {
      title: '刘婷美容院',
      description: '修身养性'
    },
    {
      title: '刘婷俱乐部',
      description: '艺术来源于生活更高于生活'
    }
  ];
  constructor() { }

  ngOnInit() {

  }

}
