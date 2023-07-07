<template>
    <header class="header">
            <div>
                <span>
                <router-link :to="{ name: 'landingpage' }">
                    <button>
                    <img src="https://cdn-icons-png.flaticon.com/128/1137/1137134.png" alt="" style="margin-top: 5px;" class="h-[60px]">
                    </button>
                </router-link>
                </span>
                <span class="nom ml-[20px]">
                    <router-link :to="{ name: 'landingpage' }">
                    <button class="">ZL-SNICKERS</button>
                    </router-link>
                </span>
            </div>
            <div class="t"><a href="/about">About</a> </div>
            <div class="t"><a href="">Categories</a></div>
            <div class="t"><a href="/contactus">Contact</a></div>
            
            <!-- search -->
            <!-- <form action=""> -->
            <div>
            <input class="search m" type="text" placeholder="search">
            <button type="submit" class="">
                <img class="h-[20px] mt-[15px]" src="https://cdn-icons-png.flaticon.com/128/151/151773.png" alt="">
            </button>
            </div>
            <!-- </form> -->
        

            <div class="flex">
            <img src="https://cdn-icons-png.flaticon.com/128/1011/1011322.png" alt="" class="w-[30px] h-[30px] mt-[22px]">
            <span class="en mt-[25px] ml-[5px]" >EN</span>
            </div>

            <div>
                <!-- <router-link :to="{ name: 'login' }"> -->
                    <button class="flex" @click="showPopup = true">
                        <span>
                            <img src="https://cdn-icons-png.flaticon.com/128/2609/2609282.png" alt="" class="h-[25px] mt-[25px]">
                        </span>
                        <span class="pt-[25px] ml-[5px]">Login</span>
                    </button>
                <!-- </router-link> -->
            </div>

            <div v-if="showPopup" class="overlay">
            <div class="popup">
                <div class="ml-[150px] mb-[10px]">
                <button class="ml-[100px]" @click="showPopup = false">
                    <img src="https://cdn-icons-png.flaticon.com/128/5735/5735775.png" alt="" class="h-[30px] text-white">
                </button>
                </div>
                <span>Login</span>

                
                <form>
                
                <div class="user-box">
                    <input type="text" name="" required="">
                    <label>Username</label>
                </div>
                <div class="user-box">
                    <input type="password" name="" required="">
                    <label>Password</label>
                </div>

                <router-link :to="{ name: 'home' }">
                    <button class="login-btn">Login</button>
                </router-link>
                </form>
            </div>
            </div>
    </header>

    <div class="bg-white w-[100%] h-[600px]">
        <div class="container">
            <div class="row ">
                <h1>contact us</h1>
            </div>
            <!-- <div class="row">
                <h4 style="text-align:center">We'd love to hear from you!</h4>
            </div> -->
            <div class="row input-container">
                    <div class="col-xs-12">
                        <div class="styled-input wide">
                            <input type="text" required />
                            <label>Name</label> 
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="styled-input">
                            <input type="text" required />
                            <label>Email</label> 
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="styled-input" style="float:right;">
                            <input type="text" required />
                            <label>Phone Number</label>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="styled-input wide">
                            <textarea required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="btn-lrg submit-btn">Send Message</div>
                    </div>
            </div>
        </div>
    </div>

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

<script>

</script>

<style>
    /* body {
        background-color: #444442;
        padding-top: 85px;
    }

    h1 {
        font-family: 'Poppins', sans-serif, 'arial';
        font-weight: 600;
        font-size: 60px;
        color: black;
        text-align: center;
    }

    h4 {
        font-family: 'Roboto', sans-serif, 'arial';
        font-weight: 400;
        font-size: 20px;
        color: #9b9b9b;
        line-height: 1.5;
    } */

    /* ///// inputs /////*/

    input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
        font-size: 0.75em;
        color: #999;
        top: -5px;
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
    }

    .styled-input {
        float: left;
        width: 293px;
        margin: 1rem 0;
        position: relative;
        border-radius: 4px;
    }

    @media only screen and (max-width: 768px){
        .styled-input {
            width:100%;
        }
    }

    .styled-input label {
        color: #999;
        padding: 1.3rem 30px 1rem 30px;
        position: absolute;
        top: 10px;
        left: 0;
        -webkit-transition: all 0.25s ease;
        transition: all 0.25s ease;
        pointer-events: none;
    }

    .styled-input.wide { 
        width: 650px;
        max-width: 100%;
    }

    input,
    textarea {
        padding: 30px;
        border: 0;
        width: 100%;
        font-size: 1rem;
        background-color: #2d2d2d;
        color: white;
        border-radius: 4px;
    }

    input:focus,
    textarea:focus { outline: 0; }

    input:focus ~ span,
    textarea:focus ~ span {
        width: 100%;
        -webkit-transition: all 0.075s ease;
        transition: all 0.075s ease;
    }

    textarea {
        width: 100%;
        min-height: 20px;
    }

    .input-container {
        width: 650px;
        max-width: 100%;
        margin: 20px auto 25px auto;
    }

    .submit-btn {
        /* float: right; */
        padding: 7px 35px;
        border-radius: 60px;
        display: inline-block;
        background-color: #4b8cfb;
        color: white;
        font-size: 18px;
        cursor: pointer;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
                0 2px 10px 0 rgba(0,0,0,0.07);
        -webkit-transition: all 300ms ease;
        transition: all 300ms ease;
    }

    .submit-btn:hover {
        transform: translateY(1px);
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
                0 1px 1px 0 rgba(0,0,0,0.09);
    }

    @media (max-width: 768px) {
        .submit-btn {
            width:100%;
            float: none;
            text-align:center;
        }
    }

    input[type=checkbox] + label {
        color: #ccc;
        font-style: italic;
    } 

    input[type=checkbox]:checked + label {
        color: #f00;
        font-style: normal;
    }
</style>