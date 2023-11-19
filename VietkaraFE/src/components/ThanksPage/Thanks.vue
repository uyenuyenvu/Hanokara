<template>
  <div class="container">
    <div class="uploadTitle">
        送信が完了しました
            <hr>
    </div>
    <div class="thanks">
        お問い合わせ内容は送信されました。 <br>
        ありがとうございます。
    </div>
    <div class="back">
        <button class="btn-all-actor"><u> ホームに戻る </u></button>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
  data () {
    return {
    };
  },
  methods:{
    ...mapMutations(['UPDATE_BREADCRUMBS','UPDATE_IMAGE_COMPARE']),
    handleResize() {
     let width = window.innerWidth;
      if (width>600){
        // this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/PC_Home.png')
      }else{
        this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/MB_ThankPage.png')
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.UPDATE_BREADCRUMBS([
      {
        title: 'ホーム >> お問い合わせ >> お問い合わせ完了画面'
      }
    ])
    this.handleResize()
  }
}
</script>
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
  .back{
    margin: 18px 0 83px 0;
    .btn-all-actor{
      padding: 6px 0;
    }
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
        width: max-content;
        color: #000;
      line-height: 41px;
    }
    .uploadTitle{
        font-size: 25px;
        margin: 133px 0 39px 0;
        hr{
          margin: 0 auto;
          width: 266px;
          margin-top: 3px;
        }
    }
}
</style>
