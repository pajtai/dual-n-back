<template>
<div class="page">
  <table class="grid">
    <tr class="grid__row" v-for="row in rows" v-bind:key="row">
      <td
        class="grid__cell"
        v-for="column in columns"
        :key="column"
        :class="{ grid__selected: (selectedRow === row && selectedColumn === column) }">
        <span class="grid__number" v-if="selectedRow === row && selectedColumn === column">{{ selectedNumber }}</span>
        <span v-else>&nbsp;</span>
      </td>
    </tr>
  </table>
  <div class="controls">
    <div class="controls__left">Left</div>
    <div class="controls__right">Right</div>
  </div>
</div>
</template>

<script>
export default {
  name: "home",
  data: () => {
    return {
      columns: 3,
      rows: 3,
      selectedRow: 2,
      selectedColumn: 2,
      selectedNumber: 5
    };
  },
  created() {
    console.log("created");
    this.engine = setInterval(this.createSelection, 100);
  },
  methods: {
    createSelection() {
      this.selectedColumn = this.getRandomPosition();
      this.selectedRow = this.getRandomPosition();
      this.selectedNumber = this.getRandomNumber();
    },
    getRandomPosition() {
      return Math.floor(Math.random() * 3 + 1);
    },
    getRandomNumber() {
      return Math.floor(Math.random() * 10);
    }
  }
};
</script>

<style lang="scss">
.grid {
  border-collapse: collapse;
  margin: 0 auto;
  &__cell {
    width: 200px;
    height: 200px;
    text-align: center;
  }
  &,
  &__row,
  &__cell {
    border: 4px solid #aeaeae;
  }
  &__selected {
    background-color: #9a9a9a;
  }
  &__number {
    font-size: 5em;
    font-weight: bolder;
  }
}
.controls {
  margin: 24px auto 0;
  width: 600px;
  display: grid;
  grid-template-columns: 288px 288px;
  grid-column-gap: 24px;
  &__left,
  &__right {
    height: 32px;
    background-color: #cfcfcf;
  }
}
</style>