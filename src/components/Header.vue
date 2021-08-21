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
  top: 0;
  padding-top: 60px;
  padding-bottom: 10px;
  position: absolute;
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
</style>
