<template>
  <div class="container">
    <div class="v-row">
      <div class="v-col-xs-12 v-col-lg-8 v-col-md-8 p0">

        <div class="adBanner">
          <div class="title">【広告】</div>
          <div class="content"> Fバナー広告 </div>
        </div>
        <div class="search">
          <div class="titleBlock"> お店をさがす </div>
          <div class="itemSearch">
            <div class="titleItem"> 店舗を検索 </div>
            <div class="frm">
              <div class="frm1">
                <input class="searchIp" type="text" placeholder="例）かな　カナ　ABC">
                <button class="btn"> 検索 </button>
              </div>
              <div class="categories">
                      <div v-for="group in categories" :key="group.name">
                        <div
                          v-for="category in group.items"
                          :key="category.id"
                          class="checkbox-wrapper"
                          >
                          <input
                            type="checkbox"
                            v-model="selectedCategories[category.model]"
                            :id="category.id"
                            :name="category.name"
                            :value="category.value"
                            :disabled="isCheckboxDisabled && !isSelected(category)"
                            @change="handleCheckboxChange(category)"
                          >
                          <label :for="category.id">{{ category.label }}</label>
                        </div>
                      </div>
                    </div>
              <!-- <div class="categories">
                <div class="d-flex">
                  <div class="form-check-box"><input type="checkbox" id="cat1" name="cat1" value="">
                    <label for="cat1"> カラオケ </label></div>
                  <div class="form-check-box"><input type="checkbox" id="cat2" name="cat2" value="">
                    <label for="cat2"> ガールズバー </label></div>
                  <div class="form-check-box"><input type="checkbox" id="cat3" name="cat3" value="">
                    <label for="cat3"> ラウンジ </label></div>
                  <div class="form-check-box"><input type="checkbox" id="cat4" name="cat4" value="">
                    <label for="cat4"> 新規掲載店 </label></div>
                </div>
                <div class="d-flex">
                  <div class="form-check-box"><input type="checkbox" id="cat5" name="cat5" value="">
                    <label for="cat5"> リンラン </label></div>
                  <div class="form-check-box"><input type="checkbox" id="cat6" name="cat6" value="">
                    <label for="cat6"> キンマー </label></div>
                  <div class="form-check-box"><input type="checkbox" id="cat7" name="cat7" value="">
                    <label for="cat7"> その他のエリア </label></div>
                  <div class="form-check-box"><input type="checkbox" id="cat8" name="cat8" value="">
                    <label for="cat8"> 割引情報 </label></div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <div class="carouselWrap">
          <div class="titleBlock">
            店舗一覧
          </div>
          <div class="note"> 該当件数：{{ storeCount }} </div>
          <div class="newWrap">
            <SearchTable v-for="store in stores" :key="store.id" :store="store" />
            <!-- <div class="itemNew" v-for="store in stores" :key="store.id">
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
            </div> -->
          </div>
          <div class="backShop">
            <a href="">お店をさがすに戻る</a>
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
            <div class="v-col-lg-12 v-col-md-12 v-col-sm-6 v-col-6 p0"
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
import SeaechTable from "@/components/common/SearchTable.vue";

