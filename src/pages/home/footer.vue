<template>
  <div class="landing-footer is-size-6-desktop ">
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <div>
          <a>
            <i class="fab fa-linkedin-in fa-2x "></i>
          </a>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <a>
            <i class="fab fa-telegram-plane fa-2x"></i>
          </a>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <a>
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <a>
            <i class="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <a>
            <i class="fab fa-facebook-f fa-2x"></i>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
a {
  color: var(--font-color);
}
.landing-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: 30px;
}
@media (min-width: 1024px) { 
  .landing-footer {
    width: 30%;
    margin: 100px;
  }
}

</style>