<script setup lang="ts">
const openNewTabs = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (!tabs || tabs.length === 0) {
      return console.error('タブがありません');
    }
    // 現在アクティブなタブのインデックスを取得
    let currentIndex = tabs[0].index;

    // アクティブなタブの左に新しいタブを開く
    chrome.tabs.create({
      url: '/yakuyoke/index.html',
      index: currentIndex,
      active: false,
    });
    chrome.tabs.create({
      url: '/kaiun/index.html',
      index: currentIndex + 2,
      active: false,
    });
  });
};
</script>

<template>
  <div class="souken">
    <h1 class="title">⛩ 創建 ⛩</h1>
    <h2 class="subTitle">This App is Very Very Happiness</h2>

    <button @click="openNewTabs()">
      <div class="buttonbg"></div>
      <div class="icon-image">
        <img src="/jinjya.png" alt="" />
      </div>
      <div class="buttonText">Click!</div>
    </button>
    <div class="app-text">
      <h3>こんなお悩みに！</h3>
      <ul>
        <li>今日の出目がなんだか悪い。このままでは死ぬ</li>
        <li>ここでクリティカルを出さないと全滅</li>
        <li>出目を洗っても洗ってもファンブルしか出ない</li>
      </ul>
      <div class="note">※効果には個人差があります</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.souken {
  width: 300px;
  padding: 18px 16px;
  background-color: #242424;
}
.title {
  font-size: 24px;
}
.subTitle {
  margin-bottom: 16px;
  background: linear-gradient(
    45deg,
    rgba(252, 255, 0, 1) 0%,
    rgba(234, 190, 16, 1) 20%,
    rgba(234, 16, 16, 1) 40%,
    rgba(200, 62, 241, 1) 60%,
    rgba(0, 63, 222, 1) 80%,
    rgba(90, 243, 155, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 14px;
  color: transparent;
  font-style: italic;
}

button {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
  transition: all 0.1s ease-in;
  &:hover {
    transition: all 0.1s ease-in;
    background: rgba(234, 190, 16, 1);
  }
}

.buttonText {
  position: relative;
  font-size: 18px;
  font-weight: 600;
  color: rgb(199, 0, 0);
}

.buttonbg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  width: 100%;
  height: 100%;
  background-image: repeating-conic-gradient(
    transparent,
    transparent 15deg,
    #fff 15deg 35deg
  );
  opacity: 0.4;
}
.icon-image {
  position: relative;
  width: 100px;
  height: auto;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.app-text {
  margin-top: 16px;
  text-align: left;
  font-size: 12px;
  h3 {
    text-align: center;
  }
  ul {
    padding-inline-start: 10px;

    li {
      line-height: 1.6;
    }
  }

  .note {
    color: rgb(199, 0, 0);
    text-align: center;
  }
}
</style>
