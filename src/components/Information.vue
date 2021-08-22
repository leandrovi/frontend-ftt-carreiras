<template>
  <div class="information">
    <section class="container">
      <div class="row">
        <div class="col-12">
          <h2>
            Mais
            <span style="color: #FC632F;">informações</span>
          </h2>

          <div class="conteudo">
            <p class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book
            </p>
          </div>
        </div>
      </div>
      <!--Início "Nossos processos seletivos"-->
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
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
