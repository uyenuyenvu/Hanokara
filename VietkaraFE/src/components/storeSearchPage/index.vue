<template>
  <div class="container">
    <div class="adBanner">
      <div class="title">【広告】</div>
      <div class="content"> Jバナー広告 </div>
    </div>
    <div class="search">
      <div class="titleBlock"> 女の子をさがす </div>
      <div class="itemSearch">
        <div class="titleItem"> 名前を検索 </div>
        <div class="frm" action="">
          <div class="frm1">
            <input class="searchIp" type="text" v-model="castName" @keydown.enter="searchCastName" placeholder="例）かな カナ ABC">
            <button class="btn" @click="searchCastName"> 検索 </button>
          </div>
          <v-btn
            class="keyword-search-btn"
            color="pink-accent-1"
            text-color="white"
            width="200px"
            :variant="isExpanded ? 'flat' : 'outlined'"
            style="border-radius: 25px; font-weight: 900px; font-size: 20px;"
            @click="toggleExpand"
          >
            {{ isExpanded ? 'キーワード検索' : 'キーワード非表示' }}
          </v-btn>
          <v-expand-transition>
          <div v-if="isExpanded" class="categories">
            <div class="catTitle">※3つまで選択可能</div>
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
          </v-expand-transition>
          <PositionDialog v-model="showPositionDialog" />
        </div>
      </div>
    </div>
    <div class="carouselWrap">
      <div class="titleBlock">
        検索結果
      </div>
      <div class="note"> 該当件数：{{castCount}}件 </div>
      <div class="cards">
        <div class="v-row">
          <div class="v-col-3 card" v-for="cast in casts" :key="cast.id">
            <div class="avt">
              <img :src="cast.profile" alt="">
            </div>
            <div class="storeLabel">  <!-- 追加した部分 -->
              {{ cast.store_name }}
            </div>
            <div class="titleCard">
              {{ cast.cast_name }}
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <PaginationButton
          :current-page="currentPage"
          :total-pages="totalPages"
          @prev-page="fetchCastsWithFilters(currentPage - 1)"
          @next-page="fetchCastsWithFilters(currentPage + 1)"
        />
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
</template>

<script>
import { API } from '@/axios-api.js';
import PositionDialog from '@/components/castSearch/PositionDialog.vue';
import PaginationButton from "@/components/common/PaginationButton.vue";

