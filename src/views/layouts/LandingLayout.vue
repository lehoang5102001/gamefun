<template>
  <div class="wrapper">
    <Home />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script>
import Home from '../pages/Home.vue';
export default {
  components: {
    Home
  }
}
</script>