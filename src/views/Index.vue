<template>
  <div id="app">
    <!-- <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/product">Product</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
          <button @click="$emit('checkout')">Go to checkout</button>
          <button @click="$emit('home1')">Home</button>
        </nav>
      </div>
    </header> -->

    <router-view></router-view>
  </div>
</template>
