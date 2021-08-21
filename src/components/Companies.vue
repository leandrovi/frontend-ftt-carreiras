<template>
  <div>
    <div class="companies-container">
      <div class="title-companies">
        <h1>Empresas<span> participantes</span></h1>
      </div>
      <div class="companies">
        <a>
          <div class="logo-companies">
            <img src="../assets/nestle.png" alt="" />
            <div class="background-companie"></div>
            <div class="name-companies">Nestle</div>
          </div>
        </a>
        <div class="logo-companies">
          <img src="../assets/pepsi.png" alt="" />
          <p class="name-companies">Pepsi</p>
        </div>
        <div class="logo-companies">
          <img src="../assets/microsoft.png" alt="" />
          <p class="name-companies">Microsoft</p>
        </div>
        <div class="logo-companies">
          <img src="../assets/coca.png" alt="" />
          <p class="name-companies">Coca</p>
        </div>
      </div>

      <div class="companies">
        <div class="logo-companies">
          <img src="../assets/nestle.png" alt="" />
          <p class="name-companies">Nestle</p>
        </div>
        <div class="logo-companies">
          <img src="../assets/pepsi.png" alt="" />
          <p class="name-companies">Pepsi</p>
        </div>
        <div class="logo-companies">
          <img src="../assets/microsoft.png" alt="" />
          <p class="name-companies">Microsoft</p>
        </div>
        <div class="logo-companies">
          <img src="../assets/coca.png" alt="" />
          <p class="name-companies">Coca</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.companies-container {
  margin-top: 120px;
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
.companies .logo-companies {
  width: 315px;
  height: 150px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.companies .logo-companies:hover .background-companie {
  -moz-transform: scale(1.1) skew(-22deg, 0deg);
  -webkit-transform: scale(1.1) skew(-22deg, 0deg);
  -o-transform: scale(1.1) skew(-22deg, 0deg);
  -ms-transform: scale(1.1) skew(-22deg, 0deg);
  transform: scale(1.1) skew(-22deg, 0deg);
  border: 6px solid #fc632f;
  width: 200px;
  height: 100px;
  position: relative;
}
.companies .logo-companies img {
  max-width: 240px;
  position: absolute;
}
.companies .name-companies {
  color: #757575;
  font-size: 13px;
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
