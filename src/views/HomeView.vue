<template>
  <nav class="flex container justify-start mx-auto items-center">
      <div class="text-xl mx-2"><router-link to="/">首頁</router-link></div>
      <div class="text-xl mx-2"><router-link to="/products">前台產品列表</router-link></div>
      <div class="text-xl mx-2"><router-link to="/cart">前台購物車</router-link></div>
      <div class="text-xl mx-2"><router-link to="/admin/product">後台管理</router-link></div>
  </nav>
  <router-view/>
</template>
