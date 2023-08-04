
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

    <!-- image -->
    <div class="bg-white w-[100%] h-[600px]">
      <div class="titre">
        <b> Welcome to ZL-SNICKERS </b>
      </div>

      <div class="flex justify-evenly">
        <div v-for="(productt, index) in products" :key="index">
          <img :src="productt.image" class="h-[150px] w-[150px]" />
          <h2 class="text-[20px]">
            <b>{{ productt.branch }}</b>
          </h2>
          <p class="text-[20px]">{{ productt.name }}</p>
          <p class="mt-[10px] text-[15px]">${{ productt.price }}</p>
          <!--  -->
          <router-link
            :to="{
              name: 'view',
              params: {
                imageUrl: productt.image,
                name: productt.name,
                price: productt.price,
                product_id: productt.id,
              },
            }"
          >
            <button
              class="border-3 border-black p-[5px] hover:bg-[rgb(240,188,92)]"
            >
              <b>QUICK VIEW</b>
            </button>
          </router-link>
        </div>

        <!-- <div>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGgA8tK2Kd7cT5kPUlJq9vY2CWoQPR98-2A1rbsmh0SemesWH8" alt="" class="w-[200px] h-[200px]">
                <h2><b>Nike</b></h2>
                <p>ACG AIR MOWABB</p>
                <p class="mt-[10px]">$128.00</p>
                <router-link :to="{ name: 'view' }">
                  <button class="border-3 border-black p-2 hover:bg-[rgb(240,188,92)]">
                    <b>QUICK VIEW</b>
                  </button>
                </router-link>
              </div> -->

        <!-- <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcp-fgQEmUIF6iXdK4e_ZdT7mcIwwioEQcZ6JJtMxPtYo7AJ7" alt="" class="w-[200px] h-[200px]">
                <h2><b>Nike</b></h2>
                <p>OVERBREAK</p>
                <p class="mt-[10px]">$112.00</p>
                <router-link :to="{ name: 'view' }">
                  <button class="border-3 border-black p-2 hover:bg-[rgb(240,188,92)]">
                    <b>QUICK VIEW</b>
                  </button>
                </router-link>
              </div> -->

        <!-- <div>
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRxsvn_2WPcQLy5eH7jkVfOc1j8vN1zsNROmw2Ovxjt_CSmczYb" alt="" class="w-[200px] h-[200px]">
                <h2><b>Nike</b></h2>
                <p>AIR FORCE 1 '07 CRAFT</p>
                <p class="mt-[10px]">$96.00</p>
                <router-link :to="{ name: 'view' }">
                  <button class="border-3 border-black p-2 hover:bg-[rgb(240,188,92)]">
                    <b>QUICK VIEW</b>
                  </button>
                </router-link>
              </div> -->

        <!-- <div>
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwK1F0G-9P6HgZJmJPi4ebaBWoANuTJqolFLgcwzJ4gMu9SCJg" alt="" class="w-[200px] h-[200px]">
                <h2><b>Nike</b></h2>
                <p>BLAZER MID '77 VINTAGE</p>
                <p class="mt-[10px]">$80.00</p>
                <router-link :to="{ name: 'view' }">
                  <button class="border-3 border-black p-2 hover:bg-[rgb(240,188,92)]">
                    <b>QUICK VIEW</b>
                  </button>
                </router-link>
              </div> -->
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
import { useRouter } from "vue-router";
import { listProduct } from "../api/product";

export default {
  data() {
    return {
      jsonData: null,
      products: [],
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      listProduct().then((res) => {
        this.products = res.data;
      });
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
