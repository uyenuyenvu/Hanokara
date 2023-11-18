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
  padding: 13px 0 3px 0;
  margin-right: 55px;
  .avatarNew{
    width: 49.56px;
    height: 49.56px;
    border-radius: 50%;
    background-color: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 14.16px;
    font-weight: bold;
    white-space: pre-wrap;
    line-height: 17.7px;
    margin-right: 21px;
  }
  .contentNew{
    .date{
      color: #FF789D;
      font-size: 9.5px;
      line-height: 16px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .textContent{
      color: #181818;
      font-weight: bold;
      margin-bottom: 9px;
      font-size: 10.62px;
      line-height: 8.62px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .itemNew {
    padding: 17px 0;
  margin-right: 7px;
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
        margin-bottom: 2px;
      }

      .textContent {
        margin-bottom: 0;
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}
</style>
