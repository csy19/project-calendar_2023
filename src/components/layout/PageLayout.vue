<script setup lang="ts">
defineProps<{
  titleImagePath: string;
  titleImageAlt: string;
  backgroundImagePath: string;
  backgroundImageAlt: string;
}>();
</script>

<template>
  <main>
    <div class="wrap">
      <h1 class="title">
        <div class="titleImage">
          <img :src="$props.titleImagePath" :alt="$props.titleImageAlt" />
        </div>
      </h1>
      <div class="backgroundImage">
        <img
          :src="$props.backgroundImagePath"
          :alt="$props.backgroundImageAlt"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@keyframes rotateBg {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
.wrap {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  background: rgb(90, 243, 155);
  background: radial-gradient(
    circle,
    rgba(252, 255, 0, 1) 0%,
    rgba(234, 190, 16, 1) 20%,
    rgba(234, 16, 16, 1) 40%,
    rgba(200, 62, 241, 1) 60%,
    rgba(0, 63, 222, 1) 80%,
    rgba(90, 243, 155, 1) 100%
  );
  background-repeat: no-repeat;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    width: 200%;
    height: 200%;
    background-image: repeating-conic-gradient(
      transparent,
      transparent 15deg,
      #fff 15deg 35deg
    );
    opacity: 0.4;
    animation: rotateBg 5s linear infinite;
  }
}

.title {
  position: relative;
  z-index: 10;
}

.titleImage {
  margin: 0 auto;
  width: calc(1148 / 1440 * 100%);
  img {
    width: 100%;
    height: 100%;
  }
}

.backgroundImage {
  position: absolute;
  z-index: 3;
}
</style>
