<template>
  <div class="itemNew">
    <div class="avatarNew">
      <div class="avtDefault">
        店舗
        <br>
        ロゴ
      </div>
    </div>
    <div class="contentNew">
      <div class="date">2023/05/15</div>
      <div class="textContent">
        テキスト（店名）
      </div>
      <div class="textContent">
        テキストさんを新規掲載しました！
      </div>
    </div>
  </div>

</template>
<style scoped lang="scss">
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
@media only screen and (max-width: 600px) {
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
</style>
