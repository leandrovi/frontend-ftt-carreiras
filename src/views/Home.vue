<template>
  <div>
    <Introduction />
    <About />
    <Companies />
  </div>
</template>

<script>
import Introduction from "../components/Introduction.vue";
import About from "../components/About.vue";
import Companies from "../components/Companies.vue";
export default {
  name: "Home",
  components: {
    Introduction,
    About,
    Companies,
  },
};
</script>

<style></style>
