import axios from 'axios';

const apiBased = 'http://127.0.0.1:8000/api';

export function listProduct(){
    return axios.get(`${apiBased}/getProduct`);
}

export function addProductToCart(cartData){
    return axios.post(`${apiBased}/addProductToCart`, cartData);
}

export function addUerAddress(userAddress){
    return axios.post(`${apiBased}/addUserAddress`, userAddress);
}

export function addShippingMethod(shippingMethod){
    return axios.post(`${apiBased}/addShippingMethod`, shippingMethod);
}

export function addPaymentMethod(paymentMethod){
    return axios.post(`${apiBased}/addPaymentMethod`, paymentMethod);
}

export function listShippingMethod(){
    return axios.get(`${apiBased}/listShippingMethods`);
}

export function listPaymentMethod(){
    return axios.get(`${apiBased}/listPaymentMethods`);
}