import axios from "axios";

export async function getVerbPresent() {
    return axios.get(`https://french-buddy-backend.herokuapp.com/verb`)
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(e => {
            console.log("get error")
            console.log(e)
        })
}