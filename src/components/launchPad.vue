<template>
  <div class="root">
    <h3 class="title has-text-centered-desktop">My Launchpad</h3>
    <div class="root-launch">
      <carousel
        id="carousel"
        :perPage="1"
        :paginationActiveColor="nonActive"
        :autoplay="true"
        :autoplayTimeout="3000"
        :autoplayHoverPause="true"
        :loop="true"
      >
        <slide v-for="project in Projects" :key="project.name">
          <slide-content :title="project.name" :description="project.description"></slide-content>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import SlideContent from "@/components/slideContent";
import Projects from "@/assets/projects.json";
export default {
  props: ["theme"],
  data: function() {
    return {
      nonActive: this.theme === "dark" ? "#b6b6b6" : "#424242",
      Projects
    };
  },
  components: {
    Carousel,
    SlideContent,
    Slide
  },
  watch: {
    theme: function() {
      this.nonActive = this.theme === "dark" ? "#b6b6b6" : "#424242";
      return this.theme;
    }
  },

  mounted: function() {
    console.log(Projects);
  }
};
</script>
<style scoped>
.title {
  color: var(--font-color);
}
@media (min-width: 1281px) { 
.root {
  position: absolute;
  bottom: 10px;
}
}
@media (min-width: 1025px) and (max-width: 1280px) {
  
}
@media (min-width: 768px) and (max-width: 1024px) {
  .title {
    text-align: center;
    font-size: 2rem;
    margin-top: 10%;
  }
}
</style>