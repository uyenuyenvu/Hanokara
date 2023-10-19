<template>
  <div class="container">
    <div class="v-row">
      <div class="v-col-xs-12 v-col-lg-8">
        <div class="carouselWrap">
          <v-carousel height="auto"  hide-delimiters>
            <template v-slot:prev="{ props }">
              <img  @click="props.onClick" class="imagePrev" src="@/assets/images/prev.png" alt="">
            </template>
            <template v-slot:next="{ props }">
              <img  @click="props.onClick"  class="imagePrev"  src="@/assets/images/next.png" alt="">
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
                  <div class="titleCarousel-stroker">
                    クローズアップ広告は3つの広告写真を載せる。<br>アクセス時にランダムで表示され、スライドショーにする。
                  </div>
                  <div class="titleCarousel">
                    クローズアップ広告は3つの広告写真を載せる。<br>アクセス時にランダムで表示され、スライドショーにする。
                  </div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <div class="descriptionCarousel">
            <div class="textWrap">
              <div class="textDes">
                店舗名/プレイヤー名
              </div>
              <div class="textDes">
                文章を入れます。テキストテキストテキストテキストテキストテキスト
                <br>
                テキストテキストテキストテキストテキストテキストテキストテキスト
              </div>
            </div>
            <div class="btn-wrap">
              <div class="btn-pink">
                【店名】／キャスト詳細
              </div>
            </div>
          </div>
          <div class="titleBlock">
            メインメニュー
          </div>
          <div class="block-radius padding-20px margin-10-mb">
            <div class="imageStyle1">
              <img src="@/assets/images/image2.png">
            </div>
            <div class="title-block-radius">
              お店をさがす
            </div>
          </div>
          <div class="v-row margin-top-10">
            <div class="v-col-6 ">
              <div class="block-radius padding-10px">
                <div class="imageStyle1">
                  <img src="@/assets/images/image3.png">
                </div>
                <div class="title-block-radius">
                  女の子をさがす
                </div>
              </div>
            </div>
            <div class="v-col-6">
              <div class="block-radius padding-10px">
                <div class="imageStyle1">
                  <img src="@/assets/images/image4.png">
                </div>
                <div class="title-block-radius">
                  女の子をさがす
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="v-col-xs-12 v-col-lg-4">
        <div class="listContent">
          <div class="titleContent">【広告】</div>
          <v-row class="margin-top-0 margin-10-mb" no-gutters>
            <div class="v-col-lg-12 v-col-md-12 v-col-sm-6 v-col-6 "
                 v-for="index in [1,2,3,4]"
                 :key="index"
            ><div class="itemContent">A広告</div></div>
          </v-row>
        </div>
      </div>
    </div>
    <div class="v-row">
      <div class="v-col-xs-12 v-col-lg-8">
        <div class="carouselWrap">
          <div class="titleBlock">
            新着情報
          </div>
          <div class="newWrap">
            <item-new v-for="index in [1,2,3,4,5,6]" :key="index" />
          </div>
        </div>
      </div>
      <div class="v-col-xs-12 v-col-lg-4">
      </div>
    </div>
    <div class="v-row">
      <div class="v-col-xs-12 v-col-lg-8">
        <div class="carouselWrap">
          <div class="blockImageBottom">
            <div class="title">
              【広告】
            </div>
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
import ItemNew from './../shareComponent/itemNew.vue'
export default {
  components: {
    ItemNew

  }
}
</script>
<style lang="scss" scoped>
.container{
  padding: 50px 100px;
}
.mb{
  display: none;
}
.carouselWrap{
  width: calc(100% - 50px)
}
.carouselItem{
  position: relative;
  width: 100%;
  height: 100%;
}
.imageCarousel{
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;align-items: flex-end;
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
  .btn-wrap{
    .btn-pink{
      font-weight: bold;
      font-size: 16px;
      color: white;
      background-color: #F37497;
      padding: 5px 30px;
      border-radius: 25px;
      text-decoration:underline;
    }
  }
}
.titleBlock{
  background-color: #2D2427;
  font-size: 22px;
  font-weight: bold;
  color: white;
  padding: 10px 50px;
  margin-top: 30px;
}
.block-radius{
  background-color: white;
  border-radius: 11px;
  margin-top: 10px;
  box-shadow: 0 7.17px 7.17px 7.17px #00000052;
  .title-block-radius{
    color: black;
    font-size: 36px;
    font-weight: bold;
    text-decoration:underline;
    text-align: center;
    margin-top: 10px;
  }
}
.padding-10px{
  padding: 10px;
}
.padding-20px{
  padding: 20px;
}
.imageStyle1{
  width: 100%;
  background: black;
  padding: 7px 7px 7px 7px;
  border-radius: 13px;
  height: max-content;
  img{
    width: 100%;
  }
}
.margin-top-10{
  margin: 10px 0;
}
.listContent{
  margin-left: 50px;
  position: relative;
  .titleContent{
    position: absolute;
    top: -5px;
    color: #AFADAD;
    font-size: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
  }
  .itemContent{
    height: 165px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    font-weight: bold;
    font-size: 36px;
    color:black;
    margin-bottom: 20px;
    background-color: #D9D9D9;
  }
}
.newWrap{
  width: 100%;
  overflow-y: scroll;
  padding-top: 20px;
  height: 610px;
}
.blockImageBottom{
  margin-top: 50px;
  .title{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #AFADAD;
    margin-bottom: 10px;
  }
  .content{
    height: 300px;
    width: 100%;
    background-color: #D9D9D9;
    color: black;
    font-size: 37px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.margin-top-0{
  margin-top: 0;
}
@media only screen and (max-width: 600px) {
  .container{
    padding: 0;
  }
  .carouselWrap{
    width: 100%;
  }
  .carouselItem{
    padding: 0 30px;
    background-image: url(/src/assets/images/image3.png);
    background-position: 100% 100%;
    background-size: cover;
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
    width: 15px;
    height: 30px;
    object-fit: contain;
  }
  .descriptionCarousel{
    justify-content: center;
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
    font-size: 12px;
    text-align: center;
  }
  .padding-20px{
    padding: 10px;
  }
  .block-radius{
    box-shadow: 0 4.63px 4.63px 4.63px #00000052;
    .title-block-radius{
      font-size: 18.5px;
    }
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
  .imageStyle1{
    padding: 3px 3px 0;
    border-radius: 10px;
    img{
      border-radius: 10px;
    }
  }
  .listContent{
    .itemContent{
      border: 1px solid black;
      font-size: 20.3px;
      &:nth-child(even){
        margin: 10px 10px 10px 0;
      }
      &:nth-child(odd){
        margin: 10px;

      }
    }
  }
  :deep{
    .v-window__controls{
      padding: 0 5px!important;
    }
  }
  .newWrap{
    padding-top: 10px;
    height: 475px;
  }
  .mb{
    display: block;
  }
  .blockImageBottom{
    margin-top: 0;
    .content{
      font-size: 32px;
      height: 150px;
      margin: 0 30px;
      width: calc(100% - 60px);
    }
  }
}
</style>
