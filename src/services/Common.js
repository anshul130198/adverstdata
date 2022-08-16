import {AxiosBase} from "./AxiosBase";

const BASE_URL = `https://db.advertsdata.com/rest_api/`
const LOGIN_URL = `post_ad_token.cfm?user=${process.env.REACT_APP_LOGIN_USER}&auth=${process.env.REACT_APP_LOGIN_AUTH}`
const FILTER_URL = `post_anz_filter_search_v4.cfm?user=${process.env.REACT_APP_FILTER_USER}`

export default class CommonService extends AxiosBase {
    login(body) {
        console.log('body', body)
        let url = `${BASE_URL}${LOGIN_URL}`
        return this.HttpPost(url, body)
    }
    filterData(urlParams,body) {
        let url = `${BASE_URL}${FILTER_URL}`;
        return this.HttpPost(url,body);
    }
    // getPosts() {
    //     let url = `${BASE_URL}/users`;
    //     return this.HttpRequest(url);
    // }
}
