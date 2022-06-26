<template>
  <ssr-carousel
    show-arrows
    show-dots
    paginate-by-slide
    :slides-per-page="cards"
    :gutter="padding"
  >
    <slide :index="1"
      ><div class="card">
        <div class="card-circle"><span>1</span></div>
        <img src="../assets/imgs/group-10.png" alt="product" />
      </div>
    </slide>
    <slide :index="2"
      ><div class="card">
        <div class="card-circle"><span>2</span></div>
        <img src="../assets/imgs/group-10.png" alt="product" />
      </div>
    </slide>
    <slide :index="3"
      ><div class="card">
        <div class="card-circle"><span>3</span></div>
        <img src="../assets/imgs/group-10.png" alt="product" />
      </div>
    </slide>
    <slide :index="4"
      ><div class="card">
        <div class="card-circle"><span>4</span></div>
        <img src="../assets/imgs/group-10.png" alt="product" />
      </div>
    </slide>
    <slide :index="5"
      ><div class="card">
        <div class="card-circle"><span>5</span></div>
        <img src="../assets/imgs/group-10.png" alt="product" />
      </div>
    </slide>
    <slide :index="6"
      ><div class="card">
        <div class="card-circle"><span>6</span></div>
        <img src="../assets/imgs/group-10.png" alt="product" />
      </div>
    </slide>
  </ssr-carousel>
</template>

<script>
import SsrCarousel from "vue-ssr-carousel";

export default {
  name: "w-slider",
  components: {
    SsrCarousel,
  },
  data() {
    return {
      width: document.documentElement.clientWidth,
      cards: 1,
      padding: 0,
    };
  },
  mounted() {
    window.addEventListener("resize", this.getDimensions);
  },
  unmounted() {
    window.removeEventListener("resize", this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      const tablet = window.matchMedia("(min-width: 1024px)");
      const laptop = window.matchMedia("(min-width: 1440px)");

      if (laptop || this.width >= 1400) {
        this.cards = 3;
        this.padding = 60;
      } else if (tablet || (this.width >= 1024 && this.width <= 1400)) {
        this.cards = 2;
        this.padding = 60;
      } else if (this.width <= 1023) {
        this.cards = 1;
        this.padding = 0;
      }
    },
  },
};
</script>

<style>
@import "vue-ssr-carousel/index.css";
</style>
