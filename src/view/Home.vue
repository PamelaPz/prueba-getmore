<template>
  <div class="container">
    <header>
      <navbar color="white" classMode="header-nav" />
      <div class="wp-text">
        <h1>
          Las mejores raquetas para jugar <span class="green">Tennis</span>
        </h1>
        <btnarrow
          msg="ACERCA DE NOSOTROS"
          color="btn-arrow-white"
          icon="btn-arrow-icon-white"
        />
      </div>
      <hr class="line" />
    </header>

    <section class="section-tenis">
      <div class="wp-top">
        <div class="wp-top-width">
          <div class="wp-top-title">
            <span class="subtitle">Tennis</span>
            <h2>Raquetas.<span>Accesorios.</span><span>Pelotas.</span></h2>
          </div>
          <div class="wp-top-text">
            <p class="text">
              Conoce nuestras raquetas y aprende a jugar Tennis cómo un
              profesional.
            </p>
            <btnarrow
              msg="HISTORIA"
              color="btn-arrow-dark"
              icon="btn-arrow-icon-dark"
            />
          </div>
        </div>
      </div>
      <div class="wp-bottom">
        <div class="wp-bottom-text">
          <h2 class="title">Nuestras <span>Raquetas</span></h2>
          <p class="text-info">
            Conoce nuestras raquetas y aprende a jugar Tennis cómo un
            profesional.
          </p>
        </div>
        <div class="wp-bottom-carrusel">
          <Slider />
        </div>
      </div>
    </section>

    <div class="section-bannerFull">
      <img src="../assets/imgs/action-athlete-ball.png" alt="banner" />
    </div>
    <footer class="footer">
      <div>
        <navbar color="black" classMode="footer-nav" />
        <div class="social-list">
          <a href="/"
            ><img src="../assets/imgs/social/icon-linkedin.svg" alt="linkedin"
          /></a>
          <a href="/"><img src="../assets/imgs/social/icon-v.svg" alt="v" /></a>
          <a href="/"
            ><img
              src="../assets/imgs/social/icon-instagram.svg"
              alt="instagram"
          /></a>
          <a href="/"
            ><img src="../assets/imgs/social/icon-twitter.svg" alt="twitter"
          /></a>
          <a href="/"
            ><img src="../assets/imgs/social/icon-facebook.svg" alt="facebook"
          /></a>
        </div>
      </div>
      <div class="footer-logo">
        <a href="/"><img src="../assets/imgs/logo.png" alt="logo" /></a>
      </div>
    </footer>
  </div>
</template>

<script>
import navbar from "../components/NavBar.vue";
import btnarrow from "../components/BtnArrow.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "v-Home",
  components: {
    navbar,
    btnarrow,
    Slider,
  },
  data() {
    return {
      url: 0,
    };
  },
};
</script>
