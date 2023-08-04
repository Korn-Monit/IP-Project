import { createStore } from 'vuex';
import { addProductToCart, addShippingMethod, addPaymentMethod } from '../api/product';
import {addUerAddress} from '../api/user';



export const store = createStore({
    state: {
        cartData: {
            product_id: '',
            client_size: '',
            client_gender: '',
            quantity: '',
        },
        userAddress:{
            postal_code: '',
            country: '',
            company: '',
            address: '',
            apt: '',
            state: '',
        },
        shippingMethod:{
            name: '',
            price: ''
        },
        paymentMethod:{
            name: '',
        }
    },

    getters: {
        getCartData: state => state.cartData,
        // or function (state) { return state.cartData;}
        getUserAddress: state => state.userAddress,
        getShippingMethod: state => state.shippingMethod,
        getPaymentMethod: state => state.paymentMethod,
    },

    mutations: {
        setProductName(state, newData) {
            state.cartData = { ...state.cartData, ...newData };
        },
        setUserAddress(state, newData) {
            state.userAddress = { ...state.userAddress, ...newData };
        },
        setShippingMethod(state, newData){
            state.shippingMethod = { ...state.shippingMethod, ...newData };
        },
        setPaymentMethod(state, newData){
            state.paymentMethod = { ...state.paymentMethod, ...newData };
        }
    },

    actions: {
        updateCartData({ commit }, newData) {
            console.log('Cart Data:', newData);
            commit('setProductName', newData);
            addProductToCart(newData).then(res=>{
                console.log("result",res.data);
                console.log("successfully inserted");
            }).catch(error =>{
                console.log(error);
            })
        },
        
        storeUserAddress({ commit }, newData) {
            console.log('User Address:', newData);
            commit('setUserAddress', newData);
            addUerAddress(newData).then(res=>{
                console.log("result",res.data);
                console.log("successfully inserted");
            }).catch(error =>{
                console.log(error);
            })
        },

        storeShippingMethod({ commit }, newData) {
            console.log('Shipping method:', newData);
            commit('setShippingMethod', newData);
            addShippingMethod(newData).then(res=>{
                console.log("result",res.data);
                console.log("successfully inserted");
            }).catch(error =>{
                console.log(error);
            })
        },
        
        storePaymentMethod({ commit }, newData) {
            console.log('Payment method:', newData);
            commit('setPaymentMethod', newData);
            addPaymentMethod(newData).then(res=>{
                console.log("result",res.data);
                console.log("successfully inserted");
            }).catch(error =>{
                console.log(error);
            })
        },  
    }
});
