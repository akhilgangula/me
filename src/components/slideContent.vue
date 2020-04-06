<template>

  <div class='slide-root'>
    <h3>{{title}}</h3>
    <div class="body">
        <div class="carousel-img">
            
        </div>
        <div class="carousel-data">
            <p>
                {{description}}
            </p>
        </div>
    </div>
  </div>

</template>
<script>
export default {
  props: ["title","description"],
  components: {

  }
};
</script>
<style scoped>
.slide-root {
    margin: 5%;
}
</style>