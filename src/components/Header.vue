<template>
  <div>
    <nav class="nav">
      <div class="main-header">
        <a class="nav-logo" href="/"
          ><img src="../assets/ftt-logo.png" alt="ftt-carreiras-logo"
        /></a>
        <div class="items-header">
          <a href="/">Sobre</a>
          <a href="/">Empresas</a>
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

@media (max-width: 768px){
  .nav{
    position: unset;
    padding-bottom: 20px;
  }
  .main-header{
    margin: 0 40px;
    justify-content: center;
  }
  
}

@media (max-width: 425px) {
  .nav{
    padding-top: 40px;
  }

  .nav-logo img{
    width: 228px;
  }

  .main-header{
    margin: 0 40px;
    align-items: center;
    justify-content: center;
  }

  .items-header {
    margin-top: 15px;
  }

  .items-header a:first-child{
    margin-left: 0px;
  }
  
}

</style>
