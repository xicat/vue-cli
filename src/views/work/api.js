import { postData} from '@/api/http'
const getListUrl = '/work/lists'
function getTableData(params, callback) {
  postData(getListUrl, params, res => {
    callback && callback(res.data)
  })
}

 
export {
  getTableData,
}
