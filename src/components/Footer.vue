<template>
  <div>
    <footer>
      <div class="main-footer">
        <div class="logos-ftt">
          <a href="http://ftt.com.br/home/" target="_blank"
            ><img src="../assets/logo-ftt.png" alt="logo-ftt"
          /></a>
          <a
            href="http://ftt.com.br/home/wp-content/uploads/2020/02/certificado_cebas.pdf"
            target="_blank"
            ><img src="../assets/logo-cebas.png" alt="logo-cebas"
          /></a>
        </div>
        <div class="redes-ftt">
          <a href="https://www.facebook.com/FaculdadeFTT" target="_blank"
            ><img src="../assets/face-ftt.png" alt="face-ftt"
          /></a>
          <a href="https://www.instagram.com/faculdadeftt/" target="_blank"
            ><img src="../assets/insta-ftt.png" alt="insta-ftt"
          /></a>
          <a
            href="https://www.linkedin.com/school/faculdade-de-tecnologia-termomecanica/?originalSubdomain=br"
            target="_blank"
            ><img src="../assets/in-ftt.png" alt="linkedin-ftt"
          /></a>
        </div>
      </div>
      <img
        class="linhas-footer"
        src="../assets/linhas-footer.png"
        alt="linhas"
      />
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  width: 100%;
  position: absolute;
}
.main-footer {
  display: flex;
  justify-content: space-between;
  margin: 80px 292px 0 90px;
  padding-bottom: 66px;
  align-items: center;
  flex-wrap: wrap;
}

.logos-ftt a {
  margin-right: 30px;
}

.redes-ftt a {
  margin-right: 40px;
}

.linhas-footer {
  position: absolute;
  bottom: 0;
  right: 0;
}

@media (max-width: 768px) {
  .main-footer {
    align-items: flex-start;
  }

  .linhas-footer {
    width: 185px;
  }

  .logos-ftt {
    margin-bottom: 25px;
    display: flex;
  }

  .logos-ftt img {
    height: 33px;
  }

  .redes-ftt {
    display: flex;
  }
}

@media (max-width: 425px) {
  .main-footer {
    margin: 80px 292px 0 40px;
  }
}
</style>
