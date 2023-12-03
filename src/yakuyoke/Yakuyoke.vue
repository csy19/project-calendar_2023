<script setup>
import PageLayout from '@/components/layout/PageLayout.vue';
const props = {
  titleImagePath: '/img02.png',
  titleImageAlt: '超強運守護神社',
  backgroundImagePath: '/morishio.png',
  backgroundImageAlt: '盛り塩の画像',
};
</script>

<template>
  <PageLayout v-bind="props" />
</template>

<style lang="scss" scoped></style>
