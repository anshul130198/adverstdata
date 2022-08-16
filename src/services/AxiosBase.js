import axios from 'axios';
// import { Agent } from "https";

export class AxiosBase {

  async HttpRequest(options) {
    // if (isLocalHost()) {
    // const agent = new Agent({
    //   rejectUnauthorized: false
    // });
    // options.httpsAgent = agent;
    // }
    return axios(options).then(res => {
      if (res && res.data) {
        return res.data;
      }
      return null;
    })
  }

  async HttpPost(url, body, contentType = 'application/json', params, paramsSerializer, headers = null) {
    const options = {
      method: 'POST',
      url: url,
    };
    if (body) {
      options.headers = {
        'Content-Type': contentType,
        // 'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept'
      };
      options.data = body;
    }
    if (headers) {
      options.headers = Object.assign(options.headers, headers)
    }
    if (params) {
      options.params = params
      if (paramsSerializer) {
        options.paramsSerializer = paramsSerializer
      }
    }
    return this.HttpRequest(options);
  }
}