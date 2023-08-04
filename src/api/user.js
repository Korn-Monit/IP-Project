import axios from "axios";
const apiBased = 'http://127.0.0.1:8000/api';

export function listUser(){
    return axios.get(`${apiBased}/getUser`)
}

export function addUerAddress(userAddress){
    return axios.post(`${apiBased}/addUserAddress`, userAddress);
}

export function listLatestUserAddress(){
    return axios.get(`${apiBased}/listLastestId`);
}

export function listUserById(){
    return axios.get(`${apiBased}/listUserById`);
}