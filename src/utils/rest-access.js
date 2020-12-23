import axios from "axios";

export async function axiosGet(urlEndpoint) {
    const url = process.env.VUE_APP_BACKEND_URL + urlEndpoint
    return axios.get(url)
        .then(response => {
            return response.data
        })
        .catch(e => {
            console.log(e)
        })
}
export async function axiosPost(urlEndpoint, data) {
    const url = process.env.VUE_APP_BACKEND_URL + urlEndpoint
    return axios.post(url, data)
        .then(response => {
            return response
        })
        .catch(e => {
            console.log(e)
        })
}