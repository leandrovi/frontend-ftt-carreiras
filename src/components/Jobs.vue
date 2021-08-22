<template>
  <div class="jobs">
    <section class="container">
      <div class="row">
        <div class="col-12">
          <h2>
            Painel de
            <span style="color: #72B73B;">vagas</span>
          </h2>
          <div class="conteudo">
            <p class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <div class="row footer-card">
              <div class="link-text">
                <a href>
                  <img
                    src="../assets/email.png"
                    alt="emailCompany"
                    class="img"
                  />email@gmail.com
                </a>
              </div>

              <div class="link-text">
                <a href>
                  <img
                    src="../assets/link.png"
                    alt="linkCompany"
                    class="img"
                  />processoseletivonestle.com
                </a>
              </div>

              <div class="link-text">
                <a href>
                  <img
                    src="../assets/person.png"
                    alt="person"
                    class="img"
                  />Estágio
                </a>
              </div>
            </div>
          </div>

          <div class="conteudo">
            <p class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
            <div class="row footer-card">
              <div class="link-text">
                <a href>
                  <img
                    src="../assets/email.png"
                    alt="emailCompany"
                    class="img"
                  />email@gmail.com
                </a>
              </div>

              <div class="link-text">
                <a href>
                  <img
                    src="../assets/link.png"
                    alt="linkCompany"
                    class="img"
                  />processoseletivonestle.com
                </a>
              </div>

              <div class="link-text">
                <a href>
                  <img src="../assets/person.png" alt="person" class="img" />CLT
                </a>
              </div>
            </div>
          </div>

          <div class="conteudo">
            <p class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <div class="row footer-card">
              <div class="link-text">
                <a href>
                  <img
                    src="../assets/email.png"
                    alt="emailCompany"
                    class="img"
                  />email@gmail.com
                </a>
              </div>

              <div class="link-text">
                <a href>
                  <img
                    src="../assets/link.png"
                    alt="linkCompany"
                    class="img"
                  />processoseletivonestle.com
                </a>
              </div>

              <div class="link-text">
                <a href>
                  <img src="../assets/person.png" alt="person" class="img" />CLT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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

.container {
  margin: 60px 90px 0 90px;
}

.conteudo {
  margin-top: 30px;
  background: #f2f2f2;
}

.row {
  display: flex;
  flex-wrap: wrap;
}
.footer-card {
  padding-left: 33px;
  padding-bottom: 33px;
  padding-right: 67px;
}

.img {
  margin-right: 15px;
}

.link-text {
  font-size: 14px;
  margin-right: auto;
}

.link-text a {
  display: flex;
  align-items: center;
}

/* responsividade */
@media (max-width: 768px) {
  h2 {
    font-size: 24px;
  }

  p {
    font-size: 13px;
  }

  .container {
    margin: 30px 40px 0 40px;
  }

  .conteudo {
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .link-text {
    font-size: 10px;
    margin-bottom: 10px;
  }

  .img {
    margin-right: 5px;
  }
}
</style>
