import axios from 'axios'
import { AxiosResponse } from "axios";

let BACKEND_URL = "http://localhost:5000"
let SUCCESS = "REGISTER_SUCCESS"
let FAIL = "REGISTER_FAIL"

interface Response {
    type: string,
    response: AxiosResponse
}

export const register = (email, password) => {
    let data = new FormData()
    data.append('email', email)
    data.append('password', password)

    return axios
        .post(BACKEND_URL + '/register', data)
        .then(response => {
            const axiosResponse : Response = {
                type: SUCCESS,
                response: response
            }
            return axiosResponse
        })
        .catch(error => {
            const axiosResponse : Response = {
                type: FAIL,
                response: error
            }
            return axiosResponse
        })
  }