<script setup>

</script>

<template>
<div class="footerWrap">
  <p class="listMenu">
    <span class="itemMenu">
      <a href="/store-search">
        お店をさがす
      </a>
    </span>
    <span class="bulkhead">
      |
    </span>
    <span class="itemMenu">
      <a href="/cast-search">
        女の子をさがす
      </a>
    </span>
    <span class="bulkhead">
      |
    </span>
    <span class="itemMenu">
      <a href="/discount">
        割引情報
      </a>
    </span>
    <br class="mb">
    <span class="bulkhead pc">
      |
    </span>
    <span class="itemMenu">
      <a href="/contact">
        お問い合わせ
      </a>
    </span>
    <span class="bulkhead">
      |
    </span>
    <span class="itemMenu">
      <a href="/privacy-policy">
        プライバシーポリシー
      </a>
    </span>
    <span class="bulkhead">
      |
    </span>
    <span class="itemMenu">
      <a href="/publishJp">
        掲載について
      </a>
    </span>
  </p>
  <div class="textFooter">
    ※当サイトは20歳未満の方の閲覧を固くお断りいたします。<br class="mb">また、20歳未満の日本人、及び18歳未満のベトナム人の飲酒は法律で禁じられています。
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
  padding: 25px 251px;
  .listMenu{
    margin-bottom: 40px;
    text-align: center;
    .itemMenu{
      a{
        color: white;
        font-size: 14.25px;
        font-weight: bold;
        text-decoration: none;
      }
      :hover{
        text-decoration: underline;
        text-decoration-color: white;
      }
    }
    .bulkhead{
      font-weight: bold;
      font-size: 20px;
      color: white;
      margin: 0 11px;
    }
  }
  .textFooter{
    text-align: center;
    color: white;
    margin-bottom: 14px;
    font-size: 9.98px;
    font-weight: bold;
  }
}
.mb{
  display: none;
}
@media only screen and (max-width: 600px) {
  .mb{
    display: block;
  }
  .pc{
    display: none;
  }
  .footerWrap{
    padding: 3px 0;
    text-align: center;
    .listMenu{
      line-height: 20px;
      margin-bottom: 10px;
      .itemMenu{
        a{
          font-size: 9px;
          text-decoration: none;
         &:hover{
            text-decoration: underline;
          }
        }
      }
      .bulkhead{
        font-size: 9px;
      }
    }
    .textFooter{
      font-size: 6.5px;
      padding-right: 0;
      margin-bottom: 4px;
    }
  }
}
</style>
