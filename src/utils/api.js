import axios from "axios";

const BACKEND_URL = 'https://french-buddy-backend.herokuapp.com/verb'

export async function getVerbPresent() {
    return axios.get(BACKEND_URL)
        .then(response => {
            return response.data
        })
        .catch(e => {
            console.log(e)
        })
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