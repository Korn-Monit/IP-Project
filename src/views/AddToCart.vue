
<template>
    <div >
      <!-- Header code here -->
      <header class="header">
              <div>
                  <span>
                    <router-link :to="{ name: 'home' }">
                      <button>
                        <img src="https://cdn-icons-png.flaticon.com/128/1137/1137134.png" alt="" style="margin-top: 5px;" class="h-[60px]">
                      </button>
                    </router-link>
                  </span>
                  <span class="nom ml-[20px] p">
                      <router-link :to="{ name: 'home' }">
                        <button>ZL-SNICKERS</button>
                      </router-link>
                  </span>
              </div>
              <div class="t"><a href="/about">About</a> </div>
              <div class="t"><a href="/">Categories</a></div>
              <div class="t"><a href="/">Contact</a></div>
  
              <div>
                <input class="search m" type="text" placeholder="search">
                <button type="submit" class="">
                  <img class="h-[20px] mt-[15px]" src="https://cdn-icons-png.flaticon.com/128/151/151773.png" alt="">
                </button>
              </div>
  
              <div class="flex">
                <img src="https://cdn-icons-png.flaticon.com/128/1011/1011322.png" alt="" class="w-[30px] h-[30px] mt-[22px]">
                <span class="en mt-[25px] ml-[5px]" >EN</span>
              </div>
  
              <div>
                    <router-link :to="{ name: 'landingpage' }">
                        <button class="flex">
                            <span>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828427.png" alt="" class="h-[25px] mt-[25px]">
                            </span>
                            <span class="pt-[25px] ml-[5px]">Logout</span>
                        </button>
                    </router-link>
              </div>
        </header>
        
        <div class="bg-white w-[100%] h-[600px] pt-[50px]">
            <div class="flex justify-center gap-x-[70px]">
              <div>
                <h1 class="text-[30px] mb-[20px]"> <b>Your Card</b></h1>
                <div class="h-[1px] bg-black mb-[10px]"></div>
                <div>
                    <span class="text-[25px]"><b>Item</b></span>
                    <span class="ml-[400px] text-[25px]"><b>Price</b></span>
                    <span class="ml-[50px] text-[25px]" ><b>Quantity</b></span>
                </div>
                <div class="h-[1px] bg-black mb-[20px] mt-[10px]"></div>
                <div class="flex items-center">
                    <span>
                        <img :src="$route.params.imageUrl">
                    </span>
                    <span class="ml-[5px] text-[25px]"><b>{{ $route.params.name }}</b></span>
                    <span class="ml-[120px] text-[25px]"><b>${{ $route.params.price }}</b></span>
                    <span class="ml-[70px] text-[25px]"><b>1</b></span>
                </div>
                <div class="h-[1px] bg-[rgb(148,163,184)] mb-[10px] mt-[10px]"></div>
                <h1 class="ml-[450px] text-[25px]">Subtotal: <b>${{ $route.params.price }}</b></h1>
                <div class="h-[1px] bg-[rgb(55,56,56)] mt-[10px]"></div>
            </div>
            <div class="w-[400px] h-[320px] bg-gray-300">
              <div class="ml-[30px]">
                <h1 class="ml-[10px] text-[25px] mt-[20px]"><b>Summary (1 item)</b>
                </h1>

                  <div class="ml-[20px] mt-[15px] mb-[5px]">
                    <span class="text-[20px]">Subtotal</span>
                    <span class="ml-[70px] text-[20px]">${{ $route.params.price }}</span>
                  </div>

                  <h1 class="ml-[20px] mb-[10px] text-[20px]">Shipping</h1>
                  <h1 class="ml-[20px] mb-[10px] text-[20px]">Est. Taxes</h1>
                  <div class="h-[2px] bg-white mb-[10px] w-[170px] mt-[15px] ml-[10px]"></div>
                  <div class="ml-[20px]">
                      <span><b class="text-[20px] mb-[20px]">Total</b></span>
                      <span class="ml-[90px] text-[20px]"><b>${{ $route.params.price }}</b></span>
                  </div>
                  <div class="mt-[20px]">
                    <!-- <router-link :to="{ name: 'cusinfo'}">  -->
                      <button class="bg-indigo-800 border-2 border-black text-white ml-[10px] pt-[7px] pb-[7px] pl-[55px] pr-[55px] text-[20px] w-[300px]">Checkout</button>
                    <!-- </router-link>   -->
                  </div>
              </div>

            </div>
          </div>
        </div>
      <!-- footer -->
      <footer class="footer">
            <div class="flex items-center">
              <a href=""><img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="" width="50px" height="50px" class="num1"></a>
              <a href=""><img src="https://cdn4.iconfinder.com/data/icons/logos-3/565/Mastercard-logo-64.png" alt="" width="50px" height="50px"  class="num1"></a> 
              <a href=""><img src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Paypal-39-64.png" alt="" width="50px" height="50px" class="num1"></a>
              <a href="" class="ml-[20px]">FAQ</a>
            </div>
  
            <div class="flex items-center">
              <a href="https://www.facebook.com/"><img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" alt="" width="30px" height="30px" class=" num2" ></a>
              <a href="https://www.instagram.com/"><img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="" width="30px" height="30px" class=" num2"></a>
              <a href="https://www.youtube.com/"><img src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt="" width="30px" height="30px" class=" num2"></a>
              <a href="https://twitter.com/?lang=en"><img src="https://cdn-icons-png.flaticon.com/128/25/25347.png" alt="" width="30px" height="30px" class=" num2"></a>
            </div>
      </footer>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default {
    data() {
      return {
        jsonData: null,
      };
    },
    // mounted() {
    //   axios
    //     .get('http://localhost:3000/api/data')
    //     .then(response => {
    //       this.jsonData = response.data;
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // },
    // methods: {
    // }
  };
  </script>
  
  <style>
    @media (min-width: 1024px) {
      .home1 {
        min-height: 100vh;
      }
    }
  
    .ss{
      height: 30px;
      border-radius: 0 20px 20px 0;
      margin-bottom: 10px;
    }
  
    .num1{
      margin-left: 30px;
    }
  
    /* .num11{
      margin-left: 30px;
      padding-bottom: 50px;
    } */
  
    .num2{
      margin-right: 30px;
      margin-top: 10px;
    }
  
    .footer{
      background-color: rgb(240, 188, 92);
      display: flex;
      justify-content: space-between;
      height: 70px;
    }
  
    .langue{
      margin-top: 15px;
    }
  
    .s{
      width: 30px;
      height: 30px;
    }
  
    .b{
      border: 2px solid black;
    }
  
    .t{
      margin-top: 20px;
      font-size: 20px;
    }
  
    .nom{
      margin-top: 25px;
      font-size: 25px;
    }
   
    .header{
      display: flex;
      background-color: rgb(240, 188, 92);
      height: 70px;
      justify-content: space-evenly;
    }
  
    .search{
      background-color: white;
      height: 30px;
      width: 200px;
      border-radius: 25px 0 0 25px;
      border-color: white;
      margin-top: 15px;
    }
  
    .titre{
      text-align: center;
      font-size: 50px;
    }
  
    .first-footer{
      margin-left: 0px;
    }
  
    .second-footer{
      margin-left: 500px;
    }
  
  </style>
  