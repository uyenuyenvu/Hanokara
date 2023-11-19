<script>
import {
    mapMutations
} from 'vuex'
import {
    API
} from '@/axios-api.js';
import {
    VueImageZoomer
} from 'vue-image-zoomer'
import 'vue-image-zoomer/dist/style.css';

export default {
    name: 'CastDetail',
    components: {
        VueImageZoomer: VueImageZoomer,
    },
    data() {
        return {
            castDetails: {
                cast_name: '',
                age: '',
                alcohol_strength: Number,
                birthday: Date,
                languages: [],
                castsns: [],
                comment: '',
                height: Number,
                is_beginner: Boolean,
                is_contact: Boolean,
                nationality: '',
                phone_number: '',
                position: '',
                private_age: Boolean,
                private_height: Boolean,
                profile: Image,
                promotion_movie: '',
                store_name: '',
                types: [],
            },
            storeDetails: {
                casts: [],
                nationality_ratio: '',
                categories: [],
                discount: [],
                events: [],
                menus: [],
                store: {},
            },
        };
    },
    created() {
        window.addEventListener('resize', this.handleResize);
    },
    mounted() {
        this.handleResize()
        this.UPDATE_BREADCRUMBS([{
                title: 'ホーム',
                url: '/'
            },
            {
                title: 'お店をさがす',
                url: '/store-search'
            },
            {
                title: '【店名】',
            },
            {
                title: 'キャスト詳細',
            }
        ]);
        this.fetchCastDetail();
    },
    methods: {
        ...mapMutations(['UPDATE_BREADCRUMBS', 'UPDATE_IMAGE_COMPARE']),
        handleResize() {
            let width = window.innerWidth;
            if (width > 600) {
                // this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/PC_Home.png')
            } else {
                this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/MB_CastPage.png')
            }
        },
        async fetchCastDetail() {
            try {
                const castId = this.$route.params.castId;
                const castRes = await API.get(`casts/${castId}/`);
                this.castDetails = castRes.data;
                console.log(castRes);
                const storeId = this.castDetails.store;
                const storeRes = await API.get(`stores/${storeId}/`);
                this.storeDetails = storeRes.data;
                console.log(storeRes);
            } catch (error) {
                console.log(error);
            }
        },
    },
}
</script>
<template>
<div class="container">
    <div class="v-row">
        <div class="v-col-xs-12 p0 v-col-lg-8 v-col-md-8 v-col-xxl-8 v-col-xl-8">
            <div class="cast">
                <div class="v-row">
                    <div class="mb-padding-right-0 v-col-xxl-5 v-col-lg-5 v-col-md-5 v-col-xl-5 v-col-sm-5 v-col-xs-5 v-col-7">
                        <div class="avtCast">
                            <vue-image-zoomer regular="../../src/assets/images/castPage/avt.png" zoom="../../src/assets/images/castPage/avt.png" :zoom-amount="3" :show-message="false" img-class="img-fluid" />
                            <div class="status">
                                新規
                            </div>
                        </div>
                    </div>
                    <div class="mb-padding-left-0  v-col-xxl-7 v-col-lg-7 v-col-md-7 v-col-xl-7 v-col-sm-7 v-col-xs-7 v-col-5">
                        <div class="catTitle">プロフィール</div>
                        <div class="titleA">役職</div>
                        <div class="titleB">名前</div>
                        <div class="inf">
                            言　語：日本語<br>
                            年　齢：??歳<br>
                            身　長：XXXcm<br>
                            お　酒：強い<br>
                            【キーワード】
                        </div>
                        <div class="catTitle">例）新規掲載</div>
                        <div class="catTitle">例）連絡大歓迎</div>
                        <div class="catTitle">例）言語：日本語</div>
                    </div>
                </div>
            </div>
            <div class="cmt">コメント：{{ castDetails.comment }}</div>
            <div class="logo">
                <div class="v-row">
                    <div class="v-col-xxl-2 v-col-lg-2 v-col-md-2 v-col-xl-2 v-col-sm-2 v-col-xs-2 v-col-2">
                        <img src="@/assets/images/castPage/phone.svg" alt="">
                    </div>
                    <div class="v-col-xxl-2 v-col-lg-2 v-col-md-2 v-col-xl-2 v-col-sm-2 v-col-xs-2 v-col-2">
                        <img src="@/assets/images/castPage/line.svg" alt="">
                    </div>
                    <div class="v-col-xxl-2 v-col-lg-2 v-col-md-2 v-col-xl-2 v-col-sm-2 v-col-xs-2 v-col-2">
                        <img src="@/assets/images/castPage/zalo.svg" alt="">
                    </div>
                    <div class="v-col-xxl-2 v-col-lg-2 v-col-md-2 v-col-xl-2 v-col-sm-2 v-col-xs-2 v-col-2">
                        <img src="@/assets/images/castPage/ins.svg" alt="">
                    </div>
                    <div class="v-col-xxl-2 v-col-lg-2 v-col-md-2 v-col-xl-2 v-col-sm-2 v-col-xs-2 v-col-2">
                        <img src="@/assets/images/castPage/fb.svg" alt="">
                    </div>
                    <div class="v-col-xxl-2 v-col-lg-2 v-col-md-2 v-col-xl-2 v-col-sm-2 v-col-xs-2 v-col-2">
                        <img src="@/assets/images/castPage/tiktok.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="titleContent">
                フォトギャラリー
            </div>
            <div class="gallery">
                <div class="v-row">
                    <div class="v-col-xxl-6 v-col-lg-6 v-col-md-6 v-col-xl-6 v-col-sm-4 v-col-xs-4 v-col-4">
                        <img src="@/assets/images/castPage/gallery.png" alt="">
                    </div>
                    <div class="v-col-xxl-6 v-col-lg-6 v-col-md-6 v-col-xl-6 v-col-sm-4 v-col-xs-4 v-col-4">
                        <img src="@/assets/images/castPage/gallery.png" alt="">
                    </div>
                    <div class="v-col-xxl-6 v-col-lg- v-col-md-6  v-col-xl-6 v-col-sm-4 v-col-xs-4 v-col-4">
                        <img src="@/assets/images/castPage/gallery.png" alt="">
                    </div>
                    <div class="v-col-xxl-6 v-col-lg-6 v-col-md-6 v-col-xl-6 v-col-sm-4 v-col-xs-4 v-col-4">
                        <img class="hide" src="@/assets/images/castPage/gallery.png" alt="">
                    </div>
                    <button class="btn-all-actor"><u> すべてのフォトギャラリー </u></button>
                </div>
            </div>
            <div class="titleContent">
                プロモーションムービー
            </div>
            <div class="adv">
                <iframe width="944" height="531" src="https://www.youtube.com/embed/V0e2cgpOrJQ" title="JustaTee - Bâng Khuâng [ OFFICIAL MV ]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <!--        <div class="titleContent">-->
            <!--          ブログ-->
            <!--        </div>-->
            <!--        <div class="endCast">-->
            <!--          <div class="v-row">-->
            <!--            <div class="v-col-xxl-3 v-col-lg-3 v-col-md-3 v-col-xl-3 v-col-sm-4 v-col-xs-4 v-col-4">-->
            <!--              <img src="@/assets/images/castPage/endCast.png" alt="">-->
            <!--            </div>-->
            <!--            <div class="v-col-xxl-9 v-col-lg-9 v-col-md-9 v-col-xl-9 v-col-sm-8 v-col-xs-8 v-col-8">-->
            <!--              <div class="inf">最終更新日：2023/05/15　XX:XX</div>-->
            <!--              <div class="nameBlog">NEKO日記（ブログ名）</div>-->
            <!--            </div>-->
            <!--          </div>-->
            <!--        </div>-->
        </div>
        <div class="v-col-xs-12 v-col-lg-4 v-col-md-4 v-col-xxl-4 v-col-xl-4">
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
                        <a class="color-dark" href="mailto: example@gmail.com">example@gmail.com</a>
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
        <button class="btn-all-actor"><u> 【{{storeDetails.store.store_name}}】に戻る </u></button>
    </div>
