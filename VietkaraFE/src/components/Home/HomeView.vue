<template>
  <div class="container">
    <div class="v-row">
      <div class="v-col-xs-12 v-col-lg-8 v-col-md-8 pd-right-25">
        <div class="carouselWrap">
          <div class="titleBlock">
            クローズアップ
          </div>
          <v-carousel height="330" hide-delimiters>
            <div class="bgCarousel">
            </div>
            <template v-slot:prev="{ props }">
              <img  @click="props.onClick" class="imagePrev" src="@/assets/images/prev.png" alt="">
            </template>
            <template v-slot:next="{ props }">
              <img  @click="props.onClick"  class="imagePrev" src="@/assets/images/next.png" alt="">
            </template>
            <v-carousel-item
                v-for="item in [1,2,3]"
                :key="item"
                cover
            >
              <v-sheet
                  height="100%"
              >
                <div class="carouselItem"   >
                  <img class="imageCarousel" src="@/assets/images/image1.png" alt="">
                  <div class="descriptionCarousel">
                  <div class="btn-wrap">
                    <div class="btn-pink">
                      【店名】
                    </div>
                  </div>
                </div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <div class="titleBlock">
            メインメニュー
          </div>
          <div class="v-row margin-top-10">
            <div class="v-col-6 pa-0">
              <router-link :to="storeSearchItem.link">
                <ItemMiddleMenu :text="storeSearchItem.text" :url-img="storeSearchItem.img"></ItemMiddleMenu>
              </router-link>
            </div>
            <div class="v-col-6 pa-0 transform-7">
              <router-link :to="castSearchItem.link">
                <ItemMiddleMenu :text="castSearchItem.text" :url-img="castSearchItem.img"></ItemMiddleMenu>
              </router-link>
          </div>
            <div class="v-col-6 pa-0">
              <router-link :to="discountItem.link">
                <ItemMiddleMenu :text="discountItem.text" :url-img="discountItem.img"></ItemMiddleMenu>
              </router-link>
          </div>
            <div class="v-col-6 pa-0 transform-7">
            <ItemMiddleMenu :text="'イベント情報'"></ItemMiddleMenu>
            </div>
          </div>
        </div>
      </div>
      <div class="v-col-xs-12 v-col-lg-4 v-col-md-4 pd-left-25">
        <div class="listContent">
          <v-row class="titleContent" justify="center">
            <v-col class="text-center" cols="12">【広告】</v-col>
          </v-row>
          <v-row class="m-10" no-gutters>
            <div class="v-col-lg-12 v-col-md-12 v-col-sm-6 v-col-6 "
                 v-for="index in [1,2,3,4]"
                 :key="index"
            ><div class="itemContent">A広告</div></div>
          </v-row>
        </div>
      </div>
    </div>
    <div class="v-row mb-margin-top-20">
      <div class="v-col-xs-12 v-col-lg-8 pd-right-25">
        <div class="carouselWrap padding-top-8">
          <div class="titleBlock">
            新着情報
          </div>
          <div class="newWrap">
            <item-new v-for="index in [1,2,3,4,5,6,7,8,9,10]" :key="index" />
          </div>
        </div>
      </div>
      <div class="v-col-xs-12 v-col-lg-4">
      </div>
    </div>
    <div class="v-row mr-bottom-31">
      <div class="v-col-xs-12 v-col-lg-8">
        <p class="title text-center-sm">【広告】</p>
        <div class="carouselWrap">
          <div class="blockImageBottom">
            <div class="content">
              E広告
            </div>
          </div>
        </div>
      </div>
      <div class="v-col-xs-12 v-col-lg-4">
      </div>
    </div>
  </div>
</template>
<script>
import ItemNew from '@/components/shareComponent/itemNew.vue'
import ItemMiddleMenu from '@/components/shareComponent/itemMiddleMenu.vue'
import {mapMutations} from 'vuex'
import girl1 from '@/assets/images/girl1.png'

