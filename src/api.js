import axios from 'axios'

export default class Api {
    constructor(){
        this.baseUrl = 'http://localhost:3000/account'
    }
    getOperationsById (operationsId){
        return axios.get(`${this.baseUrl}/account/${operationsId}`)
    }

}