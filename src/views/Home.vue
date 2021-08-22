<template>
  <div>
    <Introduction />
    <About />
    <Companies :empresas="empresas" :url="url" />
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
      url: "https://ftt-carreiras.herokuapp.com",
    };
  },
  methods: {
    async fetchEmpresas() {
      const res = await fetch("https://ftt-carreiras.herokuapp.com/empresas");
      const data = await res.json();

      return data;
    },
    async fetchEmpresa(id) {
      const res = await fetch(
        `https://ftt-carreiras.herokuapp.com/empresas/${id}`,
      );
      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.empresas = await this.fetchEmpresas();
  },
};
</script>

<style></style>