</div>
</template>

<style lang="scss" scoped>
.container {
    width: 65%;
    margin: 50px auto;
}

.endCast {
    margin-bottom: 50px;
    border-bottom: 3px solid #ccc;

    img {
        margin-left: 5%;
    }

    .inf {
        color: #FF789D;
        font-weight: 500;
        font-size: 16px;
    }

    .nameBlog {
        font-size: 24px;
        font-weight: 500;
    }
}

.adv {
    width: 100%;
    height: 400px;
    text-align: center;
    background-color: #ccc;
    padding-top: 5%;

    iframe {
        width: 80%;
        height: 90%;
    }
}

.gallery {
    background-color: #ccc;
    padding: 20px;

    img {
        width: 100%;
    }
}

.titleContent {
    background-color: #2D2427;
    font-size: 14.68px;
    font-weight: bold;
    color: white;
    padding: 10px 50px;
    margin: 50px 0 10px 0;
}

.logo {
    img {
        margin-top: 15px;
        width: 100%;
    }
}

.cmt {
    padding: 5px;
    font-size: 16px;
    border: 3px solid #D9D9D9;
    font-weight: 600;
}

.inf {
    font-size: 15.66px;
    font-weight: 500;
}

.titleA {
    color: #FF789D;
    font-size: 16px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 15px;

}