export default {
  name: 'StoreSearch',
  components: {
    SeaechTable,
  },
  data() {
    return {
      stores: [],
      storeDetails: null,
      searchQuery: '',
      storeCount: '',
      currentPage: 1,
      totalPages: 0,
      selectedCategories: [],
      categories: [
        {
          name: 'storeCategory',
          items: [
            { model: 'storeCategory', id: 'cat1', name: 'cat1', value: 'カラオケ', label: 'カラオケ' },
            { model: 'storeCategory', id: 'cat2', name: 'cat2', value: 'ガールズバー', label: 'ガールズバー' },
            { model: 'storeCategory', id: 'cat3', name: 'cat3', value: 'ラウンジ', label: 'ラウンジ' },
            { model: 'storeCategory', id: 'cat4', name: 'cat4', value: 'キャバクラ', label: 'キャバクラ' },
          ],
        },
        {
          name: 'area',
          items: [
            { model: 'storeArea', id: 'cat5', name: 'cat5', value: 'リンラン', label: 'リンラン' },
            { model: 'storeArea', id: 'cat6', name: 'cat6', value: 'キンマー', label: 'キンマー' },
            { model: 'storeArea', id: 'cat7', name: 'cat7', value: 'ダオタン', label: 'ダオタン' },
            { model: 'storeArea', id: 'cat8', name: 'cat8', value: 'その他のエリア', label: 'その他のエリア' },
          ]
        },
        {
          name: 'info',
          items: [
            { model: 'storeInfo', id: 'cat9', name: 'cat9', value: '新規掲載店', label: '新規掲載店' },
            { model: 'storeInfo', id: 'cat10', name: 'cat10', value: '割引情報', label: '割引情報' },
            { model: 'storeInfo', id: 'cat11', name: 'cat11', value: 'イベント情報', label: 'イベント情報' },
          ]
        }
      ],
    };
  },
  methods: {
    ...mapMutations(['UPDATE_BREADCRUMBS','UPDATE_IMAGE_COMPARE']),
    async fetchStores() {
      try {
        const response = await API.get('stores/', {
          params: {
            area_id: this.selectedArea,
            category_ids: this.selectedCategories,
          }
        });
        this.stores = response.data.results;
        this.storeCount = response.data.total_count;
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
    handleResize() {
     let width = window.innerWidth;
      if (width>600){
        this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/PC_StoreSearch.png')
      }else{
        this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/MB_StoreSearch.png')

      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.fetchStores(); // コンポーネントがマウントされたときに店舗のリストを取得

    this.UPDATE_BREADCRUMBS([
      {
        title: 'ホーム',
        url:'/'
      },
      {
        title: 'お店をさがす',
      },
    ])
    this.handleResize()
  }
};
</script>

<style lang="scss" scoped>
.container{
  padding: 38px 295px;
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
.backShop{
  background-color: #FF789D;
  text-align: center;
  width: 40%;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 30px;
  a{
    padding: 10px;
    font-size: 12px;
    color: white;
  }
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
      // .categories{
      //   border: 3px solid #FF789D;
      //   width: 100%;
      //   margin-top: 30px;
      //   padding: 10px 30px;
      //   input{
      //   }
      //   label{
      //     margin-right: 10px;
      //     color: #000;
      //     font-size: 18px;
      //     font-weight: bold;
      //   }
      // }
      .categories {
        border: 3px solid #FF789D;
        // width: 100%;
        margin-top: 30px;
        padding: 10px 30px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px; /* 各アイテム間の余白 */
      }
      label{
          margin-right: 10px;
          color: #000;
          font-size: 18px;
          font-weight: bold;
      }

      .category-group {
        display: flex;
        flex-direction: column; /* カテゴリーグループ内のアイテムを縦に並べる */
        align-items: flex-start; /* 左揃え */
        margin-right: 10px; /* グループ間の余白 */
      }

      .checkbox-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 10px; /* チェックボックス間の余白 */
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

  .listContent{
    //margin: 0;
    padding: 0 20px;
    margin-left: 0!important;
    .titleContent{
      display: none;
    }
  }
  .carouselWrap{
    .blockImageBottom{
      .title{
        margin-bottom: 6px;
      }
    }
  }
  .backShop{
    margin: 58px 0 42px 0;
    margin: auto;
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
  .container{
    padding: 0;
  }
  .carouselWrap{
    width: 100%;

    &:last-of-type{
      margin-bottom: 0!important;
    }
  }
  .padding-top-0-mb{
    padding-top: 0!important;
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
    padding-top: 8px;
    padding-bottom: 23px;
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
          padding: 17px 15px;
          margin-top: 25px;
          margin-left: 19px;
          margin-right: 22px;
          margin-bottom: 62px;
          label{
            font-size: 12px;
          }
        }
        .frm1{
          padding: 0 55px;
        }
      }
      .titleItem{
        font-size: 13.03px;
        padding: 0 55px;
        margin-bottom: 5px;
        margin-top: 22px;
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
    .itemContent{
      border: 1px solid black;
      font-size: 20.3px;
      &:nth-child(even){
        margin: 10px 10px 10px 0;
      }
      &:nth-child(odd){
        margin: 4px;

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
    .content{
      font-size: 21px;
      height: 150px;
      margin: 0 51px;
      width: calc(100% - 102px);
    }
  }
}
.d-flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.listContent{
  padding: 0 46px 0 43px;
  position: relative;
  .titleContent{
    color: #AFADAD;
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
  }
  .itemContent{
    height: 80px;
    width: max-content;
    display: flex;
    margin: 4px !important;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 36px;
    padding: 60px;
    color:black;
    background-color: #D9D9D9;
  }
}
</style>
