
<template>
  <div>
    <!-- Header code here -->
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
        <router-link :to="{ name: 'cartdata' }">
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

    <div class="bg-white w-[100%] h-[600px] pt-[50px]">
      <div class="flex justify-center gap-x-[70px]">
        <!-- <div class="h-[1px] bg-black mb-[20px] mt-[10px]"></div> -->
        <div>
          <span><b>Customer Infomation</b></span>

          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              class="border-2 border-black w-[620px] h-[50px] indent-[10px]"
              v-model="email"
            />
          </div>
          <div class="h-[1px] bg-black mb-[15px] mt-[10px]"></div>

          <div class="mb-[20px]"><b>Shipping Address</b></div>
          <div>

            <input
              type="text"
              name=""
              id=""
              placeholder="First Name"
              class="border-2 border-black mr-[10px] mb-[10px] w-[305px] h-[50px] indent-[10px]"
              v-model="firstName"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Last Name"
              class="border-2 border-black w-[305px] h-[50px] indent-[10px]"
              v-model="lastName"
            />
          </div>

          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Company"
              class="border-2 border-black mb-[10px] w-[620px] h-[50px] indent-[10px]"
              v-model="company"
            />
          </div>

          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Address"
              class="border-2 border-black mr-[10px] w-[400px] h-[50px] indent-[10px]"
              v-model="address"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Apt (optional)"
              class="border-2 border-black mb-[10px] w-[210px] h-[50px] indent-[10px]"
              v-model="apt"
            />
          </div>

          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Country"
              class="border-2 border-black mr-[10px] w-[230px] h-[50px] indent-[10px]"
              v-model="country"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="State"
              class="border-2 border-black mr-[10px] w-[230px] h-[50px] indent-[10px]"
              v-model="state"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Zip"
              class="border-2 border-black w-[140px] h-[50px] indent-[10px]"
              v-model="zip"
            />
          </div>
          <div class="h-[1px] bg-black mb-[20px] mt-[10px]"></div>
          <div>
            <span><b>Return to Cart</b></span>
            <span class="ml-[270px]">
              <router-link :to="{ name: 'shippingadd' }">
                <button
                  class="border-2 border-black bg-indigo-800 text-white p-2"
                  @click="addUserAdd()"
                >
                  Continue to Shipping Method
                </button>
              </router-link>
            </span>
          </div>
        </div>
        <div>
          <!-- child -->

        </div>

        <div class="w-[350px] h-[350px] bg-gray-300">
          <h1 class="ml-[10px] mt-[20px]"><b>Summary (1 item)</b></h1>

          <div class="ml-[20px] mt-[30px] mb-[5px]">
            <span class="ml-[10px]">Subtotal</span>
            <span class="ml-[170px]">${{ $route.params.price }}</span>
          </div>

          <h1 class="ml-[30px] mb-[5px]">Shipping</h1>
          <h1 class="ml-[30px] mb-[5px]">Est. Taxes</h1>
          <div
            class="h-[4px] bg-white mb-[10px] w-[320px] mt-[15px] ml-[10px]"
          ></div>
          <div class="ml-[20px] mb-[10px]">Gift card or discount code</div>
          <div>
            <span class="ml-[20px]"
              ><input
                type="text"
                name=""
                id=""
                class="border-black border-[2px] h-[40px] mb-[10px]"
            /></span>
            <button
              class="ml-[20px] border-2 border-black bg-indigo-800 text-white pl-[10px] pr-[10px] h-[40px] w-[80px]"
            >
              Apply
            </button>
          </div>
          <div
            class="h-[4px] bg-white mb-[10px] w-[320px] mt-[15px] ml-[10px]"
          ></div>
          <div class="mt-[10px] ml-[10px]">
            <span class="ml-[10px]">Total</span>
            <span class="ml-[200px]">${{ $route.params.price }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
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
        <a href="" class="ml-[20px]">FAQ</a>
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
  </div>
</template>
  
  <script>
import axios from "axios";
import { useRouter } from "vue-router";
import ChildComponent from "./ShippingAdd.vue";

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      jsonData: null,
      // email: '',
      // firstName: '',
      // lastName:'',
      company: "",
      address: "",
      apt: "",
      country: "",
      state: "",
      zip: "",
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
  methods: {
    addUserAdd() {
      const cartData = {
        postal_code: this.zip,
        country: this.country,
        company: this.company,
        address: this.address,
        apt: this.apt,
        state: this.state,
      };
      this.$store.dispatch("storeUserAddress", cartData);
    },
  },
};
</script>
  
  <style>
@media (min-width: 1024px) {
  .home1 {
    min-height: 100vh;
  }
}

.ss {
  height: 30px;
  border-radius: 0 20px 20px 0;
  margin-bottom: 10px;
}

.num1 {
  margin-left: 30px;
}

/* .num11{
      margin-left: 30px;
      padding-bottom: 50px;
    } */

.num2 {
  margin-right: 30px;
  margin-top: 10px;
}

.footer {
  background-color: rgb(240, 188, 92);
  display: flex;
  justify-content: space-between;
  height: 70px;
}

.langue {
  margin-top: 15px;
}

.s {
  width: 30px;
  height: 30px;
}

.b {
  border: 2px solid black;
}

.t {
  margin-top: 20px;
  font-size: 20px;
}

.nom {
  margin-top: 25px;
  font-size: 25px;
}

.header {
  display: flex;
  background-color: rgb(240, 188, 92);
  height: 70px;
  justify-content: space-evenly;
}

.search {
  background-color: white;
  height: 30px;
  width: 200px;
  border-radius: 25px 0 0 25px;
  border-color: white;
  margin-top: 15px;
}

.titre {
  text-align: center;
  font-size: 50px;
}

.first-footer {
  margin-left: 0px;
}

.second-footer {
  margin-left: 500px;
}
</style>
  