<template>
  <div>
    <div class="main-about">
      <h1 class="title-about"><span>Sobre</span> o evento</h1>
      <div class="about">
        <p class="text-about">
          O <b>FTT Carreiras</b> é um evento que auxilia o jovem universitário a
          conhecer diferentes trilhas de carreiras e permite a aproximação do
          estudante com as oportunidades profissionais do mercado de trabalho.
          Ao mesmo tempo, colabora para que empresas de diversos segmentos
          compartilhem suas expectativas com a nova geração de talentos.
        </p>
        <div class="infos">
          <div class="info-about">
            <h1>5ª</h1>
            <p>edição</p>
          </div>
          <div class="info-about">
            <h1>1,5 mil</h1>
            <p>estudantes universitários</p>
          </div>
          <div class="info-img">
            <img class="linhas-vermelhas" src="../assets/linhas-vermelho.png" alt="linhas-vermelhas"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-about {
  margin: 65px 0 0 90px;
}

.main-about h1 {
  font-weight: normal;
  color: #212121;
  font-size: 40px;
  padding-bottom: 20px;
}

.main-about h1 span {
  color: #fc632f;
}

.main-about p {
  color: #757575;
}

.about {
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}

.about p {
  width: 40%;
}

.infos {
  display: flex;
  width: 50%;
  min-width: 353px;
  align-items: center;
  justify-content: space-between;
}

.info-about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-about h1 {
  color: #fc632f;
  font-weight: normal;
  font-size: 40px;
  padding: 0;
}

.info-about p {
  font-size: 13px;
  width: 100%;
  text-align: center;
}

@media (max-width: 768px) {
  .main-about {
    margin: 0px 40px 0px 0px;
  }

  .main-about h1 {
    font-size: 24px;
  }

  .main-about .title-about{
    margin-left: 40px;
  }

  .about p.text-about {
    width: 100%;
    padding-bottom: 50px;
    font-size: 13px;
    margin-left: 40px;
  }

  .infos{
    flex-direction: row-reverse;
    width: 80%;
    min-width: unset;
  }

  .info-about h1 {
    font-size: 28px;
  }

  .info-about p {
    font-size: 10px;
  }

  .linhas-vermelhas{
    width: 80px;
    transform: rotateX(360deg) rotateY(180deg);
  }
}

@media (max-width: 425px) {
  .infos{
    width: 100%;
  }
}

</style>