.titleB {
    color: #FF789D;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 15px;

}

.catTitle {
    background-color: #FF789D;
    color: #fff;
    padding-left: 5px;
    font-weight: bold;
    margin-bottom: 15px;
}

.avtCast {
    position: relative;
    text-align: center;
    height: 365px;

    img {
        width: 100%;
    }

    .status {
        position: absolute;
        font-weight: bold;
        background-color: red;
        color: white;
        padding: 4px 15px;
        top: 0px;
        left: 0px;
    }
}

.p0 {
    padding: 0;
}

hr {
    margin-top: 20px;
}

.listContent {
    border: 2px solid #ccc;

    .logoClub {
        text-align: center;
        width: 80%;
        margin: auto;
        border: 3px solid #ccc;
    }
}

.infor {
    margin-bottom: 50px;

    .inforTitle {
        font-size: 15.25px;
        font-weight: bold;
        color: #FF789D;
        padding: 8px 10px;
        height: 29px;
    }

    .contentInfor {
        font-size: 15px;
        color: #0A0A0A;
        font-weight: bold;
        padding: 10px 0 10px 20px;
        border-bottom: 3px dashed #ccc;
    }
}

.btn-all-actor {
    width: 55%;
    font-size: 10px;
    padding: 10px 0;
    border: 3px #FF789D solid;
    color: #FF789D;
    border-radius: 25px;
    margin: auto;
    margin: 50px 22.5% 50px 22.5%;

    u {
        font-weight: bold;
    }
}

.btn-all-actor:hover {
    background-color: #FF789D;
    color: #fff;
}

.mb {
    display: none;
}

//.carouselWrap {
//  width: calc(100% - 50px)
//}

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

.titleBlock {
    font-size: 18.86px;
    font-weight: bold;
    color: #838383;
    padding: 10px 50px;
    margin-bottom: 10px;
    text-align: center;
}

