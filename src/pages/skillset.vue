<template>
  <layout>
    <div class="root">
      <div class="navigation is-size-5">
        <router-link to="/" class="navigator" title="Home page">
          <div class="back">
            <i class="fas fa-angle-double-left fa"></i>
            <span class="home-btn"> Home</span>
          </div>
        </router-link>
      </div>
      <section class="hero is-hidden-mobile vertical-space is-white is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-1">Skill Set</h1>
          </div>
        </div>
      </section>

      <!--Frontend-->
      <div class="wrapper vertical-space">
        <div class="container">
          <div class="columns has-text-centered is-marginless">
            <div class="column has-text-left-desktop is-size-3">Frontend</div>
          </div>
          <div class="level is-marginless">
            <skill logo="fa-html5" skillName="HTML" rating="5"></skill>
            <skill logo="fa-css3-alt" skillName="CSS" rating="3"></skill>
            <skill logo="fa-js" skillName="JS" rating="4"></skill>
          </div>

          <div class="level is-marginless">
            <skill logo="fa-vuejs" skillName="Vue JS" rating="3"></skill>
            <skill logo="fa-react" skillName="React JS" rating="4"></skill>
            <skill logo="fa-bootstrap" skillName="Bootstrap" rating="4"></skill>
          </div>

          <!--Backend-->
          <div class="columns is-marginless has-text-centered">
            <div class="column has-text-left-desktop is-size-3">Backend</div>
          </div>
          <div class="level is-marginless">
            <skill logo="fa-java" skillName="Java" rating="5"></skill>
            <skill logo="fa-node-js" skillName="Node JS" rating="4"></skill>
            <skill logo="fa-python" skillName="Python" rating="3"></skill>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>
<script>
import Layout from "@/components/layout";
import Skill from "@/components/skill";
export default {
  components: {
    Layout,
    Skill
  }
};
</script>
<style scoped>
.level-item:hover {
  color: var(--secondary-color);
}
.vertical-space {
  margin-top: 5%;
}

.root {
  color: var(--font-color);
  height: 100%;
  width: 100%;
  position: relative;
  overflow: scroll;
}

.navigator {
  text-decoration: none;
  color: inherit;
  color: var(--font-color);
}

.back {
  margin: 15px;
  font-size: 20px;
}
.title {
  font-size: 18px;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .navigation {
    margin-top: 30px;
    margin-left: 30px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .wrapper {
    margin-left: 30px;
    margin-right: 60px;
  }
}
</style>
