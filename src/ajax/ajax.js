import axios from 'axios'
import qs from 'qs'

const ajax = axios.create({
  method:'post',  
  transformRequest: [function (data) {
    // 把 data 处理成form data形式传值
    return qs.stringify(data);
  }]
})
export default ajax
