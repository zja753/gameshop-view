/**
 * http.js
 * 封装axios，
 * 调用方法:
 * http.get('/api/enquiry/web/query',{id:1}).then((res)=>{你的操作})
 * http.post('/api/enquiry/web/update',{id:1}).then((res)=>{你的操作})
 * http.postFormData('/api/enquiry/web/update',{id:1,file:file}).then((res)=>{你的操作})
 */
import axios from "axios";
import router from "../router";

axios.defaults.baseURL = "http://localhost:3000";

// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("Authorization")) {
      config.headers.Authorization = localStorage.getItem("Authorization");
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 添加响应拦截器，统一处理服务器响应和异常
 */
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    /**
     * 状态码401代表无权限访问，权限失效，需要重新获取authToken
     * 状态码500代表REST服务器异常
     */
    const status = error.response.status;
    // const message = error.response.data.meta.message
    if (status === 401) {
      /**
       * 登录授权token超时，提示
       */
      localStorage.removeItem("Authorization");
      router.push({ name: "Login" });
      return Promise.reject(error);
    }

    /**
     * 1.处理系统服务异常
     * 2.处理SoaException异常
     */
    // if (status === 500) {
    //   if (message.indexOf('ERROR_CODE_003') > -1) {
    //     this.$message.error('系统服务异常')
    //     return
    //   }

    //   this.$message.error(message)
    // }

    return Promise.reject(error);
  }
);

export default {
  /**
   * get方法，对应get请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: params,
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  /**
   * post方法，对应post请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  /**
   * postFormData方法，对应post请求，用来提交文件+数据
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  postFormData(url, params) {
    return new Promise((resolve, reject) => {
      axios({
        headers: {
          "Content-Type": "multipart/form-data", // ;boundary=----WebKitFormBoundaryQ6d2Qh69dv9wad2u
        },
        transformRequest: [
          function(data) {
            // 在请求之前对data传参进行格式转换
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
              formData.append(key, data[key]);
            });
            return formData;
          },
        ],
        url,
        method: "post",
        data: params,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
