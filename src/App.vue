<template>
  <div id="app">
   <fade-transition :duration="600" :delay="100">
      <router-view></router-view>
   </fade-transition>
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";
export default {
  name: "App",
  components: {
    FadeTransition
  }
};
</script>

<style>
#app {
  transition: color .1s ease;
}
:root {
  --primary-color: #302ae6;
  --secondary-color: #a4a5aace;
  --font-color: #424242;
  --bg-color: #fff;
  --heading-color: #292922;
  --bg-color-secondary: rgb(35, 79, 188);
  --terminal: rgb(89, 93, 129);
}
[data-theme="dark"] {
  --primary-color: #9a97f3;
  --secondary-color: #4e4f53;
  --font-color: white;
  --bg-color: rgb(14, 15, 15);
  --heading-color: #818cab;
  --bg-color-secondary: rgb(182, 182, 182);
  --terminal: rgb(255, 255, 255);
}
</style>
