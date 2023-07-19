<template>
  <div class="about">
    <h1>This is an about pagいいいe</h1>
    <v-checkbox label="Checkbox"></v-checkbox>
    <v-combobox
  label="Combobox"
  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
></v-combobox>
  </div>
</template>

<script>
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
