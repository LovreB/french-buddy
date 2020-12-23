import {axiosGet, axiosPost} from "@/utils/rest-access";

const ENDPOINTS = {
    word: "/word",
    verb: "/verb",
    category: "/category"
}
const PARAMS = {
    category: "?category=",
}

export async function getVerbPresent() {
    return axiosGet(ENDPOINTS.verb)
}
export async function getAllWords() {
    return axiosGet(ENDPOINTS.word)
}
export async function getWordsInCategories(categories) {
    let baseEndpoint = ENDPOINTS.word + PARAMS.category;
    let categoryEndpoint = categories.join(",")
    const endpoint = baseEndpoint + categoryEndpoint
    return axiosGet(endpoint)
}
export async function getAllCategories() {
    return axiosGet(ENDPOINTS.category)
}

export async function postVerbPresent(verb) {
    return axiosPost(ENDPOINTS.verb, verb)
}

export async function postCategory(category) {
    return axiosPost(ENDPOINTS.category, category)
}

export async function postWordOther(word, categoryIds) {
    let endpoint = (categoryIds) ? ENDPOINTS.word + PARAMS.category : ENDPOINTS.word;
    if (categoryIds) {
        let categoryEndpoint = categoryIds.join(",")
        endpoint = endpoint + categoryEndpoint
    }
    return axiosPost(endpoint, word)
}


