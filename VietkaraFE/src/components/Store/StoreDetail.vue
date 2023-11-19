<template>
  <div class="container">
    <div class="v-row m-9">
      <div class="v-col-xs-12 v-col-lg-8 p0">
        <div class="carouselWrap">
            <div class="banner">
                <img class="picture" src="@/assets/images/storePage/storePage2.png" alt="">
                <img class="logo" src="@/assets/images/storePage/storePage1.png" alt="">
            </div>
            <div class="titleBlock">
                {{ storeDetails.store.store_name }}：キャスト一覧
            </div>
            <div class="cards">
                <div class="v-row">
                  <div v-for="cast in storeDetails.casts" :key="cast.cast_id" class="v-col-3 card">
                    <div class="avt">
                      <img :src="cast.profile" alt="castProfile">
                    </div>
                    <div class="titleCard">
                      {{ cast.cast_name }}
                    </div>
                  </div>
                </div>
            </div>
            <button class="btn-all-actor"><u> すべてのキャストを見る </u></button>
        </div>
      </div>
      <div class="v-col-xs-12 v-col-lg-4">
        <div class="listContent">
            <div class="titleBlock">
                店舗情報
            </div>
            <div class="logoClub">
                <img src="@/assets/images/storePage/logoClub.png" alt="">
            </div>
            <div class="infor">
                <div class="inforTitle">店名</div>
                <div class="contentInfor">{{ storeDetails.store.store_name }}</div>
                <div class="inforTitle">電話番号</div>
                <div class="contentInfor">
                  <a class="color-dark" :href="'tel:'+ storeDetails.store.store_phone"> {{ storeDetails.store.store_phone }}</a>
                </div>
                <div class="inforTitle">メールアドレス</div>
                <div class="contentInfor">
                  <a class="color-dark" href = "mailto: example@gmail.com">example@gmail.com</a>
                </div>
                <div class="inforTitle">住所</div>
                <div class="contentInfor">{{ storeDetails.store.store_address }}</div>
                <div class="inforTitle">営業時間</div>
                <div class="contentInfor">{{ storeDetails.store.open_time }}～{{ storeDetails.store.close_time }}</div>
                <div class="inforTitle">店休日</div>
                <div class="contentInfor">{{ storeDetails.store.other_time }}</div>
                <div class="inforTitle">在籍国籍比率</div>
                <div class="contentInfor">ベトナム人 {{ storeDetails.nationality_ratio }} 多国籍</div>
            </div>
        </div>
    </div>
    <div class="v-col-xs-12 v-col-lg-8">
        <div class="titleBlock">
            システム
        </div>
        <div class="discount" v-for="(menu, index) in storeDetails.menus" :key="index">
            <div class="discountTitle">{{ menu.menu_title }}</div>
            <div class="contentDiscount" v-html="menu.menu_content"></div>
        </div>

        <div class="titleBlock">
            割引情報
        </div>
        <div class="present" style="background: url('/src/assets/images/storePage/storePage2.png')">
            <div class="presentTitle">CLUB ALICE キャンペーン！（割引名)</div>
            <div class="contentPresent">
              <span>期間：X月X日～X月XX日</span><br>
              【１日先着２組様限定】<br>
              ご来店時に「ベトカラ見た！」で<br>
              ウイスキーボトルを１本プレゼントいたします♪
            </div>
        </div>


        <div class="titleBlock">
            イベント
        </div>
        <div v-for="(event, index) in storeDetails.events" :key="index" class="present event">
            <div class="presentTitle">{{ event.event_name }}</div>
            <div class="contentPresent" v-html="event.event_content">
            </div>
        </div>

        <div class="titleBlock">
            CLUB ALICE：店内写真
        </div>
        <div class="storePhotos">
            <div class="photos">
              <div class="v-row">
                <div class="v-col-3 p0">
                  <div class="photo">
                    <img src="" alt="">
                  </div>
                </div>
                <div class="v-col-3 p0">
                  <div class="photo">
                    <img src="" alt="">
                  </div>
                </div>
                <div class="v-col-3 p0">
                  <div class="photo">
                    <img src="" alt="">
                  </div>
                </div>
                <div class="v-col-3 p0">
                  <div class="photo">
                    <img src="" alt="">
                  </div>
                </div>
                <div class="v-col-3 p0">
                  <div class="photo">
                    <img src="" alt="">
                  </div>
                </div>
                <div class="v-col-3 p0">
                  <div class="photo">
                    <img src="" alt="">
                  </div>
                </div>
                <div class="v-col-3 p0">
                  <div class="photo">
                    <img src="" alt="">
                  </div>
                </div>
                <div class="v-col-3 p0">
                  <div class="photo">
                    <img src="" alt="">
                  </div>
                </div>
              </div>
            </div>
            <button class="btn-all-actor"><u> すべてのキャストを見る </u></button>
        </div>

        <!-- <div class="titleBlock">
            CLUB ALICE：グループ系列店
        </div>
        <div class="newWrap">
          <div class="itemNew">
            <div class="avatarNew">
              <div class="avtDefault">
                店舗
                <br>
                ロゴ
              </div>
            </div>
            <div class="contentNew">
              <div class="textTitle">
                キンマー【各エリア】・カラオケ【カテゴリ】
              </div>
              <div class="textContent">
                店名（あいうえお順）
              </div>
            </div>
          </div>
          <div class="itemNew">
            <div class="avatarNew">
              <div class="avtDefault">
                店舗
                <br>
                ロゴ
              </div>
            </div>
            <div class="contentNew">
              <div class="textTitle">
                キンマー【各エリア】・カラオケ【カテゴリ】
              </div>
              <div class="textContent">
                店名（あいうえお順）
              </div>
            </div>
          </div>
        </div> -->
        <button class="btn-all-actor"><u> 【店名】に戻る </u></button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import { API } from '@/axios-api.js';

