<template>
  <div>
    <layout>
      <div class="wrapper trans">
        <!--div class="logo">AG</div-->
        <div class="landing-heading">
          <router-link to="/career" class="navigator" title="Career Page">
            <h4 class="has-text-weight-medium">FULL STACK DEVELOPER</h4>
          </router-link>
        </div>
        <div class="landing-title">
          <div class="title">
            <span @click="switchTheme" class="theme-toggler" title="switch theme">Namaste</span>
            <span class="comma">,</span>
            <br class="break-mobile" />
            <router-link to="/aboutMe" class="navigator" title="Who am I?"> I am 
            </router-link>
            <br class="break-desktop" />
            <router-link to="/skillSet" class="navigator" title="Skillset">Akhil Gangula</router-link>
          </div>
          <div class="landing-caption">
            <a
              href="mailto:akhilreddy.gangula@outlook.com"
              class="mailid"
            >AKHILREDDY.GANGULA@OUTLOOK.COM</a>
          </div>
        </div>
        <div class="landing-footer">
          <ul class="icons">
            <li>
              <a>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fab fa-telegram-plane fa-2x"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fab fa-github fa-2x"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fab fa-twitter fa-2x"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fab fa-facebook-f fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="landing-download">
          <label for="save" class="resume-text" v-show="show">Resumé:</label>
          <a @mouseover="show=true" @mouseout="show=false">
            <i id="save" class="fas fa-cloud-download-alt fa-2x"></i>
          </a>
        </div>
      </div>
    </layout>
  </div>
</template>

<script>
import Layout from "./../components/layout";
import "@fortawesome/fontawesome-free";
export default {
  data: function() {
    return {
      show: false
    };
  },
  components: {
    Layout
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
.fab {
  color: var(--font-color);
}
.fas {
  color: var(--font-color);
}
.resume-text {
  font-size: 22px;
}
.landing-download {
  position: fixed;
  top: 50px;
  right: 120px;
}
.trans {
  transition: color 1s ease;
}
.icons li {
  list-style-type: none;
  display: inline;
  margin-right: 70px;
  margin-left: 0;
}
.landing-footer {
  margin-left: 120px;
  bottom: 50px;
  position: fixed;
}
.landing-heading {
  margin-left: 120px;
  margin-top: 60px;
  color: var(--font-color);
}
.landing-caption {
  top: 5%;
  position: relative;
  color: var(--font-color);
}
.landing-title {
  margin-left: 120px;
  position: absolute;
  bottom: 30%;
}
.title {
  font: "Fira Sans", serif;
  font-size: 150px;
  line-height: 1em;
  letter-spacing: 0;
  color: var(--font-color);
}

.mailid {
  color: inherit;
  text-decoration: none;
}

.mailid .designation {
  font-weight: bold;
}

.wrapper {
  width: 100%;
  height: 100%;
}

.theme-toggler {
  cursor: pointer;
  color: var(--secondary-color);
  font: italic 1.2em "Fira Sans", serif;
  font-weight: bold;
}

.break-mobile {
  display: none;
}

.navigator {
  text-decoration: none;
  color: inherit;
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  .landing-title {
    margin-left: 100px;
    top: 20%;
  }
  .comma {
    display: none;
  }
  .break-desktop {
    display: block;
  }
  .break-mobile {
    display: block;
  }
  .title {
    font-size: 100px;
    line-height: 1.2;
  }
  .landing-caption {
    top: 1em;
    font-size: 12px;
  }
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .break-desktop {
    display: block;
  }
  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  .break-desktop {
    display: block;
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  
  .landing-heading {
    margin-left: 30px;
    margin-top: 60px;
  }
  .landing-download {
    margin-top: 60px;
    top: 0;
    right: 20px;
  }
  .landing-title {
    margin-left: 30px;
    top: 20%;
  }
  .title {
    margin-top: 15%;
    font-size: 50px;
    line-height: 1.2;
  }
  .comma {
    display: none;
  }
  .break-desktop {
    display: none;
  }
  .break-mobile {
    display: block;
  }
  .landing-caption {
    top: 1em;
    font-size: 12px;
  }
  .icons li {
    margin-right: 30px;
    margin-left: 0;
  }
  .landing-footer {
    margin-left: 20px;
    bottom: 30px;
    position: fixed;
  }
}
</style>