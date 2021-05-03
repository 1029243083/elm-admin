import Mock from 'mockjs'
import { getStorage } from '../util'

interface configType {
  url: string
  type: string
  body: user
}

interface user {
  username: string
  password: string
  captcha_code: string
}

Mock.mock('/api/login', (config: configType) => {
  const cap = getStorage('cap')
  const obj: user = JSON.parse((config.body as unknown) as string)

  if (obj.username === 'admin' && obj.password === '123123' && obj.captcha_code === cap) {
    const url = Mock.Random.image('200x200', '#50B347', '#FFF', 'Admin')
    return {
      username: obj.username,
      url
    }
  }
  return null
})

Mock.mock('/api/captchas', () => {
  const num = Mock.mock({
    code: '@string("lower", 5)'
  })
  return num
})

Mock.mock('/api/menu', () => {
  const meunData = Mock.mock({
    data: [
      {
        key: 'sub-1',
        title: '首页',
        children: [
          {
            key: 'sub-1-1',
            title: '首页',
            to: '/c_home'
          }
        ]
      },
      {
        key: 'sub1',
        title: '数据管理',
        children: [
          {
            key: 'sub1-1',
            title: '用户列表',
            to: '/c_userlist'
          },
          {
            key: 'sub-1-2',
            title: '商家管理',
            to: '/c_business'
          },
          {
            key: 'sub-1-3',
            title: '食品管理',
            to: '/c_food'
          },
          {
            key: 'sub-1-4',
            title: '订单管理',
            to: '/c_order'
          },
          {
            key: 'sub-1-5',
            title: '管理员列表',
            to: '/c_adminList'
          }
        ]
      },
      {
        key: 'sub-2',
        title: '添加数据',
        children: [
          {
            key: 'sub-2-1',
            title: '添加商品',
            to: '/c_addfood'
          },
          {
            key: 'sub-2-2',
            title: '添加店铺',
            to: '/c_addshop'
          }
        ]
      },
      {
        key: 'sub-3',
        title: '图表',
        children: [
          {
            key: 'sub-3-1',
            title: '用户分布',
            to: '/c_distribution'
          }
        ]
      },
      {
        key: 'sub-4',
        title: '设置',
        children: [
          {
            key: 'sub-4-1',
            title: '管理员设置',
            to: '/c_setup'
          }
        ]
      },
      {
        key: 'sub-5',
        title: '说明',
        children: [
          {
            key: 'sub-5-1',
            title: '说明',
            to: '/c_explain'
          }
        ]
      }
    ]
  })
  return meunData
})

Mock.mock('/api/home/card', () => {
  const data = Mock.mock({
    data: [
      {
        title: '新增用户',
        'num|200-900': 200,
        color: '@color()'
      },
      {
        title: '新增订单',
        'num|1000-2000': 1000,
        color: '@color()'
      },
      {
        title: '新增管理员',
        'num|1-10': 1,
        color: '@color()'
      },
      {
        title: '注册用户',
        'num|40000-90000': 40000,
        color: '@color()'
      },
      {
        title: '订单',
        'num|10000-99999': 10000,
        color: '@color()'
      },
      {
        title: '管理员',
        'num|30000-99999': 30000,
        color: '@color()'
      }
    ]
  })
  return data
})
