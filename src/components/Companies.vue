<template>
  <div>
    <div class="companies-container">
      <div class="title-companies">
        <h1>Empresas<span> participantes</span></h1>
      </div>
      <div class="companies">
        <div
          :key="empresa.id"
          v-for="empresa in empresas"
          class="company-group"
        >
          <a>
            <div class="logo-companies">
              <img src="../assets/nestle.png" alt="img-empresa" />
              <div class="background-companie"></div>
            </div>
          </a>
          <div class="name-companies">Nestle</div>
        </div>
        <!-- <div class="company-group">
          <a>
            <div class="logo-companies">
              <img src="../assets/pepsi.png" alt="" />
              <div class="background-companie"></div>
            </div>
          </a>
          <div class="name-companies">Pepsi</div>
        </div>
        <div class="company-group">
          <a>
            <div class="logo-companies">
              <img src="../assets/microsoft.png" alt="" />
              <div class="background-companie"></div>
            </div>
          </a>
          <div class="name-companies">Microsoft</div>
        </div>
        <div class="company-group">
          <a>
            <div class="logo-companies">
              <img src="../assets/coca.png" alt="" />
              <div class="background-companie"></div>
            </div>
          </a>
          <div class="name-companies">Coca-cola</div>
        </div>
        <div class="company-group">
          <a>
            <div class="logo-companies">
              <img src="../assets/nestle.png" alt="" />
              <div class="background-companie"></div>
            </div>
          </a>
          <div class="name-companies">Nestle</div>
        </div>
        <div class="company-group">
          <a>
            <div class="logo-companies">
              <img src="../assets/pepsi.png" alt="" />
              <div class="background-companie"></div>
            </div>
          </a>
          <div class="name-companies">Pepsi</div>
        </div>
        <div class="company-group">
          <a>
            <div class="logo-companies">
              <img src="../assets/microsoft.png" alt="" />
              <div class="background-companie"></div>
            </div>
          </a>
          <div class="name-companies">Microsoft</div>
        </div>
        <div class="company-group">
          <a>
            <div class="logo-companies">
              <img src="../assets/coca.png" alt="" />
              <div class="background-companie"></div>
            </div>
          </a>
          <div class="name-companies">Coca-cola</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    empresas: Array,
  },
  created() {
    console.log(this.empresas);
  },
};
</script>

<style scoped>
.companies-container {
  margin-top: 80px;
}
.title-companies {
  display: flex;
  flex-direction: column;
  margin: 0 90px;
}
.title-companies h1 {
  font-weight: normal;
  font-size: 40px;
  color: #41bcce;
}
.title-companies h1 span {
  color: #212121;
}
.companies {
  margin: 0 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.companies .company-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.companies .logo-companies {
  width: 315px;
  height: 150px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.companies .logo-companies:hover .background-companie {
  -moz-transform: scale(1.1) skew(-22deg, 0deg);
  -webkit-transform: scale(1.1) skew(-22deg, 0deg);
  -o-transform: scale(1.1) skew(-22deg, 0deg);
  -ms-transform: scale(1.1) skew(-22deg, 0deg);
  transform: scale(1.1) skew(-22deg, 0deg);
  border: 5px solid #fc632f;
  width: 220px;
  height: 100px;
  position: relative;
  opacity: 1;
  transition: opacity 0.7s ease-out;
  -moz-transition: opacity 0.7 ease-out;
  -webkit-transition: opacity 0.7s ease-out;
  -o-transition: opacity 0.7s ease-out;
}

.background-companie {
  opacity: 0;
  transition: opacity 0.7s ease-out;
  -moz-transition: opacity 0.7 ease-out;
  -webkit-transition: opacity 0.7s ease-out;
  -o-transition: opacity 0.7s ease-out;
}

/* .companies .company-group:nth-child(4n+1) .logo-companies:hover .background-companie {
  border: 5px solid #fc632f;
} */
.companies
  .company-group:nth-child(4n + 2)
  .logo-companies:hover
  .background-companie {
  border: 5px solid #f9ca24;
}
.companies
  .company-group:nth-child(4n + 3)
  .logo-companies:hover
  .background-companie {
  border: 5px solid #41bcce;
}
.companies
  .company-group:nth-child(4n + 4)
  .logo-companies:hover
  .background-companie {
  border: 5px solid #72b73b;
}

.companies .logo-companies img {
  max-width: 240px;
  position: absolute;
}
.companies .name-companies {
  color: #757575;
  font-size: 13px;
  margin-top: -15px;
}
@media (max-width: 768px) {
  .companies .logo-companies {
    width: 275px;
    height: 150px;
  }
  .companies {
    margin: 0 100px;
  }
}
@media (max-width: 425px) {
  .title-companies h1 {
    font-weight: normal;
    font-size: 24px;
    color: #41bcce;
  }
  .title-companies h1 span {
    color: #212121;
  }
  .title-companies {
    display: flex;
    flex-direction: column;
    margin: 0 40px;
  }
  .companies .logo-companies {
    width: 160px;
    height: 150px;
  }
  .companies {
    margin: 0 20px;
  }
  .companies .logo-companies img {
    height: 60px;
    max-width: 150px;
  }
}
</style>
