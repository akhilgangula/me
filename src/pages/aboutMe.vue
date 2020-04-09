<template>
  <div>
    <layout>
      <div class="wrapper ">
        <div class="back is-size-5 is-size-4-desktop is-size-3-widescreen">
          <router-link to="/" title="Home page">
            <i class="fas fa-angle-double-left fa"></i>
            <span class="home-btn"> Home</span>
          </router-link>
        </div>
        <div class="abt-me-wrapper">
          <h1 class="abt-me-heading has-text-centered has-text-left-desktop ">Who Am I?</h1>
          <div class="abt-me-body is-size-5-desktop">
            <p>
              <i class="fas fa-angle-right"></i> A 25 years old Indian guy from Hyderabad, India.
              <br />
              <i class="fas fa-angle-right"></i> Bachelor of Technology degree holder, majored in Computer Science.
              <br />
              <i class="fas fa-angle-right"></i> I make functional and responsive Websites.
              <br />
              <i class="fas fa-angle-right"></i> End to end creative solutions for businesses.
              <br />
            </p>
          </div>
          <div class="btn-launchPad">
            <div class="columns is-hidden-tablet has-text-centered launchpad">
              <router-link to="/launchpad">
                <div class="column"></div>
                <div class="column is-size-5">
                  <i class="fas fa-rocket fa-2x icon"></i>
                  <span class="launchpad-title">Launch Pad</span>
                </div>
              </router-link>
            </div>
          </div>
          <div class="launchPad-carousel">
            <launch-pad :theme="this.theme"></launch-pad>
          </div>
          <div class="question-mark is-hidden-mobile" @click="switchTheme">?</div>
        </div>
      </div>
    </layout>
  </div>
</template>
<script>
import Layout from "@/components/layout.vue";
import LaunchPad from "@/components/launchPad.vue";
export default {
  data: function() {
    return {
      show: false,
      theme: document.documentElement.getAttribute("data-theme")
    };
  },
  components: {
    Layout,
    LaunchPad
  },
  methods: {
    switchTheme: function() {
      if (document.documentElement.getAttribute("data-theme") !== "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        this.theme = "dark";
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        this.theme = "light";
      }
    }
  }
};
</script>
<style scoped>
a {
  color: var(--font-color);
}

.wrapper {
  color: var(--font-color);
}
@media (min-width: 1281px) {
  .wrapper {
    margin: 50px;
  }

  .abt-me-heading {
    font-size: 80px;
  }

  .abt-me-wrapper {
    margin:50px;
  }

  .question-mark {
    font-size: 500px;
    position: absolute;
    right: 50px;
    top:50px;
    line-height: 1;
  }

  .abt-me-body {
    line-height: 2;
  }
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {

  .wrapper {
    margin: 50px;
  }

  .abt-me-heading {
    font-size: 80px;
  }

  .abt-me-wrapper {
    margin:50px;
  }
}
/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

/** Tablets */
@media (min-width: 768px) and (max-width: 1024px) {
  .btn-launchPad {
    display: none;
  }

  .wrapper {
    margin: 50px;
  }

  .abt-me-body {
    font-size: 1.2rem;
    padding: 1rem;
    line-height: 2rem;
  }

}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/
/** Nexus 7 tablet */
@media (min-width: 481px) and (max-width: 767px) {
  .btn-launchPad {
    display: none;
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .wrapper {
    margin: 15px;
  }
  .launchpad {
    bottom: 10px;
    position: relative;
  }
  .fas {
    padding: 5px;
  }
  .icon {
    padding-right: 25px;
    text-align: center;
  }

  .btn-launchPad {
    position: absolute;
    bottom: 10px;

    width: 100%;
    left: 10px;
  }
  .launchPad-carousel {
    display: none;
  }
}
</style>