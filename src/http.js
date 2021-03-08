import axios from 'axios';

// const app_id = process.env.VUE_APP_APPLICATION_ID
// const app_key = process.env.VUE_APP_APPLICATION_KEY
//
// let oxford= require('oxford-dictionaries-api')
// let oxforddictionaries = new oxford(app_id, app_key);
//
// export const oxforddictionaries = new oxford(app_id, app_key)

export const HTTP = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, X-Auth-Token, Authorization',
        // 'Access-Control-Allow-Credentials': true,
        // 'Content-Type': "application/json",
        'Accept': 'application/json',
        'app_id': process.env.VUE_APP_APPLICATION_ID,
        'app_key': process.env.VUE_APP_APPLICATION_KEY,
        'Authorization': 'Basic ' + btoa(process.env.VUE_APP_APPLICATION_ID + ":" + process.env.VUE_APP_APPLICATION_KEY)
    },
    // withCredentials: true
});
// HTTP.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
// HTTP.defaults.headers.common['Access-Control-Allow-Methods'] = "GET, POST, PATCH, PUT, DELETE, OPTIONS"
// HTTP.defaults.headers.common['Access-Control-Allow-Headers'] = "Origin, Content-Type, X-Auth-Token"
// HTTP.defaults.headers.common['Accept'] = "application/json"
// HTTP.defaults.headers.common['app_id'] = process.env.VUE_APP_APPLICATION_ID
// HTTP.defaults.headers.common['app_key'] = process.env.VUE_APP_APPLICATION_KEY

