import Mock from 'mockjs'

const list = [
  { date: '2019-04-10', weather: 'rainy', title: 'test', content: 'Hello World!' }
]
console.log('mock-diary')
Mock.mock('/diary/lists','get', res => {
  return list
})
