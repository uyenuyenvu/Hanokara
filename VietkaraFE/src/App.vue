<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>
  <div class="mainWrap">
    <RouterView />
  </div>
</template>

<style scoped>
  .mainWrap{
    /*max-width: 1440px;*/
    background: white;
  }
</style>

<style>
  .mainWrap{
    /*max-width: 1440px;*/
    overflow-x: hidden;
  }
titleBlock {
  background-color: #2D2427;
  font-size: 15.01px;
  font-weight: bold;
  color: white;
  line-height: 1.5; /* テキストの行の高さを適切な値に設定 */
  height: 40px; /* コンテナの高さを設定（必要に応じて調整） */
  padding-left: 34px; /* 左のパディングは特定の値に */
  margin-bottom: 9px;
  margin-top: 20px;
  display: flex; /* Flexbox を使用 */
  align-items: center; /* 垂直方向の中央揃えを実現 */
  justify-content: flex-start; /* 水平方向の配置を開始位置に */
}
@media only screen and (max-width: 600px) {
  .titleBlock{
    display: flex;
    justify-content: center;
    font-size: 12px;
    padding: 5px 0 6px 0px;
    margin: 0 auto;
  }
}
</style>
