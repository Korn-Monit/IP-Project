<template>
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

      <div class="bg-white w-[100%] h-[600px]">
        <div class="w-[700px] ml-[200px]">
          <!-- <div class="text-center"> -->
            <h1 class="text-[30px]"><b>About our website</b></h1>
            <p>At Our Snickers Store, we are passionate about providing the best selection of snickers, ensuring that every step you take is in style, comfort, and confidence. We pride ourselves on being the go-to destination for snickers enthusiasts, offering a wide range of options to suit every taste and preference.</p>

            <h1 class="text-[30px]"><b>Our Mission</b></h1>
            <p>Our mission is simple - to bring you the latest and greatest snickers from top brands, all in one convenient place. We aim to be your trusted source for finding the perfect snickers that not only complement your style but also enhance your performance and comfort.</p>

            <h1 class="text-[30px]"><b>Quality and Variety</b></h1>
            <p>We understand that every snickers enthusiast has unique preferences. That's why we curate our collection to offer a diverse range of snickers styles, colors, and sizes. Whether you're a casual walker, a dedicated runner, or a fashion-forward trendsetter, we have the snickers that will exceed your expectations.</p>

            <h1 class="text-[30px]"><b>Expertise and Guidance</b></h1>
            <p>Choosing the right snickers can be overwhelming, especially with so many options available. Our team of snickers experts is here to guide you through the selection process, offering personalized advice and recommendations. We stay updated with the latest trends and technologies in the snickers industry to ensure you make an informed decision.</p>

          <!-- </div> -->
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
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
