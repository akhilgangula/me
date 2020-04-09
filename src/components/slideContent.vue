<template>
  <div class="slide-root">
    <div class="wrapper">
      <h3 class="is-size-3">{{title}}</h3>
      <div class="body">
        <div class="carousel-img"></div>
        <div class="carousel-data is-size-5">
          <p>{{description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "description"],
  components: {}
};
</script>
<style scoped>
.wrapper {
  margin-left: 5%;
  
}
.slide-root {
  background: var(--secondary-color);
  margin-left: 5%;
  margin-bottom: 5%;
  height: 100%;
  width: 80%;
  margin-left: 10%;
}
@media (min-width: 1281px) {
}
@media (min-width: 1025px) and (max-width: 1280px) {
}
</style>