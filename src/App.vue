<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Main</h1>
    <strong>Rota atual: </strong> {{ $route.fullPath }}
    <nav> 
      <RouterLink to="/Product">Produto</RouterLink>
      <RouterLink to="/Client">Cliente</RouterLink>
    </nav>  
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
