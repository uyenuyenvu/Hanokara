<template>
  <div class="pagination">
    <span
      v-for="n in totalPages"
      :key="n"
      @click="changePage(n)"
      :class="{
        'active': currentPage == n,
        'inactive': currentPage != n
      }"
    >
      <template v-if="n === 1 || n === totalPages || (n >= currentPage - 2 && n <= currentPage + 2)">
        {{ n }}
      </template>
      <template v-else-if="n === currentPage - 3 || n === currentPage + 3">
        ...
      </template>
    </span>
  </div>
</template>

<script>
export default {
  props: ['totalPages', 'currentPage'],
  methods: {
    changePage(page) {
      this.$emit('page-changed', page);
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  gap: 10px;
}

span {
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid black;
  transition: background-color 0.3s;
  color: #000000;
  background-color: #fffefe;
}

span.active {
  background-color: #F37497;
  color: #ffffff;
}

span:hover:not(.active) {
  background-color: lightgray;
}
</style>
