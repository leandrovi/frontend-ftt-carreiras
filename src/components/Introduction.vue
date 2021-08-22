<template>
  <div>
    <div class="container-intro">
      <div class="image-intro">
        <img src="../assets/fotos-ftt.png" alt="fotos-ftt-carreiras" />
      </div>
      <div class="main-intro">
        <div class="info-intro">
        <h1>Um evento para inspirar sua carreira <span>profissional</span></h1>
        <p>
          Conheça diferentes trilhas de carreiras e se aproxime das
          oportunidades profissionais do mercado.
        </p>
        </div>
        <div class="img-intro">
          <img
          class="linhas-intro"
          src="../assets/linhas-esquerda.png"
          alt="linhas esquerda"
          />
        </div>
      </div>
    </div>
    <!-- <img
      class="linhas-intro"
      src="../assets/linhas-esquerda.png"
      alt="linhas esquerda"
    /> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-intro {
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
}

.main-intro {
  width: 35%;
}

.main-intro .info-intro{
  margin: 0 0 0 90px;
}

.main-intro h1 {
  font-weight: normal;
  font-size: 40px;
  color: #212121;
  line-height: 45px;
  margin-bottom: 20px;
}

.main-intro h1 span {
  color: #f7c92d;
}

.main-intro p {
  color: #757575;
}

.image-intro img {
  display: block;
  max-width: 100%;
  height: 100vh;
}

.linhas-intro {
  position: absolute;
}

@media (max-width: 1024px) {
  .main-intro {
    width: 50%;
  }

  .main-intro p {
    font-size: 13px;
    width: 85%;
  }

}

@media (max-width: 768px) {
  .container-intro {
    flex-direction: column;
    height: unset;
  }

  .image-intro {
    top: 200px;
    background-color: #f2f2f2;
  }

  .image-intro img {
    height: unset;
  }
  
  .main-intro {
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    width: unset;
  }

  .main-intro .info-intro{
    margin: 0 0 0 40px;
  }

  .main-intro h1 {
    font-size: 32px;
  }


  .main-intro p {
    font-size: 16px;
    width: 85%;
  }

  .linhas-intro {
    position: unset;
    transform: rotate(180deg);
    right: 0;
    width: 85px;
  }
}

@media (max-width: 426px) {
  .image-intro {
    top: 140px;
  }

  .main-intro h1 {
    font-size: 24px;
  }

  .main-intro p {
    font-size: 13px;
    width: 85%;
  }
}
</style>
