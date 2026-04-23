<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import FooterView from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <RouterView />
    <FooterView />
  </div>
</template>