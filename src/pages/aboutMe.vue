<template>
  <div>
    <layout>
      <div class="wrapper">
        <router-link to="/" class="navigator" title="Home page">
          <div class="back">
            <i class="fas fa-angle-double-left fa"></i>
            <span class="home-btn">  Home</span>
          </div>
        </router-link>
        <div class="abt-me-wrapper">
          <h1 class="abt-me-heading has-text-centered has-text-left-desktop is-size-1">Who Am I?</h1>
          <div class="abt-me-body">
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
          <div class="launchpad">
            <h3 class="center">My Launchpad</h3>
            <div class="root-launch">
              <launch-pad :theme="this.theme"></launch-pad>
            </div>
          </div>
          <div class="question-mark" @click="switchTheme">?</div>
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
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300);
.abt-me-heading {
  color: var(--font-color);
}
.borders {
  border: 1px solid black;
}
.center {
  text-align: center;
}
.abt-me-body {
  margin-top: 2%;
  margin-left: 10%;
  font-size: 24px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--font-color);
}
.wrapper {
  width: 100%;
  height: 100%;
}
.back {
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 20px;
  font-size: 20px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.navigator {
  text-decoration: none;
  color: inherit;
  color: var(--font-color);
}
.abt-me-wrapper {
  margin-left: 10%;
  margin-top: 5%;
  margin-right: 10%;
  line-height: 2.2em;
}
.launchpad {
  margin-top: 7%;
  width: 75%;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--font-color);
}
.root-launch {
  background-color: var(--secondary-color);
}

.question-mark {
  position: fixed;
  right: 10%;
  top: 40%;
  font-size: 500px;
  cursor: pointer;
  color: var(--secondary-color);

  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 3s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/** Ipad and tablets */
@media (min-width: 481px) and (max-width: 1024px) {
  .launchpad {
    margin-top: 10%;
    margin-left: 10%;
    font-size: 30px;
  }
  .abt-me-wrapper {
    margin-top: 10%;
    margin-right: 5%;
    line-height: 2.2em;
  }
  .abt-me-body {
    margin-top: 5%;
    font-size: 25px;
  }

  .back {
    font-size: 30px;
  }

  .question-mark {
    display: none;
  }
}

/** Mobile */
@media (min-width: 320px) and (max-width: 480px) {
  .abt-me-body {
    margin-left: 5%;
    font-size: 16px;
  }
  .back {
    font-size: 16px;
  }
  .abt-me-wrapper {
    margin-left: 5%;
    margin-right: 5%;
    line-height: 1.6em;
    margin-top: 6%;
  }

  .launchpad {
    width: 100%;
    margin-top: 5%;
    margin-bottom: 30px;
  }

  .question-mark {
    display: none;
  }
  .abt-me-body {
    margin-top: 5%;
  }
}
</style>