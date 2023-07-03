
<template>
  <div >
    <!-- Header code here -->
    <header class="header">
            <img src="https://cdn-icons-png.flaticon.com/128/1137/1137134.png" alt="" height="60px" style="margin-top: 5px;">
            <div class="nom"> ZL-SNICKERS</div>
            <div class="t"><a href="/about">About</a> </div>
            <div class="t"><a href="">Categories</a></div>
            <div class="t"><a href="">Contact</a></div>

            <form action="">
              <input class="search" type="text" placeholder="search">
              <button type="submit" class="ss bg-white">
                 <img class="mt-[5px]" src="https://cdn-icons-png.flaticon.com/128/151/151773.png" alt="" height="20px" width="20px">
              </button>
            </form>

            <div class="flex">
              <img src="https://cdn-icons-png.flaticon.com/128/1011/1011322.png" alt="" class="w-[30px] h-[30px] mt-[22px]">
              <span class="en mt-[25px] ml-[5px]" >EN</span>
            </div>
      </header>


        <!-- image -->
        <div class="bg-white w-[100%] h-[600px]">
          <div class="titre">
            Welcome to ZL-SNICKERS
          </div>

          <div class="flex justify-evenly ">
            <div>
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUdwFwR1CaRWCGe_byoandSkYJSssOGpwzypwSlDTC6YLqD1aG" alt="" class="w-[200px] h-[200px]">
              <h2>Nike</h2>
              <p>OVERBREAK</p>
              <p>$112.00</p>
              <router-link :to="{ name: 'view' }">
                <button class="border-2 border-black">
                  QUICK VIEW1
                </button>
              </router-link>
            </div>
            <div>
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGgA8tK2Kd7cT5kPUlJq9vY2CWoQPR98-2A1rbsmh0SemesWH8" alt="" class="w-[200px] h-[200px]">
              <h2>Nike</h2>
              <p>ACG AIR MOWABB</p>
              <p>$128.00</p>
              <button class="border-2 border-black">
                QUICK VIEW
              </button>
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcp-fgQEmUIF6iXdK4e_ZdT7mcIwwioEQcZ6JJtMxPtYo7AJ7" alt="" class="w-[200px] h-[200px]">
              <h2>Nike</h2>
              <p>OVERBREAK</p>
              <p>$112.00</p>
              <button class="border-2 border-black">
                QUICK VIEW
              </button>
            </div>
            <div>
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRxsvn_2WPcQLy5eH7jkVfOc1j8vN1zsNROmw2Ovxjt_CSmczYb" alt="" class="w-[200px] h-[200px]">
              <h2>Nike</h2>
              <p>AIR FORCE 1 '07 CRAFT</p>
              <p>$96.00</p>
              <button class="border-2 border-black">
                QUICK VIEW
              </button>
            </div>
            <div>
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwK1F0G-9P6HgZJmJPi4ebaBWoANuTJqolFLgcwzJ4gMu9SCJg" alt="" class="w-[200px] h-[200px]">
              <h2>Nike</h2>
              <p>BLAZER MID '77 VINTAGE</p>
              <p>$80.00</p>
              <button class="border-2 border-black">
                QUICK VIEW
              </button>
            </div>
          </div>
          <!-- <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHuZ0PV53kULFnyZSv1yII5HIKjeC7Y7Sy5-osqeuTXWiEwjb6" alt=""> -->
        </div>

    <!-- Display the JSON data -->
    <!-- <div v-if="jsonData && jsonData.length > 0">
      <img :src="jsonData[0].pic" alt="Image">
    </div> -->

    <!-- footer -->
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

  .num11{
    margin-left: 30px;
    padding-bottom: 50px;
  }

  .num2{
    margin-right: 30px;
    margin-top: 10px;
  }

  .footer{
    background-color: rgb(240, 188, 92);
    display: flex;
    justify-content: space-between;
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
