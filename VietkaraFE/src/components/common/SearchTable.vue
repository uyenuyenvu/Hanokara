<script>
  export default {
    props: {
      store: {
        type: Object,
        required: true
      }
    }
  }
</script>

<template>
    <div class="itemNew">
      <div class="avatarNew">
        <div class="avtDefault">
          <img :src="store.store_logo" alt="">
        </div>
      </div>
      <div class="contentNew">
        <div class="textTitle">
          {{ store.area.area_name }}
        </div>
        <div class="textContent">
          <router-link :to="`/store/${store.store_id}`">
            {{ store.store_name }}
          </router-link>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.textContent a {
  color: #181818; /* テキストの色を設定 */
  text-decoration: none; /* 下線を除去 */
}
.textContent a:hover {
  color: #FF789D; /* ホバー時の色を設定 */
  text-decoration: underline; /* ホバー時に下線を表示 */
}

.itemNew {
  display: flex;
  align-items: center; /* 垂直方向の中央揃え */
  border-bottom: 2px solid #AFADAD;
  padding: 20px 0;
}

.avatarNew {
  width: 73px;
  height: 73px;
  /* その他のスタイル */
}
.contentNew {
  flex-grow: 1; /* 残りのスペースを埋める */
  /* その他のスタイル */
}

.newWrap {
  overflow-x: hidden; /* 横スクロールを無効化 */
  overflow-y: auto; /* 縦スクロールはそのまま */
  /* その他のスタイル */
}

::v-deep(.container) {
  padding: 38px; /* パディングを均等に設定 */
}


</style>