.block-radius {
    background-color: white;
    border-radius: 11px;
    margin-top: 10px;
    box-shadow: 0 7.17px 7.17px 7.17px #00000052;
    cursor: pointer;

    :hover {
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

.margin-top-10 {
    margin: 10px 0;
}

.margin-top-0 {
    margin-top: 0;
}

@media only screen and (max-width: 600px) {
    .mb-padding-left-0 {
        padding-left: 0 !important;
    }
  .container{
    margin: 0 auto!important;
  }
.btn-all-actor{
  font-size: 10px;
  padding: 4px 0;
  border: 2px #FF789D solid;
  margin: 0px 22.5% 14px 22.5%;
  &:last-of-type{
    margin-bottom: 70px;
  }
}
    .titleContent {
        margin: 0;
      padding: 5px 50px;
      text-align: center;
      font-size: 12px;
    }

    .adv {
      margin: 25px 28px 58px 24px;
      width: auto;
      height: 156px;
      padding: 11px 47px 11px 42px;

        iframe {
            width: -webkit-fill-available;
            height: -webkit-fill-available;
        }
    }

    .gallery {
        margin: 13px 26px 72px 26px;
        padding: 18px 19px 27px 19px;
    }

    .cast {
        margin: 15px 55px 0 49px;

        .inf {
            color: #000;
            font-weight: bold;
          font-size: 12px;
          margin-bottom: 5px;
        }
    }

    .cmt {
      margin: 3px 52px 4px 47px;
      font-weight: bold;
      color: #000;
      font-size: 13px;
      padding: 0 10px;
    }

    .catTitle {
      margin-bottom: 5px;
      font-size: 11px;
      padding-left: 10px;
    }

    .titleA {
      margin-bottom: 0;
      margin-top: 0;
      font-size: 11px;
    }

    .titleB {
      margin-bottom: 5px;
      font-size: 17px;
    }

    .avtCast {
        height: 238px;
      .status{
        font-size: 13px;
        padding: 0 10px;
      }
    }

    .container {
        padding: 0;
        width: auto;
    }

    .titleBlock {
        background-color: #2D2427;
        font-size: 14.68px;
        font-weight: bold;
        color: white;
        padding: 10px 50px;
        margin: 50px 0 10px 0;
    }

    .listContent {
        border: none;

        .logoClub {
            text-align: center;
            width: 80%;
            margin: auto;
            border: none;
        }
    }

    .infor {
        margin-bottom: 61px;
        border-bottom: 3px solid #ccc;

        .inforTitle {
            font-size: 11.21px;
            padding: 2px 17px;
            height: 23px;
            color: white;
            background-color: #FF789D;
            font-weight: bold;
        }

        .contentInfor {
            font-size: 15px;
            color: #0A0A0A;
            font-weight: bold;
            padding: 12px 17px 12px 20px;
            border-bottom: none;
        }
    }

    .gallery img[data-v-d2c57dec] {
        margin: 0;
        width: 100%;
    }

    .logo {
        margin: 0 57px 59px 51px;

        img {
            margin-top: 10px;
        }
    }

    .hide {
        display: none;
    }

    .logoClub {
        text-align: center;
    }

    .carouselWrap {
        width: 100%;
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

    .imagePrev {
        width: 15px;
        height: 30px;
        object-fit: contain;
    }

    .titleBlock {
        font-size: 12px;
        padding: 8px 50px;
        text-align: center;
        margin-bottom: 20px;
    }

    .padding-20px {
        padding: 10px;
    }

    .listContent {
        .itemContent {
            border: 1px solid black;
            font-size: 20.3px;

            &:nth-child(even) {
                margin: 10px 10px 10px 0;
            }

            &:nth-child(odd) {
                margin: 10px;

            }
        }
    }

    :deep {
        .v-window__controls {
            padding: 0 5px !important;
        }
    }

    .mb {
        display: block;
    }

    .endCast {
        margin-bottom: 50px;
        border-bottom: 3px solid #ccc;

        img {
            margin-left: 0;
        }

        .inf {
            font-size: 14px;
        }

        .nameBlog {
            font-size: 18px;
        }
    }
}

::v-deep {
    .vh--outer {
        height: 100%;
        width: 100%;

        .vh--holder {
            width: 100%;
            height: 100%;

            picture {
                height: 100%;
                width: 100%;

                .img-fluid {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>
