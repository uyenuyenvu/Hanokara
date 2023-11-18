<template>
    <v-dialog v-model="showDialog" max-width="500px" eager>
      <v-card>
        <v-card-title>役職を選択</v-card-title>
        <v-card-text>
            <div class="checkbox-container">
                <input type="checkbox" @change="toggleAll">
                <label>全選択</label>
            </div>
            <div v-for="(position, index) in positions" :key="index">
                <input
                    type="checkbox"
                    :id="position.value"
                    :value="position.value"
                    v-model="selectedPositions"
                >
                <label :for="position.value">{{ position.label }}</label>
            </div>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="sendPositionsToParent">選択完了</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>

<script>
    export default {
    name: "PositionDialog",
    props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'updatePosition'],
    data() {
        return {
            positions: [
                { label: 'ママ', value: 'MOM' },
                { label: 'チーママ', value: 'CHIEF_MOM' },
                { label: 'マネージャー', value: 'MANAGER' },
                { label: 'オーナー', value: 'OWNER' }
            ],
            selectedPositions: [],
            internalSelectedPositions: this.modelValue,
        };
    },
    computed: {
        selectAll: {
            get() {
                return Object.values(this.selectedPositions).every(value => value);
            },
            set(value) {
                for (let key in this.selectedPositions) {
                this.selectedPositions[key] = value;
                }
            }
        },
        showDialog: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        },
    },
    methods: {
        closeDialog() {
            this.showDialog = false;
        },
        toggleAll(event) {
            if (event.target.checked) {
                // 全選択の場合、positionsの全てのvalueをselectedPositionsに追加
                this.selectedPositions = this.positions.map(position => position.value);
            } else {
                // 全選択を解除する場合、selectedPositionsを空にする
                this.selectedPositions = [];
            }
        },
        sendPositionsToParent() {
            this.$emit('updatePosition', this.selectedPositions);
            this.showDialog = false;
        }
    },
};
</script>

<style scoped>
.checkbox-container {
  width: 100%;
  font-size: 1.5rem; /* 文字サイズを調整 */
}
.checkbox-container input[type="checkbox"] {
  width: 25px; /* チェックボックスのサイズを調整 */
  height: 25px;
}
</style>
