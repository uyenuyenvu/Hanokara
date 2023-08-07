<template>
  <div class="container">
    <div class="v-row">
      <div class="v-col-xs-12 v-col-lg-8">
        <div class="carouselWrap">
            <div class="banner">
                <img class="picture" src="@/assets/images/storePage/storePage2.png" alt="">
                <img class="logo" src="@/assets/images/storePage/storePage1.png" alt="">
            </div>
            <div class="titleBlock">
                CLUB ALICE：キャスト一覧
            </div>
            <div class="cards">
                <div class="v-row">
                    <div class="v-col-3 card">
                        <div class="avt">
                            <img src="@/assets/images/storePage/storePage3.png" alt="">
                        </div>
                        <div class="titleCard">
                            キャスト名
                        </div>
                    </div>
                    <div class="v-col-3 card">
                        <div class="avt">
                            <img src="@/assets/images/storePage/storePage4.png" alt="">
                        </div>
                        <div class="titleCard">
                        </div>
                        </div>
                    <div class="v-col-3 card">
                        <div class="avt">
                            <img src="@/assets/images/storePage/storePage5.png" alt="">
                        </div>
                        <div class="titleCard">
                        </div>
                        </div>
                    <div class="v-col-3 card">
                        <div class="avt">
                            <img src="@/assets/images/storePage/storePage6.png" alt="">
                        </div>
                        <div class="titleCard">
                        </div>
                    </div>
                    <div class="v-col-3 card">
                        <div class="avt">
                            <img src="" alt="">
                        </div>
                        <div class="titleCard">
                        </div>
                    </div>
                    <div class="v-col-3 card">
                        <div class="avt">
                            <img src="" alt="">
                        </div>
                        <div class="titleCard">
                        </div>
                    </div>
                    <div class="v-col-3 card">
                        <div class="avt">
                            <img src="" alt="">
                        </div>
                        <div class="titleCard">
                        </div>
                    </div>
                    <div class="v-col-3 card">
                        <div class="avt">
                            <img src="" alt="">
                        </div>
                        <div class="titleCard">
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
                <div class="contentInfor">CLUB ALICE</div>
                <div class="inforTitle">電話番号</div>
                <div class="contentInfor">0123456789</div>
                <div class="inforTitle">メールアドレス</div>
                <div class="contentInfor">example@gmail.com</div>
                <div class="inforTitle">住所</div>
                <div class="contentInfor">o.X/XX Linh Lang（地図）</div>
                <div class="inforTitle">営業時間</div>
                <div class="contentInfor">XX:XX～XX:XX</div>
                <div class="inforTitle">店休日</div>
                <div class="contentInfor">毎週X曜日</div>
                <div class="inforTitle">在籍国籍比率</div>
                <div class="contentInfor">ベトナム人 X:X 多国籍</div>
            </div>
            <hr>
        </div>
    </div>
    <div class="v-col-xs-12 v-col-lg-8">
        <div class="titleBlock">
            システム
        </div>
        <div class="discount">
            <div class="discountTitle">店名</div>
            <div class="contentDiscount">CLUB ALICE</div>
        </div>
    </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container{
  padding: 50px 100px;
}
.banner{
    margin: 0;
    position: relative;
    .logo{
        position: absolute;
        top: 2px;
        left: 2px;
    }
}
hr{
    margin-top: 20px;
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
.infor {
    .inforTitle{
        background-color: #F37497;
        font-size: 12px;
        font-weight: bold;
        color: white;
        padding: 8px 10px;
        height: 29px;
    }
    .contentInfor{
        font-size: 15px;
        color: #0A0A0A;
        font-weight: bold;
        padding: 10px 0 10px 20px;
    }
}
   
.btn-all-actor{
    width: 55%;
    font-size: 10px;
    padding: 10px 0;
    border: 3px #F37497 solid;
    color: #F37497;
    border-radius: 25px;
    margin: auto;
    margin: 50px 22.5% 0 22.5%;
    u{
        font-weight: bold;
    }
}
.btn-all-actor:hover{
    background-color: #F37497;
    color: #fff;
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
  margin-bottom: 10px;
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
    }
    .contentNew{
      .date{
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
  .logoClub{
      text-align: center;
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
