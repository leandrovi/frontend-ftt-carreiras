<template>
  <div>
    <div class="container-intro">
      <div class="image-intro">
        <img src="../assets/fotos-ftt.png" alt="fotos-ftt-carreiras" />
      </div>
      <div class="main-intro">
        <h1>Um evento para inspirar sua carreira <span>profissional</span></h1>
        <p>
          Conheça diferentes trilhas de carreiras e se aproxime das
          oportunidades profissionais do mercado.
        </p>
      </div>
    </div>
    <img
      class="linhas-intro"
      src="../assets/linhas-esquerda.png"
      alt="linhas esquerda"
    />
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
  margin: 0 0 0 90px;
  width: 35%;
}

.main-intro h1 {
  font-weight: normal;
  font-size: 40px;
  color: #212121;
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
  top: 60%;
}

@media (max-width: 1024px) {
  .main-intro {
    width: 50%;
  }

  .main-intro h1 {
    font-size: 32px;
  }

  .main-intro p {
    font-size: 13px;
    width: 85%;
  }

  .linhas-intro {
    top: 60%;
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
    margin: 30px 40px;
    width: unset;
  }

  .main-intro h1 {
    font-size: 40px;
  }

  .main-intro p {
    font-size: 16px;
    width: 85%;
  }

  .linhas-intro {
    transform: rotate(180deg);
    right: 0;
    width: 85px;
    top: 90%;
  }
}

@media (max-width: 425px) {
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

  .linhas-intro {
    top: 80%;
  }
}
</style>
