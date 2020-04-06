<template>
  <layout>
    <div class="root">
      <div class="navigation">
        <router-link to="/" class="navigator" title="Home page">
          <div class="back">
            <i class="fas fa-angle-double-left fa"></i>
            <span class="home-btn">Home</span>
          </div>
        </router-link>
      </div>
      <section class="hero vertical-space is-white is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-1">Skill Set</h1>
          </div>
        </div>
      </section>

      <div class="wrapper vertical-space">
        <div class="container">
          <div class="columns has-text-centered">
            <div class="column has-text-left-desktop is-size-3 ">Frontend</div>
          </div>
          <div class="level">
            <div class="level-item has-text-centered">
              <div class="columns">
                <div class="column">
                  <i class="fab fa-html5 fa-5x"></i>
                </div>
                <div class="column is-two-thirds">
                  <p class="heading">HTML</p>
                  <p class="title">
                    <rating rating="5"></rating>
                  </p>
                </div>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div class="columns">
                <div class="column">
                  <i class="fab fa-css3-alt fa-5x"></i>
                </div>
                <div class="column is-two-thirds">
                  <p class="heading">CSS</p>
                  <p class="title">
                    <rating rating="3"></rating>
                  </p>
                </div>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div class="columns">
                <div class="column">
                  <i class="fab fa-js fa-5x"></i>
                </div>
                <div class="column is-two-thirds">
                  <p class="heading">JS</p>
                  <p class="title">
                    <rating rating="4"></rating>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="level">
            <div class="level-item has-text-centered">
              <div class="columns">
                <div class="column">
                  <i class="fab fa-vuejs fa-5x"></i>
                </div>
                <div class="column is-two-thirds">
                  <p class="heading">Vue JS</p>
                  <p class="title">
                    <rating rating="3"></rating>
                  </p>
                </div>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div class="columns">
                <div class="column">
                  <i class="fab fa-react fa-5x"></i>
                </div>
                <div class="column is-two-thirds">
                  <p class="heading">React JS</p>
                  <p class="title">
                    <rating rating="4"></rating>
                  </p>
                </div>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div class="columns">
                <div class="column">
                  <i class="fab fa-bootstrap fa-5x"></i>
                </div>
                <div class="column is-two-thirds">
                  <p class="heading">Bootstrap</p>
                  <p class="title">
                    <rating rating="4"></rating>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="columns has-text-centered">
            <div class="column has-text-left-desktop is-size-3 ">Backend</div>
          </div>
          <div class="level">
            <div class="level-item has-text-centered">
              <div class="columns">
                <div class="column">
                  <i class="fab fa-java fa-5x"></i>
                </div>
                <div class="column is-two-thirds">
                  <p class="heading">Java</p>
                  <p class="title">
                    <rating rating="5"></rating>
                  </p>
                </div>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div class="columns">
                <div class="column">
                  <i class="fab fa-node-js fa-5x"></i>
                </div>
                <div class="column is-two-thirds">
                  <p class="heading">Node JS</p>
                  <p class="title">
                    <rating rating="4"></rating>
                  </p>
                </div>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div class="columns">
                <div class="column">
                  <i class="fab fa-python fa-5x"></i>
                </div>
                <div class="column is-two-thirds">
                  <p class="heading">Pyhton</p>
                  <p class="title">
                    <rating rating="3"></rating>
                  </p>
                </div>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div class="columns">
                <div class="column">
                  <i class="fab fa-php fa-5x"></i>
                </div>
                <div class="column is-two-thirds">
                  <p class="heading">PHP</p>
                  <p class="title">
                    <rating rating="3"></rating>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>
<script>
import Layout from "@/components/layout";
import Rating from "@/components/rating";
export default {
  components: {
    Layout,
    Rating
  }
};
</script>
<style scoped>
.level-item {
    margin-bottom: 3%;
}
.level-item:hover {
    color: var(--secondary-color);
}

.vertical-space {
  margin-top: 5%;
}
.heading {
  font-size: 22px;
}
.root {
  color: var(--font-color);
  height: 100%;
  width: 100%;
  position: relative;
  overflow: scroll;
}
.skill-card {
  width: 75%;
  margin-left: 15%;
}
.navigator {
  text-decoration: none;
  color: inherit;
  color: var(--font-color);
}

.back {
  margin-top: 30px;
  margin-left: 30px;
  font-size: 20px;
}
.title {
  font-size: 18px;
}
</style>
