<template>
  <div class="jobs">
    <section class="container">
      <div class="row">
        <div class="col-12">
          <h2 v-if="empresa.jobs.length > 0">
            Painel de
            <span style="color: #72B73B;">vagas</span>
          </h2>
          <div :key="job.id" v-for="job in empresa.jobs" class="conteudo">
            <p class="text" :class="displayClass(job.text)">
              {{ job.text }}
            </p>
            <div class="row footer-card">
              <div :class="displayClass(job.email)" class="link-text">
                <a href>
                  <img
                    src="../assets/email.png"
                    alt="emailCompany"
                    class="img"
                  />{{ job.email }}
                </a>
              </div>

              <div :class="displayClass(job.site)" class="link-text">
                <a href>
                  <img
                    src="../assets/link.png"
                    alt="linkCompany"
                    class="img"
                  />{{ job.site }}
                </a>
              </div>

              <div :class="displayClass(job.position)" class="link-text">
                <a href>
                  <img src="../assets/person.png" alt="person" class="img" />{{
                    job.position
                  }}
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
export default {
  props: {
    empresa: Object,
  },
  methods: {
    displayClass(value) {
      return !value ? "display-none" : "";
    },
  },
};
</script>

<style scoped>
h2 {
  font-weight: normal;
  font-size: 32px;
  line-height: 45px;
}

p {
  color: #757575;
  padding: 30px 35px;
  font-weight: normal;
  line-height: 26px;
}

a {
  text-decoration: none;
  color: #757575;
  word-break: break-all;
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

.row {
  display: flex;
  flex-wrap: wrap;
}
.footer-card {
  padding-left: 33px;
  padding-bottom: 33px;
  padding-right: 33px;
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

.footer-card div:first-child {
  margin-bottom: 20px;
}

.footer-card div:nth-child(2) {
  margin-bottom: 20px;
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
