<template>
  <div>
    <div class="container">
      <div class="headerCompany-img1">
        <img src="../assets/linhas-esquerda.png" alt="linhas" />
      </div>
      <div class="headerCompany-info">
        <h2>{{ empresa.name }}</h2>
        <a :href="empresa.company_url" target="_blank">
          {{ empresa.company_url }}
        </a>
        <div class="imagem">
          <img :src="url + empresa.logo.url" />
        </div>
        <div class="link" :class="displayClass(empresa.video_url)">
          <p>
            Assista o vídeo para conhecer mais sobre a empresa!
            <a :href="empresa.video_url" target="_blank"
              ><strong>Clique aqui.</strong></a
            >
          </p>
        </div>
      </div>
      <div class="headerCompany-img2">
        <img src="../assets/linhas-direita.png" alt="linhas" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderCompany",
  props: {
    empresa: Object,
    url: String,
  },
  methods: {
    displayClass(text) {
      return !text ? "display-none" : "";
    },
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}

.display-none {
  display: none;
}

.conteudo {
  display: flex;
  justify-content: center;
}

.link a {
  color: #42bace;
}

.imagem {
  margin: 36px auto;
}

.imagem img {
  max-width: 324px;
  width: 100%;
}

.container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 200px;
}

.headerCompany-info {
  text-align: center;
}

h2 {
  font-weight: 600;
  font-size: 46px;
  color: #4a4a4a;
}

a {
  padding-bottom: 36px;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #757575;
}

p {
  font-size: 16px;
  line-height: 24px;
  color: #757575;
}

.headerCompany-img2 img {
  transform: rotateX(180deg);
}

@media (max-width: 768px) {
  .container {
    padding-top: 25px;
  }

  .headerCompany-img1 img,
  .headerCompany-img2 img {
    width: 70px;
  }

  .headerCompany-img1 {
    align-self: flex-end;
  }

  .headerCompany-img2 {
    align-self: flex-start;
  }

  h2 {
    margin-bottom: 1px;
    font-size: 24px;
    line-height: 24px;
  }

  a {
    font-weight: 300;
    font-size: 10px;
    line-height: 24px;
    margin-bottom: 47px;
  }

  p {
    font-size: 10px;
    line-height: 17px;
  }
}
</style>
