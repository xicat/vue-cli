import { getData, postData } from '@/api/http'
const getListUrl = '/diary/lists'
const createDiaryUrl = '/diary/create'
function getList (callback) {
  getData(getListUrl, null, res => {
    callback && callback(res.data)
  })
}

function createDiary (params, callback) {
  postData(createDiaryUrl, params,res => {
    callback && callback(res.data)
  },null);
}  
export {
  getList,
  createDiary
}
