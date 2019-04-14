import Mock from 'mockjs'
const Random = Mock.Random
let list =[];
Mock.setup({
    timeout: '2000-6000'
})
for(let i=0; i<456; i++){
	list.push({
		cname:Random.cname(),
		name:Random.name(),
		age:Random.integer(14, 16),
		phone:Random.integer(13100000000, 19999999999),
		score:Random.integer(50, 100),
		gender:Random.pick(['girl', 'boy']),
		date:Random.date('yyyy-MM-dd'),
		address:Random.county(true),
	})
}
Mock.mock('/work/lists', 'post', res => {
	
	if(!res.body){

		return list;
	}else{
		let result ={},{pageSize,currentPage,order,filters} = JSON.parse(res.body);
		let resultArray = list;
		if(filters){
			filters = JSON.parse(filters);
			for(let attr in filters) {
				resultArray = resultArray.filter(row => filters[attr].indexOf(row[attr])>-1)
			}
		}
		if(order){
			resultArray.sort((a,b)=>{
				if(order.order == 'descending'){
					return b[order.prop] - a[order.prop]
				}else{
					return a[order.prop] - b[order.prop]
				}
			})
		}
		result.total = resultArray.length;
		result.entry =resultArray.slice((currentPage-1)*pageSize, currentPage*pageSize);
	
		return result
	}

})
