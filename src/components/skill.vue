<template>
<div class="skill">
  <div class=" level-item has-text-centered">
    <div class="columns">
      <div class="column">
        <i class="fab fa-5x" :class=logo></i>
      </div>
      <div class="column is-two-thirds is-paddingless">
        <p class="is-size-4">{{skillName}}</p>
        <p>
          <rating :rating=rating></rating>
        </p>
      </div>
    </div></div>
  </div>
</template>
<script>
import Rating from "@/components/rating";
export default {
    props: ['logo','skillName','rating'],
    components: {
        Rating,
    }
}
</script>
<style scoped>

  .skill {
    margin-bottom: 50px;
  }

</style>

