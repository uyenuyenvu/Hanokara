<script setup>

</script>

<template>
<div class="footerWrap">
  <div class="listMenu">
    <div class="itemMenu">
      <a href="">
        お店をさがす
      </a>
    </div>
    <div class="bulkhead">
      |
    </div>
    <div class="itemMenu">
      <a href="">
        女の子をさがす
      </a>
    </div>
    <div class="bulkhead">
      |
    </div>
    <div class="itemMenu">
      <a href="">
        割引情報
      </a>
    </div>
    <div class="bulkhead">
      |
    </div>
    <div class="itemMenu">
      <a href="">
        お問い合わせ
      </a>
    </div>
    <div class="bulkhead">
      |
    </div>
    <div class="itemMenu">
      <a href="">
        プライバシーポリシー
      </a>
    </div>
    <div class="bulkhead">
      |
    </div>
    <div class="itemMenu">
      <a href="">
        掲載について
      </a>
    </div>
  </div>
  <div class="textFooter">
    ※当サイトは20歳未満の方の閲覧を固くお断りいたします。また、20歳未満の日本人、及び18歳未満のベトナム人の飲酒は法律で禁じられています。
  </div>

  <div class="textFooter">
    ※写真等の無断転移を固く禁じます。Copyright © 2023 ベトカラ. All rights reserved
  </div>
</div>
</template>
<style scoped lang="scss">
.footerWrap{
  width: 100%;
  background-color: #181818;
  padding: 20px;
  .listMenu{
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    .itemMenu{
      a{
        color: white;
        font-size: 20px;
        font-weight: bold;
        text-decoration: underline;
        text-decoration-color: white;
      }
    }
    .bulkhead{
      font-weight: bold;
      font-size: 20px;
      color: white;
      margin: 0 20px;
    }
  }
  .textFooter{
    text-align: center;
    color: white;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
