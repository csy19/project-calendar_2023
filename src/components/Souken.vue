<script setup lang="ts">
const openNewTabs = () => {
  // getCurrentTab().then((tab) => {
  //   console.log(tab.id);
  // });
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // 現在アクティブなタブのインデックスを取得
    let currentIndex = tabs[0].index;

    // アクティブなタブの左に新しいタブを開く
    chrome.tabs.create({
      url: '/yakuyoke',
      index: currentIndex,
      active: false,
    });
    chrome.tabs.create({
      url: '/kaiun',
      index: currentIndex + 2,
      active: false,
    });
  });
};
</script>

<template>
  <div class="souken">
    <h1 class="title">This App is Very Very Happiness</h1>
    <button @click="openNewTabs()">
      <div class="icon-image">
        <img src="/jinjya.png" alt="" />
      </div>
    </button>
    <div class="app-text">
      こんなお悩みに！即効性！<br />
      - 今日の出目がなんだか悪い。このままでは死ぬ<br />
      - ここでクリティカルを出さないと全滅<br />
      - 出目を洗っても洗ってもファンブルしか出ない<br />
      - ※効果には個人差があります
    </div>
  </div>
</template>

<style lang="scss">
.title {
  font-size: 24px;
}
.icon-image {
  width: 100px;
  height: auto;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.app-text {
}
</style>
