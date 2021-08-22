<template>
  <div class="information">
    <section class="container" :class="displayClass(empresa.additional_info)">
      <div class="row">
        <div class="col-12">
          <h2>
            Mais
            <span style="color: #FC632F;">informações</span>
          </h2>

          <div class="conteudo">
            <p class="text">
              {{ empresa.additional_info }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    empresa: Object,
  },
  methods: {
    displayClass(text) {
      return !text ? "display-none" : "";
    },
  },
};
</script>

<style scoped>
h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 45px;
}

p {
  color: #757575;
  padding: 30px 35px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  line-height: 26px;
}

a {
  text-decoration: none;
  color: #757575;
}

.display-none {
  display: none;
}

.container {
  margin: 60px 90px 0 90px;
}

.conteudo {
  margin-top: 30px;
  background: #f2f2f2;
}

@media (max-width: 768px) {
  h2 {
    font-size: 24px;
  }

  p {
    font-size: 13px;
  }

  .container {
    margin: 0 40px 0 40px;
  }

  .conteudo {
    margin-top: 10px;
    margin-bottom: 30px;
  }
}
</style>
