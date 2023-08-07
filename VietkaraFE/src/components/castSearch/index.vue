<template>
  <div class="container">
    <div class="adBanner">
      <div class="title">【広告】</div>
      <div class="content"> Fバナー広告 </div>
    </div>
    <div class="search">
      <div class="titleBlock"> お店をさがす </div>
      <div class="itemSearch">
        <div class="titleItem"> 店舗を検索 </div>
        <form class="frm" action="">
          <div class="frm1">
            <input class="searchIp" type="text" placeholder="例）かな　カナ　ABC">
            <button class="btn"> 検索 </button>
          </div>
          <div class="categories">
            <input type="checkbox" id="cat1" name="cat1" value="">
            <label for="cat1"> カラオケ </label>
            <input type="checkbox" id="cat2" name="cat2" value="">
            <label for="cat2"> ガールズバー </label>
            <input type="checkbox" id="cat3" name="cat3" value="">
            <label for="cat3"> ラウンジ </label>
            <input type="checkbox" id="cat4" name="cat4" value="">
            <label for="cat4"> 新規掲載店 </label>
            <input type="checkbox" id="cat5" name="cat5" value="">
            <label for="cat5"> リンラン </label>
            <input type="checkbox" id="cat6" name="cat6" value="">
            <label for="cat6"> キンマー </label>
            <input type="checkbox" id="cat7" name="cat7" value="">
            <label for="cat7"> その他のエリア </label>
            <input type="checkbox" id="cat8" name="cat8" value="">
            <label for="cat8"> 割引情報 </label>
          </div>
        </form>
      </div>
    </div>
    <div class="carouselWrap">
      <div class="titleBlock">
        店舗一覧
      </div>
      <div class="note"> 該当件数：XX件 </div>
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
<style lang="scss" scoped>
.container{
  padding: 50px 100px;
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
