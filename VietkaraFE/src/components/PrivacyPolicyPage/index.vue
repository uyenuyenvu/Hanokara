<script>
import {mapMutations} from 'vuex'
export default {
  methods:{
    ...mapMutations(['UPDATE_BREADCRUMBS'])

  },
  mounted() {
    this.UPDATE_BREADCRUMBS([
      {
        title: 'ホーム',
        url: '/'
      },
      {
        title: 'プライバシーポリシー',
      }
    ])
  }
}
</script>
<template>
  <div class="container">
    <div class="titleBlock">
        プライバシーポリシー
    </div>
    <div class="privacyPolicy">
        ハノイのカラオケ・ガールズバー 情報サイト ハノカラ（以下「当サイト」）のご利用に先立ち、以下のご利用規約をご熟読いただくようお願いいたします。当社の、皆様から頂いた個人情報の取り扱いについて個人情報保護法の規定に基づいて大切に保管しております。本サービスをご利用いただいた場合、以下の「プライバシーポリシー」に同意していただいたものとさせていただきます。
      <br>
      <div class="title">
        <u> 個人情報の定義 </u>
      </div>
      <br>
      個人情報とは、利用者の氏名、住所、電話番号等利用者個人を識別できる全ての情報をいいます。また、その情報のみでは識別できない場合でも、他の情報と容易に照合することができ、結果的に利用者個人を識別できるものも個人情報に含まれます。
      <br>
      <div class="title">
        <u> プライバシー・個人情報の取扱い </u>
      </div>
      <br>
      以下の場合において、情報の取得をいたします。ユーザーのIPアドレス、クッキー情報やユーザーがご覧になったページ、ユーザーのご利用環境などの情報をユーザーのブラウザから自動的に受け取り、サーバーに記録します。当社では、本人の同意を得ることなく収集した個人情報を第三者に販売したり貸し出したりすることはありません。ただし、裁判所または警察等から、法令に準拠して開示を求められた場合には、この限りではありません。また、ユーザーより個人情報に対し開示、訂正、削除を求められた時は、合理的な期間、妥当な範囲内でこれに応じます。その際に適当な方法によってご本人様の確認を取らせていただく場合もございます。
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container{
  padding: 50px 100px;
  width: 65%;
  margin: auto;
}
.title{
  margin-top: 100px;
}
.titleBlock{
  background-color: #2D2427;
  font-size: 22px;
  font-weight: bold;
  color: white;
  padding: 10px 50px;
  margin-bottom: 10px;
}
.privacyPolicy{
    font-size: 16.77px;
    font-weight: 500;
    padding: 10px;
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
    width: 100%;
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
