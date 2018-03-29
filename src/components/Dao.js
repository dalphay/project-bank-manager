"use strict";

import axios from 'axios';


export default class Dao {

    getAll(){
        return axios.get('http://localhost:3000/account');
    }
    add(operation){
        return axios.post('http://localhost:3000/account', operation);
    }
    remove(id){
        return axios.delete('http://localhost:3000/account/' + id);
    }
      
}