export default {
  components: {
    ItemNew, ItemMiddleMenu
  },
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      storeSearchItem: {
        text:'お店をさがす',
        img: girl1,
        link: '/store-search',
      },
      castSearchItem: {
        text:'女の子をさがす',
        img: girl1,
        link: '/cast-search',
      },
      discountItem: {
        text:'割引情報',
        img: girl1,
        link: '/discount',
      },
    };
  },
  methods:{
    ...mapMutations(['UPDATE_BREADCRUMBS','UPDATE_IMAGE_COMPARE']),
    handleResize() {
     let width = window.innerWidth;
      if (width>600){
        this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/PC_Home.png')
      }else{
        this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/MB_Home.png')
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.UPDATE_BREADCRUMBS([
      {
        title: 'ホーム'
      }
    ])
    this.handleResize()
  }
}
</script>
<style lang="scss" scoped>
.pd-right-25{
  padding-right: 25px;
}
.pd-left-25{
  padding-left: 25px;
  margin-top: 20px;
}
.container{
  padding: 38px 295px;
}
.mb{
  display: none;
}
//.carouselWrap{
//  width: calc(100% - 50px)
//}
.carouselItem{
  position: relative;
  width: 100%;
  height: 100%;
}
.buton-mb{
  display: none;
}
.imageCarousel{
  width: 100%;
  height: 259px;
}
.titleCarousel-stroker{
  font-weight: bold;
  font-size: 24px;
  -webkit-text-stroke: 3px #FFFFFF;
  position: absolute;
  top: 30px;
  left: 30px;
  line-height: 30px;
  max-width: 70%;
}
.titleCarousel{
  font-weight: bold;
  font-size: 24px;
  color: #6DB7FC;
  position: absolute;
  top: 30px;
  line-height: 30px;
  left: 30px;
  max-width: 70%;
}
.descriptionCarousel{
  background-color: #181818;
  padding: 10px 20px 16px 20px;
  margin-bottom: 52px;
  margin-top: -7px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54.87px;
  .textWrap{
    .textDes{
      background-color: #D9D9D9;
      color: black;
      font-size: 12px;
      font-weight: bold;
      padding: 5px 20px;
      &:first-of-type{
        margin-bottom: 10px;
      }
    }
  }

}
.btn-wrap{
  .btn-pink{
    font-weight: bold;
    width: 200px;
    text-align: center;
    font-size: 13px;
    color: white;
    height: 26px;
    margin: 2px 0 0 12px;
    background-color: #FF789D;
    padding: 5px 30px;
    border-radius: 25px;
  }
}
.titleBlock {
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

.padding-10px{
  padding: 10px;
}
.padding-20px{
  padding: 20px;
}
.margin-top-10{
  margin: 10px 0;
}
.listContent{
  position: relative;
  .titleContent{
    // position: absolute;
    top: -5px;
    color: #AFADAD;
    font-size: 13.65px;
    // left: 40%;
    // transform: translateX(-50%) translateY(-100%);
  }
  .itemContent{
    height: 146px;
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 24.57px;
    padding-right: 18px;
    color:#6DB7FC;
    margin-bottom: 15px;
    background-color: #D9D9D9;
  }
}
.newWrap{
  width: 100%;
  overflow-y: scroll;
  height: 365px;
}
.blockImageBottom{
  margin-top: 31px;
  padding: 0 57px 0 20px;
  position: relative;
  .title{
    text-align: center;
    font-size: 13.65px;
    font-weight: bold;
    color: #AFADAD;
    margin-bottom: 5px;
    position: absolute;
    position: absolute;
    left: 35%; /* 要素の左端をコンテナの中央に設定 */
    transform: translateX(-50%); /* 要素を横方向に50%移動して中央揃えにする */
    top: -30px; /* .title を .content の上に配置するための値。必要に応じて調整してください。 */
  }
  .content{
    height: 210px;
    width: 420px;
    background-color: #D9D9D9;
    color: black;
    font-size: 25.49px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
}
.margin-top-0{
  margin-top: 0;
}
@media only screen and (max-width: 600px) {
  .mr-bottom-31{
    margin-bottom: 18px!important;
    margin-top: 4px!important;
  }
  .buton-mb{
    margin-top: 59px;
    padding-right: 11px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mb-margin-top-20{
    margin-top: 20px!important;
  }
  .margin-top-10{
    margin: 27px 20px 10px;
  }

  .pd-right-25{
    padding-right: 12px;
  }
  .pd-left-25{
    padding-left: 0;
  };
  .container{
    padding: 0;
  }
  .carouselWrap{
    width: 100%;
  }
  .titleCarousel-stroker{
    font-size: 11px;
    top: 10px;
    left: 40px;
    line-height: 20px;
    max-width: 90%;
  }
  .titleCarousel{
    font-size: 11px;
    top: 10px;
    line-height: 20px;
    left: 40px;
    max-width: 90%;
  }
  .imagePrev{
    margin-top: 17px!important;
    height: 32px!important;
    object-fit: fill;
    width: 19px!important;
  }
  .descriptionCarousel{
    justify-content: center;
    padding: 6px 20px 6px 10px;
    margin-bottom: 40px;
    .textWrap{
      display: none;
    }
    .btn-wrap{
      .btn-pink{
        font-size: 10px;
      }
    }
  }
  .titleBlock{
    display: flex;
    justify-content: center;
    font-size: 12px;
    padding: 5px 0 6px 0px;
    margin: 0 auto;
  }
  :deep{
    .v-carousel{
      height: 175px!important;
    }
  }
  .padding-20px{
    padding: 10px;
  }

  .margin-10-mb{
    margin: 10px;
  }
  .margin-0-mb{
    margin: 0;
  }
  .listContent{
    margin: 0;
  }
  .listContent{
    padding: 0 6px 0 16px;
    .titleContent{
      top: 5px;
      left: 51%;
    }
    .itemContent{
      font-size: 20.3px;
      width: 170px;
      height: 113px;
      padding: 10px 10px;
      margin: 10px 10px;
      &:nth-child(even){
        margin: 10px 10px 10px 0;
      }
      &:nth-child(odd){
        margin: 7px;
      }
    }
  }
  :deep{
    .v-window__controls{
      padding: 0 5px!important;
    }
  }
  .newWrap{
    padding-top: 13px;
    height: 475px;
  }
  .mb{
    display: block;
  }
  .blockImageBottom{
    margin-top: 0;
    padding: 0 20px;
    .content{
      font-size: 20.91px;
      height: 150px;
      margin: 0 30px;
      width: calc(100% - 60px);
    }
  }
}
:deep{
    .v-window-item--active{
    padding: 0 35px;
  }
}
.bgCarousel{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-image: url(/src/assets/images/bgCarousel.png);
  background-repeat: repeat-x;
}

:deep{
  .v-window__controls{
    padding: 0 10px;
    img{
      margin-top: 45px;
      height: 53px;
    }
}
}
.transform-7{
  transform: translateX(7px);
}
.padding-top-8{
  padding-top: 8px;
}
.mr-bottom-31{
  margin-bottom: 31px;
}

.title {
    display: inline-block; /* Make the element an inline-block */
    width: 100%; /* Set the width to 100% of the parent */
    text-align: center; /* Center text inside the element */
    font-size: 13.65px;
    font-weight: bold;
    color: #AFADAD;
    margin-bottom: 5px;
    position: relative; /* Use relative for natural document flow */
    /* Remove absolute positioning and transforms */
  }
</style>
