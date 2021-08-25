<template>
  <div>
    <section class="container">
      <div class="row">
        <div class="info">
          <h2>
            Nossos processos <span style="color: #41bcce;">seletivos</span>
          </h2>

          <div class="conteudo">
            <p>
              {{ empresa.interview.text }}
            </p>
            <br />
            <div class="links">
              <a
                :class="displayClass(empresa.interview.link_1)"
                :href="empresa.interview.link_1"
                target="_blank"
                ><img src="../assets/icon-link.png" alt="" />
                <label>{{ empresa.interview.link_1 }}</label></a
              >

              <a
                :class="displayClass(empresa.interview.link_2)"
                :href="empresa.interview.link_2"
                target="_blank"
                ><img src="../assets/icon-link.png" alt="" />
                <label>{{ empresa.interview.link_2 }}</label></a
              >
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
    displayClass(link) {
      return !link ? "display-none" : "";
    },
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

.display-none {
  display: none !important;
}

.conteudo {
  background: #f2f2f2;
  justify-content: center;
  padding: 30px 35px;
  margin-top: 30px;
}

.conteudo a {
  color: #757575;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}

.links a img {
  margin-right: 15px;
}

.container {
  margin: 60px 90px 0 90px;
}

.row {
  display: flex;
}

.info {
  width: 100%;
}

.links {
  display: flex;
  flex-wrap: wrap;
}

.links a {
  display: flex;
  margin-right: auto;
  align-items: center;
  cursor: pointer;
}

.links a label {
  cursor: pointer;
}

@media (max-width: 768px) {
  h2 {
    font-size: 24px;
    line-height: 31px;
  }

  p {
    font-size: 13px;
  }

  .container {
    margin: 30px 40px 0 40px;
  }

  .conteudo {
    margin-top: 10px;
    padding: 20px 30px;
  }

  .links a img {
    margin-right: 5px;
  }

  .links a {
    font-size: 13px;
    word-break: break-all;
  }
}

@media (max-width: 683px) {
  .links a:first-child {
    margin-bottom: 20px;
  }
}

@media (max-width: 525px) {
  .links a {
    font-size: 10px;
  }
}
</style>
