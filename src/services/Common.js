import { AxiosBase } from "./AxiosBase";

// const BASE_URL = `https://db.advertsdata.com/rest_api/`
// const LOGIN_URL = `post_ad_token.cfm?user=${process.env.REACT_APP_LOGIN_USER}&auth=${process.env.REACT_APP_LOGIN_AUTH}`
// const FILTER_URL = `post_anz_filter_search_v4.cfm?user=${process.env.REACT_APP_FILTER_USER}`

const BASE_URL = `http://localhost:3001/rest_api/`
const LOGIN_URL = 'login'
const FILTER_URL = 'filter'
const JOB_URL = 'job'

export default class CommonService extends AxiosBase {
    login(body) {
        let url = `${BASE_URL}${LOGIN_URL}`
        return this.HttpPost(url, body)
    }
    details(body) {
        let url = `${BASE_URL}${JOB_URL}`;
        return this.HttpPost(url, body);
    }
    // details(body) {
    //     const jobId = body.jobId
    //     let url = `${BASE_URL}${JOB_URL}/${jobId}`;
    //     console.log('jobId frontend', jobId)
    //     return this.HttpRequest(url, body);
    // }
    filterData(body) {
        let url = `${BASE_URL}${FILTER_URL}`;
        return this.HttpPost(url, body);
    }
}
