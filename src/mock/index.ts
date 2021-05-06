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
// 登录数据
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

// 验证码
Mock.mock('/api/captchas', () => {
  const num = Mock.mock({
    code: '@string("lower", 5)'
  })
  return num
})

// 菜单数据
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

// 首页卡片数据
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

// 获取用户列表
Mock.mock('/api/home/userlist', () => {
  const data = Mock.mock({
    'data|1000': [
      {
        name: '@cname',
        address: '@county(true)',
        time: '@date',
        id: '@guid'
      }
    ]
  })
  return data
})

Mock.mock('/api/home/business', () => {
  const arr = [
    '秋葵干',
    '蔬菜干',
    '菠萝圈',
    '香芋干',
    '半边梅',
    '水果冻干',
    '海苔豆',
    '盐津葡萄干',
    '榴莲条冻干',
    '藕片',
    '黑加仑',
    '蔓越莓沙琪玛',
    '蔓越莓曲奇饼干',
    '黄金肉松条',
    '印尼威化饼干',
    '椰丝米糕',
    '椰蓉球',
    '椰子酥',
    '椰子片',
    '蓝莓奶酪片',
    '奶酪玉米棒',
    '秘制豆腐干',
    '甜甜圈',
    '冰淇淋饼干',
    '奶酪起司蛋糕',
    '可比克',
    '妙脆角',
    '雪丽糍',
    '芝士条',
    '艾比利',
    '好丽友',
    '好多鱼',
    '徐福记',
    '鲜虾片',
    '粟米条',
    '葡萄干',
    '鸡尾酒',
    '酒心巧克力',
    '汉堡包',
    '可乐',
    '橙汁',
    '酱香鸡',
    '牛肉干',
    '老坛酸菜面',
    '三只松鼠',
    '小猪佩奇',
    '士力架',
    '牛奶',
    'ysl口红',
    '蜜饯先生',
    '辣条',
    '鸡爪',
    '鸡翅',
    '小笼包',
    '叉烧包',
    '奶黄芝麻豆沙包',
    '大肉包',
    '菜包',
    '灌汤包',
    '北京烤鸭',
    '担担面',
    '酸辣粉',
    '炸酱面',
    '云吞面',
    '麻辣烫',
    '羊肉串',
    '蟹壳黄',
    '烧卖糯米鸡',
    '爆筋牛肉',
    '烩面',
    '煎饼果子',
    '白灼虾',
    '佛跳墙',
    '炒鳝糊',
    '三丝汤',
    '花落人断肠',
    '凉糕热干面',
    '猪肉炖粉条',
    '烧饼'
  ]
  const data = Mock.mock({
    'data|100': [
      {
        name: '@cword(3)' + '测试店',
        id: '@guid',
        address: '@county(true)',
        desc: '@cparagraph(2)',
        food: arr
      }
    ]
  })
  return data
})
