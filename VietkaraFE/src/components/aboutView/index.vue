<template>
  <div class="container">
    <div class="newWrap">
        <div class="titleBlock">
            プライバシーポリシー
        </div>
        <div class="content">
            ベトナムのカラオケ・ガールズバー 情報サイト ベトカラ（以下「当サイト」）のご利用に先立ち、以下のご利用規約をご熟読いただくようお願いいたします。当社の、皆様から頂いた個人情報の取り扱いについて個人情報保護法の規定に基づいて大切に保管しております。本サービスをご利用いただいた場合、以下の「プライバシーポリシー」に同意していただいたものとさせていただきます。
        </div>
        <div class="content">
            <div class="contentTitle"><u>個人情報の定義</u></div>
            個人情報とは、利用者の氏名、住所、電話番号等利用者個人を識別できる全ての情報をいいます。また、その情報のみでは識別できない場合でも、他の情報と容易に照合することができ、結果的に利用者個人を識別できるものも個人情報に含まれます。
        </div>
        <div class="content">
            <div class="contentTitle"><u>プライバシー・個人情報の取扱い</u></div>
            以下の場合において、情報の取得をいたします。ユーザーのIPアドレス、クッキー情報やユーザーがご覧になったページ、ユーザーのご利用環境などの情報をユーザーのブラウザから自動的に受け取り、サーバーに記録します。当社では、本人の同意を得ることなく収集した個人情報を第三者に販売したり貸し出したりすることはありません。ただし、裁判所または警察等から、法令に準拠して開示を求められた場合には、この限りではありません。また、ユーザーより個人情報に対し開示、訂正、削除を求められた時は、合理的な期間、妥当な範囲内でこれに応じます。その際に適当な方法によってご本人様の確認を取らせていただく場合もございます。
        </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container{
  padding: 50px 100px;
}
.titleBlock{
  background-color: #2D2427;
  font-size: 22px;
  font-weight: bold;
  color: white;
  padding: 10px 50px;
  margin: 20px 0px;
}
.newWrap{
    width: 80%;
    margin: auto;
    .content{
        font-size: 12.7px;
        color: black;
        margin: 30px 0;
        .contentTitle{
            margin: 10px 0;
        }
    }
}
@media only screen and (max-width: 600px) {
  .container{
    padding: 0;
  }
  .titleBlock{
    font-size: 12px;
    padding: 8px 50px;
    text-align: center;
    margin-bottom: 20px;
  }
  .newWrap{
      width: 100%;
      .content{
        font-size: 12.7px;
        color: black;
        margin: 30px 0;
        padding: 20px;
        .contentTitle{
            margin: 10px 0;
        }
      }
  }
}
</style>
