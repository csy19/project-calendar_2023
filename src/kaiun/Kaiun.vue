<script setup>
import PageLayout from '@/components/layout/PageLayout.vue';
const props = {
  titleImagePath: '/img01.png',
  titleImageAlt: '究極勝利神社',
  backgroundImagePath: '/shrine-torii.png',
  backgroundImageAlt: '神社の画像',
};
</script>

<template>
  <PageLayout v-bind="props" />
</template>

<style lang="scss" scoped></style>
