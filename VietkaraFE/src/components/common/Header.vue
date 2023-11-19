<script>
import {mapState} from 'vuex'
import { mdiMenu } from '@mdi/js';
  export default {
    name: 'HeaderVue',
    data(){
      return{
        mobileMenu: mdiMenu,
        isShowMenuMobile: false,
        showMenu: false,
        isShowImageCompare: false
      }
    },
    computed: mapState([
      'breadcrumbs','imageCompare'
    ]),
    methods:{
      toggleMenu() {
        this.showMenu = !this.showMenu;
        this.isShowMenuMobile = !this.isShowMenuMobile;
      },
      beforeLeave() {
        this.isShowMenuMobile = true;
      },
      afterLeave() {
        this.isShowMenuMobile = false;
      }
    },
  }
</script>

<template>
  <img v-if="isShowImageCompare" :src="imageCompare" alt="" class="image-compare">
  <b class="text-compare" @click="isShowImageCompare=!isShowImageCompare">Compare</b>
  <div v-show="!isShowMenuMobile" class="iconMenuMB">
      <v-icon color="white" @click="toggleMenu">{{ mobileMenu }}</v-icon>
  </div>
  <div class="logoWrap">
    <div class="textBg">
      <a href="/"><img src="@/assets/images/logo.svg" alt=""></a>
    </div>
    <Transition name="slide-x" @after-leave="afterLeave" @before-leave="beforeLeave">
      <div class="menuMbWrap outer" v-if="showMenu">
        <div class="bgMenu" @click="toggleMenu"></div>
        <div class="menuMb inner">
          <div class="headerMenuMB">
            <div class="textBg">
              <a href="/"><img src="@/assets/images/hanokara-logo-svg.svg" alt=""></a>
            </div>
          </div>
          <div class="hideMenu" @click="toggleMenu">
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
            <router-link to="/discount">割引情報</router-link>
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
        <div class="item-menu item-menu-direction"><router-link to="/">ホーム</router-link></div>
        <div class="item-menu item-menu-direction"><router-link to="/store-search">お店を探す</router-link></div>
        <div class="item-menu item-menu-direction"><router-link to="/cast-search">女の子を探す</router-link></div>
        <div class="item-menu item-menu-direction"><router-link to="/discount">割引情報</router-link></div>
        <div class="item-menu item-menu-direction"><router-link to="/contact">お問い合わせ</router-link></div>
      </div>
    </div>
    <div class="breadcrumbs">
      <div class="item-breadcrumb" v-for="(item, index) in breadcrumbs" :key="index">
        <span style="font-family: sans-serif; font-weight: bold" v-if="index>0">>></span>
        <a :href="item.url" v-if="item.url">{{item.title}}</a>
        <template v-else>{{item.title}}</template>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.image-compare{
  position: absolute;
  opacity: 0.4;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  object-fit: cover;
}
.text-compare{
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999999999999999;
}
.itemMenuMobile{
  a{
    color: #FF789D!important;
    font-weight: bold;
  }
}
.iconMenuMB{
    display: none;
  }
.logoWrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
  position: relative;
  //margin-top: 9px;
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
        height: 125px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      .hideMenu{
        font-size: 14px;
        background-color: #FF789D;
        color: white;
        padding: 9px 20px;
        font-weight: bold;
      }
      .itemMenuMobile{
        font-size: 16px;
        color: #FF789D;
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
    .title{
      color: #FF789D;
      font-weight: bold;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      font-size: 50px;
      line-height: 16px;
      white-space: nowrap;
    }
    a:hover {
      animation: none; /* アニメーションを無効化 */
      transition: none; /* トランジションを無効化 */
      color: inherit;
      background-color: transparent; /* 背景色を変更しない */
    }
    img{
      width: 100%;
      transform: translateY(10px);
    }
  }
  .topText, .bottomText{
    color: #FF789D;
    font-size: 15px;
    font-weight: bold;
  }
}
.menuWrap{
  transform: translateY(-4px);
  .menuMain{
    background-color: #FF789D;
    padding: 0 277px;
    .menu{
      display: flex;
      justify-content: space-between;
      height: 42px;
      align-items: center;
      padding-top: 3px;
      .item-menu{
        font-size: 14px;
        a{
          color: #FDEBF0;
          font-weight: bold;
          text-decoration: none;

        }
        :hover{
          text-decoration: underline;
          color: inherit;
          background-color: transparent; /* 背景色を変更しない */
        }
      }
      .item-menu-direction{
        text-decoration-color: #FDEBF0;
      }
    }
  }
  .breadcrumbs{
    background-color: #FDEBF0;
    font-size: 11.2px;
    padding-left: 311px;
    display: flex;
    padding-top: 2px;
    .item-breadcrumb{
      color: #898888;
      font-weight: 600;
      a{
        color: #898888;
        font-weight: 600;
        text-decoration: underline;
        &:hover{
          color: #FF789D;
          background: none;
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .iconMenuMB {
      position: fixed; /* 位置を固定 */
      background: #FF789D;
      left: 20px;
      top: 7%;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
      z-index: 99999;
      border: 1px solid #D9D9D9;/* 1ピクセルのグレーの境界線 */
  }
  .logoWrap{
    padding: 26px 10px 0px;
    // position: relative;
    z-index: 9999;
    .topText{
      font-size: 7px;
    }
    .bottomText{
      font-size: 6px;
    }
    .textBg{
      width: 125px;
      img{
        width: 125px;
        height: 88px;
      }
      .title{
        font-size: 20px;
      }
    }
  }
  .menuWrap{

    margin-bottom: 17px;
    .menuMain{
      height: 3px;
      .menu{
        display: none;

      }
    }
    .breadcrumbs{
      font-size: 9px;
      padding-left: 32px;
      padding-top: 0;
    }
  }
}
.slide-x-enter-active, .slide-x-leave-active {
  transition: all 0.2s ease-in-out;
}

.slide-x-enter-from, .slide-x-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
// .nested-enter-active, .nested-leave-active {
//   transition: all 0.3s ease-in-out;
// }
// .nested-leave-active {
//   transition-delay: 0.25s;
// }

// .nested-enter-from,
// .nested-leave-to {
//   transform: translateY(30px);
//   opacity: 0;
// }

// .nested-enter-active .inner,
// .nested-leave-active .inner {
//   transition: all 0.3s ease-in-out;
// }
// .nested-enter-active .inner {
//   transition-delay: 0.25s;
// }

// .nested-enter-from .inner,
// .nested-leave-to .inner {
//   transform: translateX(30px);
//   opacity: 0.001;
// }
</style>
