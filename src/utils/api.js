import axios from "axios";

const BACKEND_URL = 'https://french-buddy-backend.herokuapp.com'

export async function getVerbPresent() {
    return axiosGet('/verb')
}
export async function getAllWords() {
    return axiosGet('/word')
}

export async function postVerbPresent(verb) {
    return axios.post(BACKEND_URL, verb)
        .then(response => {
            return response
        })
        .catch(e => {
            console.log(e)
        })

}

async function axiosGet(urlEndpoint) {
    const url = BACKEND_URL + urlEndpoint
    return axios.get(url)
        .then(response => {
            return response.data
        })
        .catch(e => {
            console.log(e)
        })
}