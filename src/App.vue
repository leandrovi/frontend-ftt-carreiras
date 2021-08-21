<template>
  <div id="app">
    <Header />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

ul li {
  list-style: none;
}

body {
  font-family: Poppins, "sans-serif";
  font-size: 16px;
}
</style>
