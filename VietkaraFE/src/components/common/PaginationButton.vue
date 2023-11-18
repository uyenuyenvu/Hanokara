<template>
  <div class="text-center">
    <v-pagination
      :model-value="currentPage"
      :length="totalPages"
      :total-visible="5"
      active-color="#FF789D"
      ellipsis="..."
      variant="elevated"
      :next-icon="mdiChevronRight"
      :prev-icon="mdiChevronLeft"
    ></v-pagination>
  </div>
</template>

<script>
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';

export default {
  props: ['totalPages', 'currentPage'],
  data() {
    return {
      mdiChevronRight: mdiChevronRight,
      mdiChevronLeft: mdiChevronLeft,
    }
  },
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
  background-color: #FF789D;
  color: #ffffff;
}

span:hover:not(.active) {
  background-color: lightgray;
}
</style>
