import { getData } from '@/api/http'
const getListUrl = '/diary/lists'
function getList (callback) {
  getData(getListUrl, null, res => {
    callback && callback(res.data)
  })
}
export {
  getList
}
