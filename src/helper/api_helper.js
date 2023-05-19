import axios from "axios";
import appConfig from "../config/index";
// default
axios.defaults.baseURL = appConfig.API_URL;
// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("shypie"))?.accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Sets the default authorization
 * @param {*} token
 */
// const setAuthorization = (token) => {
//   axios.defaults.headers.common["Authorization"] = "Bearer " + token;
// };

class APIClient {
  // eslint-disable-next-line class-methods-use-this
  get = (url, params) => {
    let response;

    const paramKeys = [];
    if (params) {
      console.log(params);
      Object.keys(params).map((key) => {
        paramKeys.push(`${key}=${params[key]}`);
        return paramKeys;
      });

      const queryString = paramKeys && paramKeys.length ? paramKeys.join("&") : "";
      response = this.axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(url);
    }
    return response;
    // return axios.get(url, { params });
  };

  // eslint-disable-next-line class-methods-use-this
  create = (url, data, headers) => axios.post(url, data, headers);

  // eslint-disable-next-line class-methods-use-this
  update = (url, data) => axios.put(url, data);

  // eslint-disable-next-line class-methods-use-this
  delete = (url, params) => axios.delete(url, { params });
}
const getLoggedinUser = () => {
  const user = localStorage.getItem("frenley");

  if (!user) {
    return null;
  }
  return JSON.parse(user);
};

export { APIClient, getLoggedinUser };
