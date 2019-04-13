import { getData} from '@/api/http'
const getListUrl = '/work/lists'
function getTableData(params, callback) {
  getData(getListUrl, params, res => {
    callback && callback(res.data)
  })
}

 
export {
  getTableData,
}
