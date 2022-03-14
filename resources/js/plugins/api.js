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

Api.createDial = async (data) => {
    await Api.dropCache()

    const token = await Api.Auth()
    const response = await http.put('/dial/', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

Api.getDials = async (type = 0) => {
    const cacheKey = 'dials-type-' + type;

    if (localStorage.getItem(cacheKey)) {
        return JSON.parse(localStorage.getItem(cacheKey))
    }

    const token = await Api.Auth()

    const response = await http.get('/dial/?type=' + type, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    localStorage.setItem(cacheKey, JSON.stringify(response.data.resource))
    return response.data.resource
}

Api.syncDials = async () => {
    if (!localStorage.getItem('latest-sync')) {
        localStorage.setItem('latest-sync', Date.now().toString())
    }

    const latestSync = +localStorage.getItem('latest-sync')
    const diff = (+Date.now() - latestSync) / 60000 //in minutes
    if (diff < 1) {
        return
    }

    localStorage.setItem('latest-sync', Date.now().toString())

    const token = await Api.Auth()
    let sites = []

    chrome.topSites.get(item => {
        item.forEach(site => {
            sites.push({
                url: site.url
            })
        })

        http.post('/user/sync/popular', {
            dials: sites
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    })
}

Api.deleteDial = async id => {
    await Api.dropCache()

    const token = await Api.Auth()
    const response = await http.delete('/dial/' + id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data.resource
}

Api.getDial = async id => {
    await Api.dropCache()

    const token = await Api.Auth()
    const response = await http.get('/dial/' + id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data.resource
}

Api.getToken = async () => {
    const response = await http.post('/auth/', {
        google_id: google_id
    })

    return response.data.resource.token
}

Api.dropCache = async () => {
    const types = [0, 1]
    types.forEach(type => {
        localStorage.removeItem('dials-type-' + type)
    })
}

Module.install = function (vue, options) {
    vue.prototype.$api = Api

}

export default Module