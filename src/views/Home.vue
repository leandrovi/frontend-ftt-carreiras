<template>
  <div>
    <Introduction />
    <About />
    <Companies :empresas="empresas" />
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
  data() {
    return {
      empresas: [],
    };
  },
  methods: {
    async fetchEmpresas() {
      const res = await fetch("https://ftt-carreiras.herokuapp.com/empresas");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.empresas = await this.fetchEmpresas();
    console.log("--->", this.empresas);
  },
};
</script>

<style></style>
