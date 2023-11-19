<template>
  <div class="container">
    <div class="v-row">
      <div class="v-col-xs-12 v-col-lg-8 p0 v-col-md-8">
        <div class="adBanner">
        <div class="title">【広告】</div>
        <div class="content"> Hバナー広告 </div>
      </div>
        <div class="carouselWrap">
          <div class="titleBlock">
            割引一覧
          </div>
          <div class="note"> 該当件数：{{ storeCount }} </div>
          <div class="newWrap">
            <div class="itemNew" v-for="store in stores" :key="store.id">
              <div class="avatarNew">
                <div class="avtDefault">
                  <img :src="store.store_logo" alt="">
                </div>
              </div>
              <div class="contentNew">
                <div class="textTitle">
                  {{ store.area.area_name }}
                </div>
                <div class="textContent">
                  <router-link :to="`/store/${store.store_id}`">
                    {{ store.store_name }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="backShop">
            <a href="/">ホームに戻る</a>
          </div>
        </div>
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
      <div class="padding-top-0-mb v-col-xs-12 v-col-lg-4 v-col-md-4">
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
  </div>
</template>

<script>
import { API } from '@/axios-api.js';
import {mapMutations} from "vuex";

export default {
  data() {
    return {
      discounts: [],
      discountCount: '',
      currentPage: 1,
      totalPages: 0,
    };
  },
  methods: {
    ...mapMutations(['UPDATE_BREADCRUMBS','UPDATE_IMAGE_COMPARE']),
    handleResize() {
     let width = window.innerWidth;
      if (width>600){
        // this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/PC_Home.png')
      }else{
        this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/MB_Discount.png')
      }
    },
    async fetchStores() {
      try {
        const response = await API.get('stores/discount/', {
          params: {
            page: this.currentPage,
          },
        });
        this.discounts = response.data.results;
        this.discountCount = response.data.total_count;
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.total_pages;
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    },
    async fetchStoreDetails(storeId) {
      try {
        const response = await API.get(`stores/${storeId}/`);
        this.storeDetails = response.data;
      } catch (error) {
        console.error("Error fetching store details:", error);
      }
    },
    // 他のメソッドをここに追加
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.handleResize()
    this.fetchStores(); // コンポーネントがマウントされたときに店舗のリストを取得

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
  }
};
</script>

<style lang="scss" scoped>
.listContent{
  margin: 0;
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
.listContent{
  margin-left: 50px;
  position: relative;
  .titleContent{
    color: #AFADAD;
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
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
.container{
  padding: 50px 100px;
}
.p0{
  padding: 0;
}
.mb{
  display: none;
}
.carouselWrap{
  //width: calc(100% - 50px);
  margin-bottom: 50px;
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
  background-color: #2D2427;
  font-size: 22px;
  font-weight: bold;
  color: white;
  padding: 10px 50px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.backShop{
  background-color: #FF789D;
  text-align: center;
  width: 40%;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 30px;
  a{
    padding: 10px;
    font-size: 10px;
    color: white;
  }
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
.adBanner{
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
.search{
  .itemSearch{
    .titleItem{
      font-size: 20px;
      padding: 0 25px;
      font-weight: bold;
      color: #D6D5D5;
    }
    .frm{
      .frm1{
      padding: 0 25px;
        .searchIp{
          width: 75%;
          border: 3px solid #FF789D;
          padding: 3px 0 3px 8px;
        }
        .btn{
          width: 20%;
          border: 3px solid #FF789D;
          float: right;
          padding: 3px;
          background-color: #D9D9D9;
          color: #000;
          font-weight: bold;
        }
      }
      .categories{
        border: 3px solid #FF789D;
        width: 100%;
        margin-top: 30px;
        padding: 10px 30px;
        input{
        }
        label{
          margin-right: 10px;
          color: #000;
          font-size: 18px;
          font-weight: bold;
        }
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
.note{
  color: white;
  font-weight: bold;
  font-size: 14px;
  padding: 3px 20px;
  background: #FF789D;
}
.newWrap{
  width: 100%;
  overflow-y: scroll;
  padding-top: 20px;
  height: 610px;
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
.margin-top-0{
  margin-top: 0;
}
@media only screen and (max-width: 600px) {
  .container{
    padding: 0;
  }
  .backShop{
    font-size: 10px;
    width: 40%;
    padding: 10px 0;
    a{
      text-decoration: underline;
      font-weight: bold;
    }
  }
  .note{
    padding-left: 32px;
    margin-top: 2px;
    margin-bottom: 25px;
  }
  .padding-top-0-mb{
    padding-top: 0!important;
  }
  .listContent{
    //margin: 0;
    padding: 0 49px;
    margin-left: 0!important;
    .titleContent{
      display: none;
    }
  }
  .listContent{
    .itemContent{
      border: none;
      font-size: 16px!important;
      &:nth-child(even){
        margin: 10px 10px 10px 0;
        border: none;
      }
      &:nth-child(odd){
        border: none;
        margin: 10px;

      }
    }
  }
  .carouselWrap{
    margin-bottom: 58px;
    width: 100%;
    &:last-of-type{
      margin-bottom: 0!important;
    }
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
  .adBanner{
    margin: 16px 0 30px 0;
    .title{
      font-size: 10px;
      margin: 0;
    }
    .content{
      font-size: 20px;
      height: 55px;
      margin: auto;
      width: calc(100% - 150px);
    }
  }

  .search{
    .itemSearch{
      margin: auto;
      width: calc(100% - 30px);
      .frm{
        .categories{
          padding: 10px;
          label{
            font-size: 12px;
          }
        }
      }
      .titleItem{
        font-size: 13.03px;
      }
    }
  }
  .titleBlock{
    font-size: 12px;
    text-align: center;
    margin: 0;
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
    padding: 0 49px;
    margin-bottom: 65px;
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
    padding: 0 70px;
    .content{
      font-size: 32px;
      height: 150px;
      // margin: 0 30px;
      margin: auto;
      // width: calc(100% - 98px);
    }
  }
}
.d-flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
