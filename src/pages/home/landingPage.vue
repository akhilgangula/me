<template>
  <div>
    <layout>
      <div class="wrapper">
        <!--div class="logo">AG</div-->
        <!-- Header section-->
        <home-header></home-header>

        <!-- Main section -->
        <main>
          <div class="is-size-1-mobile">
            <div class="columns is-gapless is-mobile is-multiline has-text-left landing-title">
              <div class="column is-full-mobile is-narrow">
                <span
                  @click="switchTheme"
                  class="theme-toggler is-italic has-text-weight-semibold"
                  title="switch theme"
                >Namaste,</span>
              </div>
              <div class="column is-full-mobile is-narrow iam">
                <router-link to="/iam" class="navigator" title="Who am I?">I am</router-link>
              </div>
              <div>
                <router-link to="/skillSet" class="navigator" title="Skillset">Akhil Gangula</router-link>
              </div>
            </div>
          </div>
          <div class="landing-caption is-size-5-desktop">
            <a
              href="mailto:akhilreddy.gangula@outlook.com"
              class="mailid"
            >AKHILREDDY.GANGULA@OUTLOOK.COM</a>
          </div>
        </main>
        <!-- Footer Section-->
      </div>
      <home-footer></home-footer>
    </layout>
  </div>
</template>

<script>
import Layout from "@/components/layout";
import "@fortawesome/fontawesome-free";
import HomeHeader from "./header";
import HomeFooter from "./footer";
export default {
  components: {
    Layout,
    HomeHeader,
    HomeFooter
  },
  methods: {
    switchTheme: function() {
      if (document.documentElement.getAttribute("data-theme") !== "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Faustina:ital,wght@1,500&display=swap");
.wrapper {
  width: 100%;
  height: 100%;
  font-family: "Faustina", serif;
  margin: 100px;
}
main {
  position: absolute;
  bottom: 25%;
}
a {
  color: var(--font-color);
}
a:hover {
  color: var(--font-color);
}
.theme-toggler {
  color: var(--secondary-color);
  cursor: pointer;
}

/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  .landing-title {
    font-size: 160px;
    width: 80%;
    line-height: 1em;
  }

  .column {
    margin-left: 50px;
  }
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  .landing-title {
    font-size: 130px;
    width: 70%;
    line-height: 1em;
  }

  .column {
    margin-left: 30px;
  }
}
/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  .wrapper {
    margin: 50px;
  }

  .landing-title {
    line-height: 1.2em;
    font-size: 2em;
  }

  .landing-caption {
    font-size: 1.5em;
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

@media (min-width: 481px) and (max-width: 767px) {
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .wrapper {
    margin: 30px;
  }
  .landing-title {
    line-height: 1.2em;
  }
  .columns.is-gapless:not(:last-child) {
    margin-bottom: 0;
  }

  .landing-title {
    font-size: 130px;
    width: 70%;
    line-height: 1em;
  }

  .column {
    margin-left: 30px;
  }
}
</style>