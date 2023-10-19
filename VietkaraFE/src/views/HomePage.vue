<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script>
export default {
  data() {
    return {
      test: "hello,Vue",
    };
  },
  methods: {
    testChange() {
      this.test = "success";
    },
  },
  mounted() {
    console.log("test")
  }
}
</script>

<style lang="scss"></style>
