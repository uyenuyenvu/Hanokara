<script>
import {mapMutations} from "vuex";

export default {
  name: 'ItemMiddleMenu',
  props: ['urlImg', 'text'],
  mounted() {
    window.addEventListener('beforeunload', this.resetAnimation);
  },
  methods: {
    ...mapMutations(['UPDATE_BREADCRUMBS']),
    resetAnimation() {
      // ここでアニメーションに関連するDOM要素を取得してスタイルをリセットします
      const blockRadius = this.$refs.blockRadius;
      if (blockRadius) {
        blockRadius.style.transform = 'none';
        blockRadius.style.boxShadow = '5.79px 5.79px 5.79px rgba(0, 0, 0, 0.3215686275)';
      }
    }
  },
  Destroy() {
    window.removeEventListener('beforeunload', this.resetAnimation);
  }
}
</script>

<template>
  <div :class="urlImg ? 'block-radius' : 'block-radius feature'">
    <img class="imageStyle1" :src="urlImg" v-if="urlImg">
    <img class="imageWaring" src="@/assets/images/warning.svg" v-else>
    <div v-if="!urlImg" class="textFeature">準備中…</div>
    <div class="blockTitleInline"></div>
    <div class="title-block-radius">
      {{text}}
    </div>
  </div>
</template>

<style scoped lang="scss">
.imageWaring{
  width: 17%;
  object-fit: contain;
  position: absolute;
  top: 25%;
  left: 47%;
  transform: translateY(-50%) translateX(-50%);
}
.textFeature{
  font-size: 32px;
  width: max-content;
  color: white;
  font-weight: bold;
  position: absolute;
  top: 48%;
  left: 53%;
  transform: translateY(-50%) translateX(-50%);
}
.imageStyle1{
  width: 100%;
  border-radius: 11px;
  position: absolute;
  height: 100%;
  object-fit: cover;
}
.blockTitleInline{
  position: absolute;
  width: calc(100% - 27px);
  height: calc(100% - 24px);
  border: 6px solid rgba(255, 255, 255, 0.8196078431);
  top: 16.5px;
  left: 16.5px;
}
.block-radius {
  position: relative;
  background-color: #F992AF;
  border-radius: 15px;
  width: calc(100% - 10px);
  box-shadow: 5.79px 5.79px 5.79px rgba(0, 0, 0, 0.3215686275);
  cursor: pointer;
  padding-bottom: calc(100% - 42px);
  margin-bottom: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* アニメーション効果を追加 */

  &:hover {
    transform: translate(4px, 4px); /* ホバー時に右下に4px移動 */
    box-shadow: 1.79px 1.79px 5.79px rgba(0, 0, 0, 0.3215686275); /* 影を調整 */
  }

  &.feature {
    box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.3215686275);
    border-radius: 9px;
    cursor: unset;

    &:hover {
      transform: none; /* フィーチャーされた要素は動かない */
      box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.3215686275); /* 影を元に戻す */
    }
  }
  .title-block-radius{
  position: absolute;
  width: calc(80% - 16.5px);
  background: rgba(255, 255, 255, 0.8196078431);
  font-size: 20px;
  left: 16.5px;
  bottom: 28px;
  font-weight: bold;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center; /* 水平方向の中央揃えを追加 */
  color: #000000;
  }
}
@media only screen and (max-width: 600px) {
  .textFeature{
    font-size: 1.4rem;
    padding-bottom: 10px;
  }
  .blockTitleInline {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border: 5px solid rgba(255, 255, 255, 0.8196078431);
    top: 10px;
    left: 10px;
  }
  .block-radius{
    cursor: pointer;
    width: calc(100% - 7px);
    padding-bottom: calc(100% - 10px);
    margin-bottom: 26px;
    .title-block-radius{
      font-size: 14px;
      width: calc(80% - 9px);
      left: 10px;
      bottom: 21px;
      height: 40px;
      padding-left: 10px;
    }
  }
}
</style>
