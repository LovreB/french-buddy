import axios from "axios";

const BACKEND_URL = 'https://french-buddy-backend.herokuapp.com'
// const BACKEND_URL = 'http://localhost:5000'

export async function axiosGet(urlEndpoint) {
    const url = BACKEND_URL + urlEndpoint
    return axios.get(url)
        .then(response => {
            return response.data
        })
        .catch(e => {
            console.log(e)
        })
}
export async function axiosPost(urlEndpoint, data) {
    const url = BACKEND_URL + urlEndpoint
    return axios.post(url, data)
        .then(response => {
            return response
        })
        .catch(e => {
            console.log(e)
        })
}