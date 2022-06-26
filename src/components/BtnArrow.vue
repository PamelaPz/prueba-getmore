<template>
  <div class="btn-arrow" :class="color">
    <p class="btn-arrow-text">
      {{ msg }}
      <span class="btn-arrow-icon" :class="icon">
        <img src="../assets/imgs/flechaBtn.svg" alt="" />
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    color: String,
    icon: String,
  },
};
</script>
