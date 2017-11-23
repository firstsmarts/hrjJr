import axios from 'axios'
export default {
  getInt: function (data, cb) {
    var url ='/index.php/Api/api/getIntegral/p/'+data
    axios.get(url).then(
      function (data) {
        cb(data.data)
      })
  },
  getInt2: function (data, cb) {
    var url ='/index.php/Api/api/getIntegral/cate/2/p/'+data
    axios.get(url).then(
      function (data) {
        cb(data.data)
      })
  },
  getSell: function (type,status, data, cb) {
    var url ='/index.php/Api/api/getSell/type/'+type+'/status/'+status+'/p/'+data
    axios.get(url).then(
      function (data) {
        cb(data.data)
      })
  },
  subBuy: function (data, cb) {
    var url ='/index.php/Api/api/buy_info'
    axios.post(url,data, {
                      headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }
                  }).then(
      function (data) {
        cb(data.data)
      })
  },
  postForm: function(data,cb){
    var url ='/index.php/Api/api/add_info'
    axios.post(url,data, {
                      headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }
                  }).then(
      function (data) {
        cb(data.data)
      })
  }
}
