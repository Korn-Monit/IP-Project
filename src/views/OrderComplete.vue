<template>
    <header class="header">
      <router-link :to="{ name: 'home' }">
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
        <router-link :to="{ name: 'home' }">
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
      <!-- cart icon-->
      <div>
        <router-link :to="{ name: 'cartdata'}">
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3523/3523885.png"
              alt=""
              class="h-[25px] mt-[25px]"
            />
          </button>
        </router-link>
      </div>

      <div>
        <router-link :to="{ name: 'landingpage' }">
          <button class="flex">
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1828/1828427.png"
                alt=""
                class="h-[25px] mt-[25px]"
              />
            </span>
            <span class="pt-[25px] ml-[5px]">Logout</span>
          </button>
        </router-link>
      </div>
    </header>
  
      <div class="bg-white w-[100%] h-[600px] pt-[90px]">
        <div class="flex justify-center gap-x-[70px]">
                <div>
                    <h2><b>Order 131217312</b></h2>
                    <h2 class="text-[20px]"><b>Thank you, Korn Monit!</b></h2>
                    <div class="h-[1px] bg-black mb-[15px] mt-[10px]"></div>
                    <h2 class="text-[20px] pb-[]"><b>Your order is confirmed</b></h2>
                    <h2>We've accepted your order and we're getting it ready</h2>
                    <div class="h-[1px] bg-black mb-[15px] mt-[10px]"></div>

                    <div>
                        <h2 class="text-[20px] mb-[30px]"><b>Customer Infomation</b></h2>
                        <div class="flex gap-x-[50px]">
                            <div>
                                <h2 class="text-[20px]"><b>Shipping Address</b></h2>
                                <p>Phnom Penh</p>
                                <div><a href="" class="underline">63 street</a></div>
                                <!-- <div><a href="" class="underline"></a></div>
                                <div><a href="" class="underline"></a></div> -->

                                <div class="mt-[30px]"></div>
                                <h2 class="text-[20px]"><b>Shipping Method</b></h2>
                                <p>UPS Ground (Estimated ship time of 3-6 days)</p>
                            </div>
                            <div>
                                <h2 class="text-[20px]"><b>Billing Address</b></h2>
                                <p>Phnom Penh</p>
                                <div><a href="" class="underline">63 street</a></div>
                                <!-- <div><a href="" class="underline"></a></div>
                                <div><a href="" class="underline"></a></div> -->

                                <div class="mt-[30px]"></div>
                                <h2 class="text-[20px]"><b>Payment Method</b></h2>
                                <p>Ending in $140</p>
                            </div>
                        </div>
                    </div>
                    <div class="h-[1px] bg-black mb-[15px] mt-[10px]"></div>
                </div>

                <div class="w-[350px] h-[350px] bg-gray-300">
                    <h1 class="ml-[10px] mt-[20px]"><b>Summary (1 item)</b></h1>

                    <div class="ml-[20px] mt-[30px] mb-[5px]">
                    <span class="ml-[10px]">Subtotal</span>
                    <span class="ml-[170px]">$100</span>
                    </div>

                    <div>
                    <span class="ml-[30px] mb-[5px]">Shipping</span>
                    <span class="ml-[170px]">$30</span>
                    
                    </div>
                    <div>
                    <span class="ml-[30px] mb-[5px]">Est. Taxes</span>
                    <span class="ml-[160px]">$10</span>
                    </div>

                    <div class="h-[4px] bg-white mb-[10px] w-[320px] mt-[15px] ml-[10px]"></div>
                    <div class="ml-[20px] mb-[10px]">Gift card or discount code</div>
                    <div>
                        <span class="ml-[20px]"><input type="text" name="" id="" class="border-black border-[2px] h-[40px] mb-[10px]"></span>
                        <button class="ml-[20px] border-2 border-black bg-indigo-800 text-white pl-[10px] pr-[10px] h-[40px] w-[80px]">Apply</button>
                    </div>
                    <div class="h-[4px] bg-white mb-[10px] w-[320px] mt-[15px] ml-[10px]"></div>
                    <div class="mt-[10px] ml-[10px]">
                    <span class="ml-[10px]">Total</span>
                    <span class="ml-[200px]">$140</span>
                    </div>
                </div>
          </div>
          
      </div>
  
  
  
  
      <footer class="footer">
            <div class="flex items-center">
              <a href=""><img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="" width="50px" height="50px" class="num1"></a>
              <a href=""><img src="https://cdn4.iconfinder.com/data/icons/logos-3/565/Mastercard-logo-64.png" alt="" width="50px" height="50px"  class="num1"></a> 
              <a href=""><img src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Paypal-39-64.png" alt="" width="50px" height="50px" class="num1"></a>
              <a href="" class="num11">FAQ</a>
            </div>
  
            <div class="flex items-center">
              <a href="https://www.facebook.com/"><img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" alt="" width="30px" height="30px" class=" num2" ></a>
              <a href="https://www.instagram.com/"><img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="" width="30px" height="30px" class=" num2"></a>
              <a href="https://www.youtube.com/"><img src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt="" width="30px" height="30px" class=" num2"></a>
              <a href="https://twitter.com/?lang=en"><img src="https://cdn-icons-png.flaticon.com/128/25/25347.png" alt="" width="30px" height="30px" class=" num2"></a>
            </div>
      </footer>
  </template>
  
  <script>
  export default {
    name: 'QuickView',
    // Add any component logic or data properties here
  }
  </script>
  
  <style>
    .header{
      display: flex;
      background-color: rgb(240, 188, 92);
      height: 70px;
      justify-content: space-evenly;
    }
    .footer{
      background-color: rgb(240, 188, 92);
      display: flex;
      justify-content: space-between;
    }
  </style>