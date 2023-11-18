<template>
  <div class="container">
    <div class="uploadTitle">
        送信が完了しました
            <hr>
    </div>
    <div class="thanks">
        お問い合わせ内容は送信されました。
        ありがとうございます。
    </div>
    <div class="back">
        <button class="btn-all-actor"><u> ホームに戻る </u></button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container{
  padding: 50px 100px;
}
.thanks{
    font-weight: bold;
    font-size: 22px;
    width: 43%;
    text-align: center;
    margin: auto;
}
.uploadTitle{
    font-size: 30px;
    font-weight: bold;
    color: #000;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 100px;
    hr{
        height: 8px;
        background-color: #FF789D;
        margin-bottom: 15px;
        width: 300px;
        margin-left: 33%;
    }
}
.mb{
  display: none;
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
.margin-top-0{
  margin-top: 0;
}
.btn-all-actor{
  font-weight: bold;
    width: 55%;
    font-size: 12.74px;
    padding: 10px 0;
    border: 3px #FF789D solid;
    color: #FF789D;
    border-radius: 25px;
    margin: auto;
    margin: 20px 22.5% 0 22.5%;
    u{
        font-weight: bold;
    }
}
.btn-all-actor:hover{
    background-color: #FF789D;
    color: #fff;
}
@media only screen and (max-width: 600px) {
  .container{
    padding: 0;
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
  :deep{
    .v-window__controls{
      padding: 0 5px!important;
    }
  }
  .mb{
    display: block;
  }
    .btn-all-actor{
        margin-bottom: 50px;
        margin-top: 50px;
        font-size: 9.37px;
    }
    .thanks{
        font-size:18.78px;
        width: 65%;
    }
    .uploadTitle{
        font-size: 25px;
        hr{
            margin-left: 25%;
        }
    }
}
</style>
