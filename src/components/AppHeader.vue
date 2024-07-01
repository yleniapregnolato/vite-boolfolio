<script>
export default {};
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page" href="#">Home</router-link>
        <router-link :to="{ name: 'projects' }" class="nav-link" aria-current="page" href="#">Progetti</router-link>
      </div>
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>
</style>