export default {
  components: {
    PositionDialog,
    PaginationButton,
  },
  data() {
    return {
      casts: [], // キャストのデータを格納するための配列
      categories: [
        {
          name: '言語',
          items: [
            { model: 'language', id: 'cat1', name: 'cat1', value: '日本語', label: '言語：日本語' },
            { model: 'language', id: 'cat2', name: 'cat2', value: '英語', label: '言語：英語' },
            { model: 'language', id: 'cat3', name: 'cat3', value: 'その他', label: '言語：その他' },
          ],
        },
        {
          name: 'キャストタイプ',
          items: [
            { model: 'castType', id: 'cat4', name: 'cat4', value: '飲み系', label: '飲み系' },
            { model: 'castType', id: 'cat5', name: 'cat5', value: '面白い系', label: '面白い系' },
            { model: 'castType', id: 'cat6', name: 'cat6', value: 'かわいい系', label: 'かわいい系' },
            { model: 'castType', id: 'cat7', name: 'cat7', value: 'きれい系', label: 'きれい系' },
          ],
        },
        {
          name: 'オプション',
          items: [
            { model: 'castType', id: 'cat8', name: 'cat8', value: '連絡大歓迎', label: '連絡大歓迎' },
            { model: 'castType', id: 'cat9', name: 'cat9', value: 'foreign', label: '外国人' },
            { model: 'castType', id: 'cat10', name: 'cat10', value: 'position', label: '役職あり' },
            { model: 'castType', id: 'cat11', name: 'cat11', value: 'isNew', label: '新規掲載' },
          ]
        },
        {
          name: '年代',
          items: [
            { model: 'age_ranges', id: 'cat12', name: 'cat12', value: '10s', label: '10代' },
            { model: 'age_ranges', id: 'cat13', name: 'cat13', value: '20s', label: '20代' },
            { model: 'age_ranges', id: 'cat14', name: 'cat14', value: '30s', label: '30代' },
            { model: 'age_ranges', id: 'cat15', name: 'cat15', value: '40s', label: '40代' },
            { model: 'age_ranges', id: 'cat16', name: 'cat16', value: 'beginner', label: '初心者' },
          ],
        },
      ],
      isAnyPositionSelected: false,
      showPositionDialog: false,
      isExpanded: false,
      selectAll: false,
      currentPage: 1,
      castName: '',
      castCount: '',
      totalPages: 0,  // APIから取得する合計ページ数
      storeInfo: {}, // 店舗情報を格納するためのオブジェクト
      selectedCategories: {
        language: [],
        castType: [],
        isContact: false,
        isForeign: false,
        castPosition: [],
        ageRanges: [],
        isNew: false,
        isBeginner: false
      }, // 選択されたカテゴリーを格納するための配列
      // 必要に応じて他のデータプロパティを追加
    };
  },
  mounted() {
    // 画面初期表示時にキャストのデータを取得
    this.fetchCastsWithFilters({ page: this.currentPage });
    // 必要に応じて他のAPI呼び出しメソッドを実行
  },
  computed: {
    isPositionSelected() {
      return this.selectedCategories.castPosition.length > 0;
    },
    totalChecked() {
      let count = 0;
      for (let key in this.selectedCategories) {
        if (Array.isArray(this.selectedCategories[key])) {
          count += this.selectedCategories[key].length;
        } else if (this.selectedCategories[key]) {
          count++;
        }
      }
      return count;
    },
    isCheckboxDisabled() {
      return this.totalChecked >= 3;
    },
  },
  methods: {
    // キャストのデータを取得するメソッド
    async fetchCastsWithFilters(filters) {
      console.log(filters);
      if (!filters) {
        filters = { ...this.selectedCategories, page: this.currentPage };
      }
        // 空のフィルタを削除
      for (const key in filters) {
        if (!filters[key] || (Array.isArray(filters[key]) && !filters[key].length)) {
          delete filters[key];
        }
      }
      try {
        const response = await API.get('casts/', { params: filters });
        this.casts = response.data.results;
        console.log(response.data.results);
        this.castCount = response.data.total_count;
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.total_pages;
      } catch (error) {
        console.error('データの取得に失敗:', error);
      }
    },
    // searchCastName() {
    //   API.get(`casts/?cast_name=${this.castName}`)
    //   .then(response => {
    //     this.casts = response.data.results;
    //     this.castCount = response.data.total_count;
    //     this.currentPage = response.data.current_page;
    //     this.totalPages = response.data.total_pages;
    //   })
    //   .catch(error => {
    //     console.error('キャストの検索に失敗:', error);
    //   });
    // },
    searchCastName() {
      this.fetchCastsWithFilters({ cast_name: this.castName });
    },
    // キーワード検索
    keywordSearch() {
    const filters = {
      is_new: this.selectedCategories.isNew === 'isNew',
      is_beginner: this.selectedCategories.isBeginner === 'beginner',
      age_ranges: this.selectedCategories.ageRanges
    };
      this.fetchCastsWithFilters(filters);
    },
    handleCheckboxChange(category) {
      if (category.label === '役職あり') {
        this.showPositionDialog = true;
      } else {
        this.keywordSearch();
      }
    },
    updateSelectedPositions(positions) {
      this.selectedCategories.castPosition = positions;
      if (positions.length > 0) {
        this.keywordSearch();
      }
    },
    // キャストの詳細データを取得するメソッド
    async fetchCastDetail(castId) {
      try {
        const response = await API.get(`casts/${castId}/`);
        this.storeInfo = response.data;
        // 必要に応じてデータを格納
      } catch (error) {
        console.error('キャストの詳細データの取得に失敗:', error);
      }
    },
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    handleCheckboxClick() {
      this.showPositionDialog = true;
    },
    updatePosition(positions) {
      this.selectedCategories.castPosition = positions;
      this.showPositionDialog = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.keyword-search-btn {
  margin: 0 auto;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  ::v-deep(.v-btn__content) {
    padding: 0;
    font-weight: bold;
  }
}

/* チェックボックスとラベルを横並びにする */
.checkbox-wrapper {
  display: inline-block;
}

.container{
  padding: 50px 100px;
}

.cards{
    width: 91%;
    margin: 30px 0px;
    margin-left: 4%;
}
.card{
    text-align: center;
    padding: 2px 0 0 2px;
    .avt{
        border:1px black solid ;
        background-color: #D9D9D9;
        height: 124px;
        img{
            height: 100%;
        }
    }
}
.titleCard{
  background-color: #F37497;
  font-size: 12px;
  font-weight: bold;
  color: white;
  padding: 8px 10px;
  height: 29px;
}
.storeLabel {
    background-color: black;
    color: white;
    text-align: center;
}
.mb{
  display: none;
}
.carouselWrap{
  width: calc(100% - 50px);
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
  margin-bottom: 10px;
  margin-top: 10px;
}
.backShop{
  background-color: #F37497;
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
          border: 3px solid #F37497;
          padding: 3px 0 3px 8px;
        }
        .btn{
          width: 20%;
          border: 3px solid #F37497;
          float: right;
          padding: 3px;
          background-color: #D9D9D9;
          color: #000;
          font-weight: bold;
        }
      }
      .categories{
        border: 3px solid #F37497;
        width: 100%;
        margin-top: 30px;
        padding: 10px 30px;
        .catTitle{
          font-weight: bold;
          font-size: 10px;
          color: #F37497;
        }
        label{
          margin-right: 5px;
          color: #000;
          font-size: 12px;
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
  color: #000;
  padding-left: 20px;
  font-weight: bold;
  font-size: 14px;
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
        color: #F37497;
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
.btn-all-actor{
  font-weight: bold;
    width: 55%;
    font-size: 12px;
    padding: 10px 0;
    border: 3px #F37497 solid;
    color: #F37497;
    border-radius: 25px;
    margin: auto;
    margin: 20px 22.5% 0 22.5%;
    u{
        font-weight: bold;
    }
}
.btn-all-actor:hover{
    background-color: #F37497;
    color: #fff;
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
    margin-top: 20px;
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
      width: calc(100% - 50px);
      .titleItem{
        font-size: 13.03px;
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
