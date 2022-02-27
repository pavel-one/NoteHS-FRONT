import axios from "axios";

const Module = {}
const Api = {}

let google_id = ''
chrome.identity.getProfileUserInfo(function (userInfo) {
    google_id = userInfo.id
});

const http = axios.create({
    baseURL: 'http://app.loc/',
    headers: {
        accept: 'application/json'
    },
    timeout: 10000
})

Api.Auth = async () => {
    let token = localStorage.getItem('token')
    if (!token) {
        token = await Api.getToken()
        localStorage.setItem('token', token)
    }

    return token
}

Api.getUserInfo = async () => {
    const token = await Api.Auth()

    const response = await http.get('/user/', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}

Api.getToken = async () => {
    //test
    const a = await http.get('/')
    console.log('TEST PING', a.data)
    //testend

    const response = await http.post('/auth/', {
        google_id: google_id
    })

    return response.data.resource.token
}

Module.install = function (vue, options) {
    vue.prototype.$api = Api

}

export default Module