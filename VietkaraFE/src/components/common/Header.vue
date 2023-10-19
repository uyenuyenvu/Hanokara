<script>
  export default {
    name: 'HeaderVue',
    data(){
      return{
        isShowMenuMobile: false
      }
    }
  }
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
    <div class="iconMenuMB">
      <img src="@/assets/images/menu.png" alt="" @click="isShowMenuMobile = true">
    </div>
    <Transition duration="550" name="nested">
      <div class="menuMbWrap outer" v-if="isShowMenuMobile">
        <div class="bgMenu" @click="isShowMenuMobile=false"></div>
        <div class="menuMb inner">
          <div class="headerMenuMB">
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
          </div>
          <div class="hideMenu" @click="isShowMenuMobile=false">
            メニューを閉じる
          </div>
          <div class="itemMenuMobile">
            <router-link to="/">ホーム</router-link>
          </div>
          <div class="itemMenuMobile">
            <router-link to="/store-search">お店を探す</router-link>
          </div>
          <div class="itemMenuMobile">
            <router-link to="/cast-search">女の子を探す</router-link>
          </div>
          <div class="itemMenuMobile">
            <router-link to="/">割引情報</router-link>
          </div>
          <div class="itemMenuMobile">
            <router-link to="/publishJp">お問い合わせ</router-link>
          </div>
          <div class="itemMenuMobile">
            プライバシーポリシー
          </div>
          <div class="itemMenuMobile">
            掲載について
          </div>
        </div>
      </div>
    </Transition>

  </div>
  <div class="menuWrap">
    <div class="menuMain">
      <div class="menu">
        <div class="item-menu"><router-link to="/">ホーム</router-link></div>
        <div class="item-menu item-menu-direction"><router-link to="/">ホーム</router-link></div>
        <div class="item-menu item-menu-direction"><router-link to="/store-search">お店を探す</router-link></div>
        <div class="item-menu item-menu-direction"><router-link to="/cast-search">女の子を探す</router-link></div>
        <div class="item-menu item-menu-direction"><router-link to="/">割引情報</router-link></div>
        <div class="item-menu item-menu-direction"><router-link to="/publishJp">お問い合わせ</router-link></div>
      </div>
    </div>
    <div class="breadcrumbs">
      <div class="item-breadcrumb">ホーム</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
a{
  color: #F37497!important;
}
.logoWrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 100px 0 100px;
  position: relative;
  .iconMenuMB{
    display: none;
  }
  .menuMbWrap{
    position: fixed;
    top: 0;
    left: 0;
    .bgMenu{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100vw;
      height: 100vh;
      background-color: #00000080;
    }
    .menuMb{
      position: absolute;
      width: 66vw;
      background-color: white;
      height: 100vh;
      z-index: 2;
      top: 0;
      left: 0;
      .headerMenuMB{
        height: 133px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      .hideMenu{
        font-size: 14px;
        background-color: #F37497;
        color: white;
        padding: 9px 20px;
        font-weight: bold;
      }
      .itemMenuMobile{
        font-size: 16px;
        color: #F37497;
        background-color: white;
        padding: 18px 20px;
        font-weight: bold;
        border-bottom: 1px solid #D9D9D9;
      }
    }
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
    z-index: 9999;
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
    .iconMenuMB{
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
.nested-enter-active, .nested-leave-active {
  transition: all 0.3s ease-in-out;
}
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>
