<template>
  <div :class="[classMode, activeModalMenu ? 'active bg-green' : '']">
    <nav class="wp-nav">
      <div class="logo" v-if="classMode != 'footer-nav'">
        <img src="../assets/imgs/logo.png" alt="" />
      </div>
      <ul :class="color">
        <li v-if="classMode != 'footer-nav'" id="mobile">
          <button
            class="menu_bars"
            :class="activeModalMenu ? 'active' : ''"
            @click="activeMobile()"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </li>
        <div class="menu_show">
          <li class="select"><a href="/">Inicio</a></li>
          <li><a href="/">Acerca de nosotros</a></li>
          <li><a href="/">Historia</a></li>
          <li><a href="/">Contacto</a></li>
          <div class="language" v-if="classMode != 'footer-nav'">
            <a :class="active ? 'active' : ''" href="">ES</a>
            <a href="">EN</a>
          </div>
        </div>
      </ul>
    </nav>
    <div
      class="menuMobile"
      :style="activeModalMenu ? 'opacity: 1; z-index: 2' : 'opacity: 0'"
    >
      <nav class="menu">
        <ul>
          <li><a class="select" href="/">Inicio</a></li>
          <li><a href="/">Acerca de nosotros</a></li>
          <li><a href="/">Historia</a></li>
          <li><a href="/">Contacto</a></li>
          <li class="language">
            <a :class="active ? 'active' : ''" href="">ES</a>
            <a href="">EN</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "w-navbar",
  props: {
    color: String,
    classMode: String,
  },
  data() {
    return {
      active: true,
      activeModalMenu: false,
    };
  },
  methods: {
    activeMobile() {
      this.activeModalMenu = !this.activeModalMenu;

      const body = document.querySelector("body");
      if (this.activeModalMenu) {
        body.classList.add("no-scroll");
      } else {
        body.classList.remove("no-scroll");
      }
    },
  },
};
</script>
