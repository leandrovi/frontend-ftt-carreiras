<template>
  <div>
    <section class="container">
      <div class="row">
        <div class="info" style="margin-right: 20px;">
          <h2>Sobre a <span style="color: #f7c92d;">organização</span></h2>

          <div class="conteudo">
            <p>
              {{ empresa.description }}
            </p>
          </div>
        </div>

        <div class="info" style="margin-left: 20px;">
          <h2>
            Por que <span style="color: #fc632f;">trabalhar</span> conosco?
          </h2>
          <div class="conteudo">
            <p>
              {{ empresa.reason }}
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
};
</script>

<style scoped>
h2 {
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 45px;
}

p {
  color: #757575;
  font-style: normal;
  font-weight: normal;
  line-height: 26px;
}

.conteudo {
  background: #f2f2f2;
  justify-content: center;
  margin-top: 30px;
}

.conteudo p {
  padding: 40px 25px;
}

.conteudo a {
  color: #757575;
  padding: 0px 4px 55px 25px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
}

.container {
  margin: 0 90px 0 90px;
  padding-top: 60px;
}

.row {
  display: flex;
}

.info {
  width: 100%;
}

@media (max-width: 768px) {
  h2 {
    font-size: 24px;
    line-height: 31px;
  }

  p {
    font-size: 13px;
  }

  .row {
    flex-wrap: wrap;
  }

  .conteudo {
    margin-top: 10px;
  }

  .info {
    margin: 35px 0 0 0 !important;
  }

  .container {
    margin: 0 40px;
    padding-top: 0;
  }

  .container p {
    padding: 20px 30px;
  }
}
</style>