export default {
  data() {
    return {
      storeDetails: {
        casts: [],
        nationality_ratio: '',
        categories: [],
        discount: [
          {
            discount_content: '',
            discount_end_date: '',
            discount_image: null,
            discount_start_date: '',
            discount_title: '',
          },
        ],
        events: [
          {
            event_name: '',
            event_content: '',
          },
        ],
        menus: [
          {
            menu_title: '',
            menu_content: '',
          },
        ],
        store: {},
      }, // APIから取得した店舗の詳細情報を格納する変数
    };
  },
  mounted() {
    // コンポーネントがマウントされたときにAPIを呼び出す
    this.fetchStoreDetails();
    this.handleResize()
    this.UPDATE_BREADCRUMBS([
      {
        title: 'ホーム',
        url:'/'
      },
      {
        title: 'お店をさがす',
        url:'/store'
      },
      {
        title: '【店名】',
      },
    ])
  },
  methods: {
    ...mapMutations(['UPDATE_BREADCRUMBS','UPDATE_IMAGE_COMPARE']),
    handleResize() {
     let width = window.innerWidth;
      if (width>600){
        // this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/PC_Home.png')
      }else{
        this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/MB_StorePage.png')
      }
    },

    async fetchStoreDetails() {
      try {
        const storeId = this.$route.params.storeId;

        // APIを呼び出して店舗の詳細情報を取得
        const response = await API.get(`stores/${storeId}/`);
        this.storeDetails = response.data;
        console.log(this.storeDetails);
        console.dir(this.storeDetails);
      } catch (error) {
        console.error("APIの呼び出しに失敗しました:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container{
  padding: 50px 100px;
}
.m-9{
  margin: -12px;
}
.banner{
    margin: 0;
    position: relative;
  .picture{
    width: 100%;
  }
    .logo{
        position: absolute;
        top: 2px;
        left: 2px;
    }
}
.p0{
  padding: 0;
}
hr{
    margin-top: 20px;
}
.photos{
    width: 80%;
    margin: auto;
}
.photo{
    background-color: #D9D9D9;
    height: 84px;
    margin: 5px;
}
.cards{
    width: 91%;
    margin-left: 4%;
}
.card{
    text-align: center;
    padding: 2px 0 0 2px;
    .avt{
        background-color: #D9D9D9;
        height: 100px;
        img{
            height: 100%;
        }
    }
}
.titleCard{
  background-color: #2D2427;
  font-size: 12px;
  font-weight: bold;
  color: white;
  padding: 8px 10px;
  height: 29px;
}
.present {
  margin-bottom: 50px;
  height: 217px;
  background-repeat: no-repeat!important;
  background-position: center!important;
  background-size: cover!important;
  border: 1.22px solid #929191;
    .presentTitle{
        background-color: #FF789D;
        font-size: 12px;
        font-weight: bold;
        color: white;
        padding: 8px 10px;
        height: 29px;
        border-left: 1.22px solid #929191;
        border-bottom: 1.22px solid #929191;
        border-right: 1.22px solid #929191;
    }
    .contentPresent{
        font-weight: bold;
        font-size: 17px;
        color: #0A0A0A;
        font-weight: bold;
        padding: 10px 0 10px 20px;
        span{
          font-weight: bold;
          color: #FF0404;
        }
    }
}
.event {
  .presentTitle{
    font-size: 12px;
  }
  .contentPresent{
    padding: 10px 20px 10px 20px;
    font-size: 11.02px;
    span{
      font-size: 15px;
    }
  }
}
.discount {
  margin-bottom: 50px;
    .discountTitle{
        background-color: #FF789D;
        font-size: 12px;
        font-weight: bold;
        color: white;
        padding: 8px 10px;
        height: 29px;
        border-left: 1.22px solid #929191;
        border-bottom: 1.22px solid #929191;
        border-right: 1.22px solid #929191;
    }
    .contentDiscount{

      border-left: 1.22px solid #929191;
      border-bottom: 1.22px solid #929191;
      border-right: 1.22px solid #929191;
        font-size: 15px;
        color: #0A0A0A;
        font-weight: bold;
        padding: 10px 0 10px 20px;
    }
}
.infor {
    margin-bottom: 50px;
    .inforTitle{
        font-size: 12px;
        font-weight: bold;
        color: #FF789D;
        padding: 8px 10px;
        height: 29px;
    }
    .contentInfor{
        font-size: 15px;
        color: #0A0A0A;
        font-weight: bold;
        padding: 10px 0 10px 20px;
        border-bottom: 2.4px dotted #AFADAD;
        .color-dark{
          color: #0A0A0A;
          text-decoration: underline;
          font-weight: bold;
        }
    }
}
.btn-all-actor{
    width: 55%;
    font-size: 10px;
    padding: 10px 0;
    border: 3px #FF789D solid;
    color: #FF789D;
    border-radius: 25px;
    margin: auto;
    margin: 50px 22.5% 50px 22.5%;
    u{
        font-weight: bold;
    }
}
.btn-all-actor:hover{
    background-color: #FF789D;
    color: #fff;
}
.mb{
  display: none;
}
.carouselWrap{
  //width: calc(100% - 50px)
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
      background-color: #FF789D;
      padding: 5px 30px;
      border-radius: 25px;
      text-decoration:underline;
    }
  }
}
.titleBlock{
  font-size: 22px;
  font-weight: bold;
  color: #838383;
  text-align: center;
  padding: 10px 50px;
  margin-bottom: 10px;
}
.block-radius{
  background-color: white;
  border-radius: 11px;
  margin-top: 10px;
  box-shadow: 0 7.17px 7.17px 7.17px #00000052;
  cursor: pointer;
 &:hover{
    box-shadow: none;
   border: 1px solid #00000052;
  }
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
  border: 2px solid #D9D9D9;
  padding: 20px;
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
  .itemNew{
    display: flex;
    border-bottom: 2px solid #AFADAD;
    padding: 20px 0;
    .avatarNew{
      width: 73px;
      height: 73px;
      border-radius: 50%;
      background-color: #D9D9D9;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      font-size: 20px;
      font-weight: bold;
      white-space: pre-wrap;
      line-height: 22px;
      margin-right: 40px;
      .avtDefault{
        font-weight: bold;
      }
    }
    .contentNew{
      .textTitle{
        color: #FF789D;
        font-size: 13px;
        line-height: 16px;
        font-weight: bold;
        margin-bottom: 5px;
      }
      .textContent{
        color: #181818;
        font-weight: bold;
        margin-bottom: 5px;
        font-size: 15px;
      }
    }
  }
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
.logoClub{
  text-align: center;
  border: 2.1px solid #AFADAD;
  margin-bottom: 20px;
}
@media only screen and (max-width: 600px) {
  .infor {
    margin-bottom: 62px;
    .inforTitle {
      background-color: #FF789D;
      color: white;
      border: 1px solid #929191;
      padding: 8px 20px;
      padding-left: 18px;
    }
    .contentInfor{
      border-bottom: none;
      height: 39px;
      border-bottom: 1.22px solid #929191;
    }
  }
  .present{
    margin-bottom: 64px;
  }
  .storePhotos{
    margin-top: 30px;
    .photos{
      margin: 0 23px;
      margin-bottom: 25px;
      width: auto;
      .photo{
        height: 20vh;
      }
    }
  }
  .discount{
    margin-bottom: 62px;
  }
  .btn-all-actor{
    margin: 35px 22.5% 69px 22.5%;
  }
  .banner{
    margin-top: -8px;
    .logo{
      top: 0;
      left: 13px;
    }
  } 
  .container{
    padding: 0;
  }
  .logoClub{
      text-align: center;
    border: none;
    margin: 0;
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
    background-color: #2D2427;
    font-size: 12px;
    padding: 8px 50px;
    text-align: center;
    margin-bottom: 1px;
    margin-top: -7px;
  }
  .padding-20px{
    padding: 10px;
  }
  .block-radius{
    box-shadow: 0 4.63px 4.63px 4.63px #00000052;
   cursor: pointer;
    :hover{
      box-shadow: none;
      border: 1px solid #00000052;
    }
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
    border: none;
    padding: 0;
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
    .itemNew{
      padding: 10px 0;
      .avatarNew{
        margin-left: 10px;
        font-size: 15px;
        margin-right: 20px;
        width: 60px;
        height: 60px;
      }
      .contentNew{
        .date{
          font-size: 10px;
        }
        .textContent{
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
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
