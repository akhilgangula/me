<template>
  <nav class="level">
    <div class="level-item">
      <div class="left-content">
        <router-link to="/career" title="Career Page">
          <h4
            class="has-text-weight-medium is-size-5-desktop is-size-4-widescreen"
          >FULL STACK DEVELOPER</h4>
        </router-link>
      </div>
    </div>

    <div class="level-item">
      <div class="landing-download is-size-5-desktop is-size-4-widescreen">
        <label for="save" v-show="show">Resumé: </label>
        <a @mouseover="show=true" @mouseout="show=false">
          <i id="save" class="fas fa-cloud-download-alt fa-2x"></i>
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data: function() {
    return {
      show: false
    };
  }
};
</script>
<style scoped>
a {
  color: var(--font-color);
}

a:hover {
  color: var(--font-color);
}

.landing-download {
  right: 100px;
  top: 50px;
  position: absolute;
  color: var(--font-color);
}
.left-content {
  position: absolute;
  top: 50px;
  left: 70px;
}

/** For full resolution tabs to desktops */

@media (min-width: 768px) and (max-width: 1024px) {
  .landing-download {
    right: 100px;
    position: absolute;
  }
  .left-content {
    position: absolute;
    left: 30px;
  }
  .level {
    font-size: 1.5em;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .landing-download {
    display: none;
  }
  .left-content {
    position: absolute;
    left: 30px;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .landing-download {
    right: 30px;
    top: 30px;
    position: absolute;
  }
  .left-content {
    position: absolute;
    left: 30px;
    top: 30px;
  }
  .level {
    font-size: 1.5em;
  }
}
</style>