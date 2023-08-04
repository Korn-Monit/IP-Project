<template>
    <header class="header">
      <router-link :to="{ name: 'landingpage' }">
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1137/1137134.png"
            alt=""
            style="margin-top: 5px"
            class="h-[60px]"
          />
        </button>
      </router-link>
  
      <div class="nom">
        <router-link :to="{ name: 'landingpage' }">
          <button>ZL-SNICKERS</button>
        </router-link>
      </div>
      <div class="t"><a href="/about">About</a></div>
      <div class="t"><a href="">Categories</a></div>
      <div class="t"><a href="">Contact</a></div>
  
      <div>
        <input class="search m" type="text" placeholder="search" />
        <button type="submit" class="">
          <img
            class="h-[20px] mt-[15px]"
            src="https://cdn-icons-png.flaticon.com/128/151/151773.png"
            alt=""
          />
        </button>
      </div>
  
      <div class="flex">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1011/1011322.png"
          alt=""
          class="w-[30px] h-[30px] mt-[22px]"
        />
        <span class="en mt-[25px] ml-[5px]">EN</span>
      </div>
    </header>
  
    <div class="bg-white w-[100%] h-[600px]">
      <div class="flex justify-center gap-x-[40px] pt-[50px]">
        <img
          :src="$route.params.imageUrl" alt=""
          class="h-[350px] border-2 border-black"
        />
  
        <div>
          <div class="mb-[10px]">
            <span class="text-[30px]"><b>{{ $route.params.name }}</b></span>
            <span class="ml-[100px] text-[30px]"> <b>${{ $route.params.price }}</b> </span>
          </div>
          <div class="h-[1px] bg-black"></div>
          <div class="mb-[10px]">
            <span class="ml-[5px] text-sky-600 underline-offset-1 underline"
              >Size Chart</span>
          </div>
          <div class="mb-[20px]">
            <!-- <span
              class="border-2 border-black pt-[10px] pb-[10px] pr-[60px] pl-[60px]"
              >Woman</span
            > -->
              <strong>Choose Gender:</strong>
              <select class="border-2 border-black ml-[50px] pt-[10px] pb-[10px] pr-[60px] pl-[60px]" v-model="gender">
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
            <!-- <span
              class="border-2 border-black ml-[50px] pt-[10px] pb-[10px] pr-[60px] pl-[60px]"
              >Man</span> -->
          </div>
          <div class="mb-[20px]">
              <strong>Choose Size:</strong>
              <select class="border-2 border-black ml-[75px] pt-[10px] pb-[10px] pr-[60px] pl-[60px]" v-model="sizeSelection">
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
              </select>
          </div>
          <div class="h-[1px] bg-black mb-[10px]"></div>
          <div class="mb-[20px]">
              <strong>Choose amount:</strong>
              <select class="border-2 border-black ml-[50px] pt-[10px] pb-[10px] pr-[60px] pl-[60px]" v-model="amountSelection">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
          </div>
          <div class="h-[1px] bg-black mb-[10px]"></div>
          <div class="mb-[15px]">
            <router-link :to="{ name: '' }">
              <button @click="addToCart()"
                class="border-2 border-black bg-violet-500 text-center pt-[10px] pb-[10px] pr-[60px] pl-[60px]">
                <b>Add To Card</b>
              </button>
            </router-link>
          </div>
        </div>
      </div>
  
      <div class="h-[2px] bg-slate-400 w-[90%] ml-[5%]"></div>
      <div>
        <h1 class="ml-[80px]">
          <b>Related Products</b>
        </h1>
  
        <div class="flex justify-evenly">
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b0981ff-45f8-40c3-9372-32430a62aaea/dunk-high-womens-shoes-cF9txG.png"
            alt=""
            class="h-[150px] w-[150px]"
          />
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png"
            alt=""
            class="h-[150px] w-[150px]"
          />
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/53a1614a-a5fd-4bfe-977e-6921451ed50e/air-force-1-react-mens-shoes-WSjfs8.png"
            alt=""
            class="h-[150px] w-[150px]"
          />
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14a35c8c-dcd1-462d-97f7-1bddb677184c/dunk-low-lx-womens-shoes-kPGHX0.png"
            alt=""
            class="h-[150px] w-[150px]"
          />
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/87d7e901-4d08-4456-9d62-07e821aff45b/air-max-90-futura-womens-shoes-kvRZ4h.png"
            alt=""
            class="h-[150px] w-[150px]"
          />
        </div>
      </div>
    </div>
  
    <footer class="footer">
      <div class="flex items-center">
        <a href=""
          ><img
            src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
            alt=""
            width="50px"
            height="50px"
            class="num1"
        /></a>
        <a href=""
          ><img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/565/Mastercard-logo-64.png"
            alt=""
            width="50px"
            height="50px"
            class="num1"
        /></a>
        <a href=""
          ><img
            src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Paypal-39-64.png"
            alt=""
            width="50px"
            height="50px"
            class="num1"
        /></a>
        <a href="" class="num11">FAQ</a>
      </div>
  
      <div class="flex items-center">
        <a href="https://www.facebook.com/"
          ><img
            src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png"
            alt=""
            width="30px"
            height="30px"
            class="num2"
        /></a>
        <a href="https://www.instagram.com/"
          ><img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png"
            alt=""
            width="30px"
            height="30px"
            class="num2"
        /></a>
        <a href="https://www.youtube.com/"
          ><img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png"
            alt=""
            width="30px"
            height="30px"
            class="num2"
        /></a>
        <a href="https://twitter.com/?lang=en"
          ><img
            src="https://cdn-icons-png.flaticon.com/128/25/25347.png"
            alt=""
            width="30px"
            height="30px"
            class="num2"
        /></a>
      </div>
    </footer>
  </template>
  
  <script>
  // import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
  // import store from '../store/index.js';
  
  export default {
    name: "QuickView",
    // Add any component logic or data properties here
    data(){
      return{
        gender: "",
        amountSelection: "",
        sizeSelection: "",
      }
    },
  
    methods: {
      addToCart() {
        const cartData = {
              product_id: this.$route.params.product_id,
              client_size: this.sizeSelection,
              client_gender: this.gender,
              // user_id: '',
              // address_id: '',
              // payment_method_id: '',
              // shipping_method_id: '',
              // status_id: '',
              quantity: this.amountSelection,
        };
        this.$store.dispatch('updateCartData', cartData);
      },
    }
    };
  
  </script>
  
  <style>
  .header {
    display: flex;
    background-color: rgb(240, 188, 92);
    height: 70px;
    justify-content: space-evenly;
  }
  .footer {
    background-color: rgb(240, 188, 92);
    display: flex;
    justify-content: space-between;
  }
  </style>