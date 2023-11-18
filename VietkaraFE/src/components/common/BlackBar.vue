 <script>
  export default {
    name: 'BlackBar',
    props: {
      text: {
        type: String,
      }
    }
  };
  </script>


<template>
    <div class="main-menu">
        <p class="bar-text">{{ text }}</p>
    </div>
</template>

<style scoped>
.main-menu {
    background-color: black;
    color: white;
    /* その他のスタイル */
    padding: 0; /* パディングをゼロに設定して横幅いっぱいになるように */
    width: 485px;
    height: 38px;
}
  /* モバイルデバイス用のスタイル */
@media (max-width: 768px) {
    .main-menu {
      width: 100%; /* 横幅を100%に設定 */
    }
    .main-menu button {
      width: 100%; /* ボタンの横幅も100%に設定 */
      box-sizing: border-box; /* ボタンの内側のパディングやボーダーが幅に含まれるように */
    }
}
</style>
