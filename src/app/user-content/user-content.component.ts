import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css']
})
export class UserContentComponent implements OnInit {
  data = [
    {
      title: '朱珠的群聊1',
      isSend: '0',
      avatalUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
      title: '猪猪的群聊2',
      isSend: '0',
      avatalUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
      title: '刘婷美容院',
      isSend: '1',
      avatalUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
      title: '刘婷俱乐部',
      isSend: '0',
      avatalUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
      title: '朱珠的群聊1',
      isSend: '0',
      avatalUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
      title: '刘婷美容院',
      isSend: '1',
      avatalUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
      title: '刘婷俱乐部',
      isSend: '0',
      avatalUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
      title: '朱珠的群聊1',
      isSend: '0',
      avatalUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
      title: '猪猪的群聊2',
      isSend: '0',
      avatalUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
      title: '刘婷美容院',
      isSend: '1',
      avatalUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
    {
      title: '刘婷俱乐部',
      isSend: '0',
      avatalUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  detail() {
    console.log('详情');
  }

}
