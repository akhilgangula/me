<template>
  <div>
    <layout>
      <div class="wrapper">
        <div class="back is-size-5">
          <router-link to="/" class="navigator" title="Home page">
            <i class="fas fa-angle-double-left fa"></i>
            <span class="home-btn">  Home</span>
          </router-link>
          <timeline></timeline>
          <div></div>
        </div>
      </div>
    </layout>
  </div>
</template>
<script>
import Layout from "@/components/layout";
import Timeline from "@/components/timeline.vue";
export default {
  data: function() {
    return {
      show: false
    };
  },
  components: {
    Layout,
    Timeline
  }
};
</script>
<style scoped>
.terminal-text {
  color: var(--bg-color);
  margin-left: 45%;
}
.wrapper {
  width: 100%;
  height: 100%;
}
.back {
  margin-top: 30px;
  margin-left: 30px;
  font-size: 20px;
}
.navigator {
  text-decoration: none;
  color: inherit;
  color: var(--font-color);
}



</style>