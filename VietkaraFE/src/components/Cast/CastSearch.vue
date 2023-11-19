<template>
<div class="container">
    <div class="v-row">
        <div class="v-col-xs-12 v-col-lg-8 p0">
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
                        <v-btn class="keyword-search-btn" color="pink-accent-1" text-color="white" width="200px" :variant="isExpanded ? 'flat' : 'outlined'" style="border-radius: 25px; font-weight: 900px; font-size: 20px;" @click="toggleExpand">
                            {{ isExpanded ? 'キーワード検索' : 'キーワード非表示' }}
                        </v-btn>
                        <v-expand-transition>
                            <div v-if="isExpanded" class="categories">
                                <div class="catTitle">※3つまで選択可能</div>
                                <div v-for="group in categories" :key="group.name">
                                    <div v-for="category in group.items" :key="category.id" class="checkbox-wrapper">
                                        <input type="checkbox" v-model="selectedCategories[category.model]" :id="category.id" :name="category.name" :value="category.value" :disabled="isCheckboxDisabled && !isSelected(category)" @change="handleCheckboxChange(category)">
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
                            <div @click="goToCastDetail(cast.cast_id)" class="avt">
                                <img :src="cast.profile" alt="">
                            </div>
                            <div @click="goToCastDetail(cast.cast_id)" class="storeLabel">
                                {{ cast.store_name }}
                            </div>
                            <div @click="goToCastDetail(cast.cast_id)" class="titleCard">
                                {{ cast.cast_name }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <PaginationButton :current-page="currentPage" :total-pages="totalPages" @prev-page="fetchCastsWithFilters(currentPage - 1)" @next-page="fetchCastsWithFilters(currentPage + 1)" />
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
        <div class="v-col-xs-12 v-col-lg-4 p0">
            <div class="listContent">
                <v-row class="margin-top-0 margin-10-mb" no-gutters>
                    <div class="v-col-lg-12 v-col-md-12 v-col-sm-6 v-col-6 " v-for="index in [1,2,3,4]" :key="index">
                        <div class="itemContent">A広告</div>
                    </div>
                </v-row>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    API
} from '@/axios-api.js';
import PositionDialog from '@/components/Cast/PositionDialog.vue';
import PaginationButton from "@/components/common/PaginationButton.vue";
import {
    mapMutations
} from "vuex";

