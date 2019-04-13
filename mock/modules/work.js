import Mock from 'mockjs'
const Random = Mock.Random

Mock.mock('/work/lists', 'get', res => {
	
	if(!res.body){
		let list =[];
		for(let i=0; i<456; i++){
			list.push({
				name:Random.cname(),
				age:Random.integer(14, 16),
				phone:Random.integer(13100000000, 19999999999),
				score:Random.integer(50, 100),
				gender:Random.shuffle(['W', 'M']),
				date:Random.date('yyyy-MM-dd'),
				address:Random.county(true),
			})
		}
		return list;
	}

})
