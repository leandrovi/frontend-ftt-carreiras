<template>
  <div>
    <HeaderCompany :empresa="empresa" :url="url" />
    <AboutCompanies :empresa="empresa" />
    <Hiring :empresa="empresa" />
    <Jobs :empresa="empresa" />
    <Information :empresa="empresa" />
  </div>
</template>

<script>
import HeaderCompany from "../components/HeaderCompany.vue";
import AboutCompanies from "../components/AboutCompanies.vue";
import Hiring from "../components/Hiring.vue";
import Jobs from "../components/Jobs.vue";
import Information from "../components/Information.vue";
export default {
  name: "Details",
  components: {
    HeaderCompany,
    AboutCompanies,
    Hiring,
    Jobs,
    Information,
  },
  data() {
    return {
      empresa: {},
      url: "https://ftt-carreiras.herokuapp.com",
    };
  },
  methods: {
    async fetchEmpresa(id) {
      const res = await fetch(
        `https://ftt-carreiras.herokuapp.com/empresas/${id}`,
      );
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.empresa = await this.fetchEmpresa(this.$route.params.id);
  },
};
</script>

<style></style>
