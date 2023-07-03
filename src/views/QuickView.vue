<template>
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

    <div class="bg-white w-[100%] h-[600px]">

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