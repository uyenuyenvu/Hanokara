<script setup>

</script>

<template>
  <div class="logoWrap">
    <div class="topText">
      ベトナムのカラオケ・ガールズバー情報サイト
    </div>
    <div class="textBg">
      <img src="@/assets/images/hasu1.png" alt="">
      <div class="title">
        ベトカラ
      </div>
    </div>
    <div class="bottomText">
      Produced by VIETNAM × KARAOKE
    </div>
    <div class="menuMb">
      <img src="@/assets/images/menu.png" alt="">
    </div>
  </div>
  <div class="menuWrap">
    <div class="menuMain">
      <div class="menu">
        <div class="item-menu"><a href="">ホーム</a></div>
        <div class="item-menu item-menu-direction"><a href="">お店をさがす</a></div>
        <div class="item-menu item-menu-direction"><a href="">女の子をさがす</a></div>
        <div class="item-menu item-menu-direction"><a href="">割引情報</a></div>
        <div class="item-menu item-menu-direction"><a href="">お問い合わせ</a></div>
      </div>
    </div>
    <div class="breadcrumbs">
      <div class="item-breadcrumb">ホーム</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.logoWrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 100px 0 100px;
  .menuMb{
    display: none;
  }
  .textBg{
    position: relative;
    width: 185.2px;
    height: 98px;
    .title{
      color: #F37497;
      font-weight: bold;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      font-size: 50px;
      line-height: 16px;
      white-space: nowrap;
    }
  }
  .topText, .bottomText{
    color: #F37497;
    font-size: 15px;
    font-weight: bold;
  }
}
.menuWrap{
  .menuMain{
    background-color: #F37497;
    .menu{
      display: flex;
      justify-content: space-around;
      height: 60px;
      align-items: center;
      .item-menu{
        font-size: 20px;
        font-weight: 600;
        a{
          color: #FDEBF0;
        }
      }
      .item-menu-direction{
        text-decoration: underline;
        text-decoration-color: #FDEBF0;
      }
    }
  }
  .breadcrumbs{
    background-color: #FDEBF0;
    font-size: 19px;
    padding-left: 120px;
    .item-breadcrumb{
      color: #898888;
      font-weight: 600;
    }
  }
}
@media only screen and (max-width: 600px) {
  .logoWrap{
    padding: 40px 10px 20px;
    position: relative;
    .topText{
      font-size: 7px;
    }
    .bottomText{
      font-size: 6px;
    }
    .textBg{
      width: 100px;
      height: 52px;
      img{
        width: 100%;
        height: 100%;
      }
      .title{
        font-size: 20px;
      }
    }
    .menuMb{
      position: absolute;
      background: #f37497;
      left: 20px;
      bottom: 20px;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
    }
  }
  .menuWrap{

    .menuMain{
      height: 3px;
      .menu{
        display: none;

      }
    }
    .breadcrumbs{
      font-size: 9px;
      padding-left: 50px;
    }
  }
}
</style>