export default {
    components: {
        PositionDialog,
        PaginationButton,
    },
    data() {
        return {
            casts: [], // キャストのデータを格納するための配列
            categories: [{
                    name: '言語',
                    items: [{
                            model: 'language',
                            id: 'cat1',
                            name: 'cat1',
                            value: '日本語',
                            label: '言語：日本語'
                        },
                        {
                            model: 'language',
                            id: 'cat2',
                            name: 'cat2',
                            value: '英語',
                            label: '言語：英語'
                        },
                        {
                            model: 'language',
                            id: 'cat3',
                            name: 'cat3',
                            value: 'その他',
                            label: '言語：その他'
                        },
                    ],
                },
                {
                    name: 'キャストタイプ',
                    items: [{
                            model: 'castType',
                            id: 'cat4',
                            name: 'cat4',
                            value: '飲み系',
                            label: '飲み系'
                        },
                        {
                            model: 'castType',
                            id: 'cat5',
                            name: 'cat5',
                            value: '面白い系',
                            label: '面白い系'
                        },
                        {
                            model: 'castType',
                            id: 'cat6',
                            name: 'cat6',
                            value: 'かわいい系',
                            label: 'かわいい系'
                        },
                        {
                            model: 'castType',
                            id: 'cat7',
                            name: 'cat7',
                            value: 'きれい系',
                            label: 'きれい系'
                        },
                    ],
                },
                {
                    name: 'キャストタイプ2',
                    items: [{
                            model: 'castType',
                            id: 'cat8',
                            name: 'cat8',
                            value: '飲み系',
                            label: '癒し系'
                        },
                        {
                            model: 'castType',
                            id: 'cat9',
                            name: 'cat9',
                            value: '面白い系',
                            label: 'クール系'
                        },
                        {
                            model: 'castType',
                            id: 'cat10',
                            name: 'cat10',
                            value: 'かわいい系',
                            label: 'お姫さま系'
                        },
                        {
                            model: 'castType',
                            id: 'cat11',
                            name: 'cat11',
                            value: 'セクシー系',
                            label: 'セクシー系'
                        },
                        {
                            model: 'castType',
                            id: 'cat12',
                            name: 'cat12',
                            value: 'きれい系',
                            label: '歌姫'
                        },
                    ],
                },
                {
                    name: 'オプション',
                    items: [{
                            model: 'castType',
                            id: 'cat13',
                            name: 'cat13',
                            value: '連絡大歓迎',
                            label: '連絡大歓迎'
                        },
                        {
                            model: 'castType',
                            id: 'cat14',
                            name: 'cat14',
                            value: 'foreign',
                            label: '外国人'
                        },
                        {
                            model: 'castType',
                            id: 'cat15',
                            name: 'cat15',
                            value: 'position',
                            label: '役職あり'
                        },
                        {
                            model: 'castType',
                            id: 'cat16',
                            name: 'cat16',
                            value: 'isNew',
                            label: '新規掲載'
                        },
                    ]
                },
                {
                    name: '年代',
                    items: [{
                            model: 'age_ranges',
                            id: 'cat17',
                            name: 'cat17',
                            value: '10s',
                            label: '10代'
                        },
                        {
                            model: 'age_ranges',
                            id: 'cat18',
                            name: 'cat18',
                            value: '20s',
                            label: '20代'
                        },
                        {
                            model: 'age_ranges',
                            id: 'cat19',
                            name: 'cat19',
                            value: '30s',
                            label: '30代'
                        },
                        {
                            model: 'age_ranges',
                            id: 'cat20',
                            name: 'cat20',
                            value: '40s',
                            label: '40代'
                        },
                        {
                            model: 'age_ranges',
                            id: 'cat21',
                            name: 'cat21',
                            value: 'beginner',
                            label: '初心者'
                        },
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
            totalPages: 0, // APIから取得する合計ページ数
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
    created() {
        window.addEventListener('resize', this.handleResize);
    },
    mounted() {
        this.handleResize()
        // 画面初期表示時にキャストのデータを取得
        this.fetchCastsWithFilters({
            page: this.currentPage
        });
        // 必要に応じて他のAPI呼び出しメソッドを実行

        this.UPDATE_BREADCRUMBS([{
                title: 'ホーム',
                url: '/'
            },
            {
                title: 'お店をさがす',
                url: '/store-search'
            },
            {
                title: 'ハノイ',
            },
        ])
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
        ...mapMutations(['UPDATE_BREADCRUMBS', 'UPDATE_IMAGE_COMPARE']),
        handleResize() {
            let width = window.innerWidth;
            if (width > 600) {
                // this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/PC_Home.png')
            } else {
                this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/MB_CastSearch.png')
            }
        },

        // キャストのデータを取得するメソッド
        async fetchCastsWithFilters(filters) {
            console.log(filters);
            if (!filters) {
                filters = {
                    ...this.selectedCategories,
                    page: this.currentPage
                };
            }
            // 空のフィルタを削除
            for (const key in filters) {
                if (!filters[key] || (Array.isArray(filters[key]) && !filters[key].length)) {
                    delete filters[key];
                }
            }
            try {
                const response = await API.get('casts/', {
                    params: filters
                });
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
            this.fetchCastsWithFilters({
                cast_name: this.castName
            });
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
        goToCastDetail(castId) {
            this.$router.push({
                name: 'CastPage',
                params: {
                    castId
                }
            });
        },
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

.container {
    padding: 50px 100px;
}

.cards {
    width: 100%;
    margin: 10px 5px;

    .v-row {
        display: flex;
        justify-content: space-around;
        /* これでカード間の間隔が均等になります */
        flex-wrap: wrap;
    }
}

.card {
    text-align: center;
    box-sizing: border-box;
    /* ボーダーのサイズを含めた全体のサイズを確保します */
    width: calc(33.3333% - 4px);

    /* グリッドの1/3の幅を持つカード。マージンやパディングの分を引きます */
    .avt {
        border: 1px black solid;
        background-color: #D9D9D9;
        height: 175px;
        /* 固定の高さ */
        width: calc(175px * (2/3));
        position: relative;
        /* 画像を絶対位置で配置するため */
        margin: 0 auto;

        /* センタリング */
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .titleCard {
        background-color: #FF789D;
        font-size: 12px;
        font-weight: bold;
        color: white;
        padding: 8px 10px;
        width: 120px;
        margin: 0 auto;
        /* センタリング */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .storeLabel {
        background-color: black;
        color: white;
        margin: 0 auto;
        /* センタリング */
        width: 120px;
        font-size: 12px;
    }
}
.p0{
  padding: 0;
}
.mb {
    display: none;
}

.carouselWrap {
    //width: calc(100% - 50px);
    margin-bottom: 50px;
}

.carouselItem {
    position: relative;
    width: 100%;
    height: 100%;
}

.imageCarousel {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.titleCarousel-stroker {
    font-weight: bold;
    font-size: 24px;
    -webkit-text-stroke: 3px #FFFFFF;
    position: absolute;
    top: 30px;
    left: 30px;
    line-height: 30px;
    max-width: 70%;
}

.titleCarousel {
    font-weight: bold;
    font-size: 24px;
    color: #6DB7FC;
    position: absolute;
    top: 30px;
    line-height: 30px;
    left: 30px;
    max-width: 70%;
}

.descriptionCarousel {
    background-color: #181818;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .textWrap {
        .textDes {
            background-color: #D9D9D9;
            color: black;
            font-size: 12px;
            font-weight: bold;
            padding: 5px 20px;

            &:first-of-type {
                margin-bottom: 10px;
            }
        }
    }

    .btn-wrap {
        .btn-pink {
            font-weight: bold;
            font-size: 16px;
            color: white;
            background-color: #FF789D;
            padding: 5px 30px;
            border-radius: 25px;
            text-decoration: underline;
        }
    }
}

.titleBlock {
    background-color: #2D2427;
    font-size: 22px;
    font-weight: bold;
    color: white;
    padding: 10px 50px;
    margin-bottom: 10px;
    margin-top: 10px;
}

.backShop {
    background-color: #FF789D;
    text-align: center;
    width: 40%;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 30px;

    a {
        padding: 10px;
        font-size: 10px;
        color: white;
    }
}

.block-radius {
    background-color: white;
    border-radius: 11px;
    margin-top: 10px;
    box-shadow: 0 7.17px 7.17px 7.17px #00000052;
    cursor: pointer;

    &:hover {
        box-shadow: none;
        border: 1px solid #00000052;
    }

    .title-block-radius {
        color: black;
        font-size: 36px;
        font-weight: bold;
        text-decoration: underline;
        text-align: center;
        margin-top: 10px;
    }
}

.padding-10px {
    padding: 10px;
}

.padding-20px {
    padding: 20px;
}

.imageStyle1 {
    width: 100%;
    background: black;
    padding: 7px 7px 7px 7px;
    border-radius: 13px;
    height: max-content;

    img {
        width: 100%;
    }
}

.margin-top-10 {
    margin: 10px 0;
}

.adBanner {
    .title {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #AFADAD;
        margin-bottom: 10px;
    }

    .content {
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

.search {
    .itemSearch {
        .titleItem {
            font-size: 20px;
            padding: 0 25px;
            font-weight: bold;
            color: #D6D5D5;
        }

        .frm {
            .frm1 {
                padding: 0 25px;

                .searchIp {
                    width: 75%;
                    border: 3px solid #FF789D;
                    padding: 3px 0 3px 8px;
                }

                .btn {
                    width: 20%;
                    border: 3px solid #FF789D;
                    float: right;
                    padding: 3px;
                    background-color: #D9D9D9;
                    color: #000;
                    font-weight: bold;
                }
            }

            .categories {
                border: 3px solid #FF789D;
                margin-top: 30px;
                padding: 10px 30px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                .catTitle {
                    font-weight: bold;
                    font-size: 20px;
                    color: #FF789D;
                    margin-bottom: 15px;
                }

                .checkbox-wrapper {
                    display: inline-block;
                    margin-bottom: 16px;
                    justify-content: space-evenly
                }

                input[type="checkbox"] {
                    margin-right: 10px;
                    /* チェックボックスとラベルの間隔を調整 */
                }

                label {
                    margin-right: 5px;
                    color: #000;
                    font-size: 14px;
                    font-weight: bold;
                }
            }
        }
    }
}

.blockImageBottom {
    margin-top: 50px;

    .title {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #AFADAD;
        margin-bottom: 10px;
    }

    .content {
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

.note {
    color: #000;
    padding-left: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 14px;
}

.newWrap {
    width: 100%;
    overflow-y: scroll;
    padding-top: 20px;
    height: 610px;

    .itemNew {
        display: flex;
        border-bottom: 2px solid #AFADAD;
        padding: 20px 0;

        .avatarNew {
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

            .avtDefault {
                font-weight: bold;
            }
        }

        .contentNew {
            .textTitle {
                color: #FF789D;
                font-size: 13px;
                line-height: 16px;
                font-weight: bold;
                margin-bottom: 5px;
            }

            .textContent {
                color: #181818;
                font-weight: bold;
                margin-bottom: 5px;
                font-size: 15px;
            }
        }
    }
}

.margin-top-0 {
    margin-top: 0;
}

.btn-all-actor {
    font-weight: bold;
    width: 55%;
    font-size: 12px;
    padding: 10px 0;
    border: 3px #FF789D solid;
    color: #FF789D;
    border-radius: 25px;
    margin: auto;
    margin: 20px 22.5% 0 22.5%;

    u {
        font-weight: bold;
    }
}

.btn-all-actor:hover {
    background-color: #FF789D;
    color: #fff;
}

@media only screen and (max-width: 600px) {
    .container {
        padding: 0;
    }

    .carouselWrap {
        width: auto;
        margin-bottom: 0;
    }

    .listContent {
        margin: 0 49px 60px 49px !important;

        .itemContent {
            height: 74px!important;
            border: none;
            font-size: 17.41px!important;
          margin: 4px 2px 0 2px;
          margin-bottom: 0!important;

        }
    }

    .carouselItem {
        padding: 0 30px;
        background-image: url(/src/assets/images/image3.png);
        background-position: 100% 100%;
        background-size: cover;
    }

    .titleCarousel-stroker {
        font-size: 11px;
        top: 10px;
        left: 40px;
        line-height: 20px;
        max-width: 90%;
    }

    .titleCarousel {
        font-size: 11px;
        top: 10px;
        line-height: 20px;
        left: 40px;
        max-width: 90%;
    }

    .descriptionCarousel {
        justify-content: center;

        .textWrap {
            display: none;
        }

        .btn-wrap {
            .btn-pink {
                font-size: 10px;
            }
        }
    }

    .adBanner {
        margin-top: 2px;

        .title {
            font-size: 16px;
            margin: 0;
            //opacity: 0;
        }

        .content {
            font-size: 25px;
          height: 52px;
          margin: auto;
          margin-bottom: 30px;
          padding: 0px 0;
          width: calc(100% - 183px);
        }
    }

  .keyword-search-btn{
    width: 200px;
    border-radius: 25px;
    font-size: 13px;
    height: 25px!important;
  }


  .titleBlock {
    margin: 0;
    padding: 5px 10px;
  }
    .search {
        .titleBlock {
            margin: 0;
          padding: 5px 10px;
        }

        .itemSearch {
            margin: auto;
            // width: calc(100% - 30px);
            margin-top: 22px;

            .titleItem {
                padding-left: 70px;
                color: #b5b5b5;
                font-size: 12px;
            }

            .frm {
                    margin-bottom: 19px;
                .frm1 {
                    padding: 0 71px 0 64px;
                    margin-bottom: 19px;
                  .searchIp{
                    padding:  0 0 0 8px;
                  }
                  .btn{
                    padding: 0;
                  }
                }

                .categories {
                    padding: 14px 16px;
                    margin: 0 19px 28px 19px;
                    input{
                      line-height: px;
                    }
                    label {
                        font-size: 15px;
                        font-weight: bold;
                    }
                }
            }
        }
    }

    .titleBlock {
        font-size: 12px;
        text-align: center;
    }

    .padding-20px {
        padding: 10px;
    }

    .block-radius {
        box-shadow: 0 4.63px 4.63px 4.63px #00000052;
        cursor: pointer;

        :hover {
            box-shadow: none;
            border: 1px solid #00000052;
        }

        .title-block-radius {
            font-size: 18.5px;
        }
    }

    .margin-10-mb {
        margin: 10px;
    }

    .margin-0-mb {
        margin: 0;
    }

    .imageStyle1 {
        padding: 3px 3px 0;
        border-radius: 10px;

        img {
            border-radius: 10px;
        }
    }

    :deep {
        .v-window__controls {
            padding: 0 5px !important;
        }
    }

    .newWrap {
        padding-top: 10px;
        height: 475px;

        .itemNew {
            padding: 10px 0;

            .avatarNew {
                margin-left: 10px;
                font-size: 15px;
                margin-right: 20px;
                width: 60px;
                height: 60px;
            }

            .contentNew {
                .date {
                    font-size: 10px;
                }

                .textContent {
                    font-size: 12px;
                    line-height: 20px;
                }
            }
        }
    }

    .mb {
        display: block;
    }

  .carouselWrap{
    .blockImageBottom{
      .title{
        margin-bottom: 1px;
        font-size: 13px;
      }
    }
  }
  .blockImageBottom {
    margin-top: 0;
    padding: 0 49px;

    .content {
      font-size: 32px;
      height: 150px;
      // margin: 0 30px;
      margin: auto;
      // width: calc(100% - 98px);
    }
  }
}

.listContent {
    margin-left: 50px;
    position: relative;

    .titleContent {
        //position: absolute;
        //top: -5px;
        text-align: center;
        margin-bottom: 10px;
        color: #AFADAD;
        font-size: 20px;
        //left: 50%;
        //transform: translateX(-50%) translateY(-100%);
    }

    .itemContent {
        height: 165px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 2rem;
        font-weight: bold;
        font-size: 36px;
        color: black;
        margin-bottom: 20px;
        background-color: #D9D9D9;
    }
}

.d-flex {
    display: flex;
    justify-content: space-between;
}
</style>
