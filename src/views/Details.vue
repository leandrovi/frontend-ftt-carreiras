<template>
  <div>
    <HeaderCompany :empresa="empresa" />
    <AboutCompanies />
    <Hiring />
    <Jobs />
    <Information />
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
  props: {
    empresa: Object,
  },
  created() {
    console.log("Aqui --->", this.empresa);
  },
};
</script>

<style></style>
