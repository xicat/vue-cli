import Mock from 'mockjs'

const list = [
  { date: '2019-04-10', weather: 'rainy', title: 'test', content: 'Hello World!' }
]
Mock.mock('/diary/lists', 'get', res => {
	
  return list
})
Mock.mock('/diary/create', 'post', res => {

	list.unshift(JSON.parse(res.body))
  return { result: true,
					message: null }
})