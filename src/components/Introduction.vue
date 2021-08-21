<template>
  <div>
    <div class="main-intro">
      <h1>Um evento para inspirar sua carreira <span>profissional</span></h1>
      <p>
        Conheça diferentes trilhas de carreiras e se aproxime das oportunidades
        profissionais do mercado.
      </p>
    </div>
    <img
      class="fotos-intro"
      src="../assets/linhas-esquerda.png"
      alt="linhas esquerda"
    />
    <img
      class="fotos-intro"
      src="../assets/fotos-ftt.png"
      alt="fotos-ftt-carreiras"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
.main-intro {
  display: flex;
  flex-direction: column;
  margin: 0 90px;
  height: 887px;
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

.fotos-intro {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
