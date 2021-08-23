<template>
  <div>
    <nav class="nav">
      <div class="main-header">
        <a class="nav-logo" href="/"
          ><img src="../assets/ftt-logo.png" alt="ftt-carreiras-logo"
        /></a>
        <div class="items-header">
          <router-link :to="{ path: '/', hash: '#About' }">Sobre</router-link>
          <router-link :to="{ path: '/', hash: '#Companies' }"
            >Empresas</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  padding-top: 60px;
  padding-bottom: 10px;
  position: absolute;
  width: 100%;
}

.main-header {
  display: flex;
  margin: 0 90px;
  align-items: flex-end;
  flex-wrap: wrap;
}

.items-header {
  display: inline-block;
  margin-top: 28px;
}

.items-header a {
  margin-left: 30px;
  color: #757575;
}

.items-header a:hover {
  border-bottom: 1px solid #212121;
  color: #212121;
}

@media (max-width: 1140px) {
  .main-header {
    flex-direction: column;
    width: 30%;
    align-items: flex-start;
  }

  .main-header .items-header {
    margin-top: 15px;
  }

  .main-header .items-header a:first-child {
    margin-left: unset;
  }

  .main-intro {
    font-size: 36;
  }
}

@media (max-width: 860px) {
  .main-header {
    flex-direction: row;
    width: unset;
    align-items: flex-end;
  }

  .nav {
    position: unset;
    padding-bottom: 20px;
  }
  .main-header {
    margin: 0 40px;
    justify-content: center;
  }

  .main-header .items-header a:first-child {
    margin-left: 30px;
  }
}

@media (max-width: 599px) {
  .nav {
    padding-top: 40px;
  }

  .nav-logo img {
    width: 228px;
  }

  .main-header {
    margin: 0 40px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .items-header {
    margin-top: 15px;
  }

  .main-header .items-header a:first-child {
    margin-left: 0px;
  }
}
</style>
