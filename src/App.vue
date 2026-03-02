<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="topbar">
    <div class="container">
      <div class="brand">
        <div class="brand-title">LOCAL WORLD</div>
        <div class="brand-subtitle">Reportajes • Etnografías • Actualidad</div>
      </div>

      <nav class="nav">
        <RouterLink to="/" class="nav-link">Inicio</RouterLink>
        <RouterLink to="/reportajes" class="nav-link">Reportajes</RouterLink>
        <RouterLink to="/actualidad" class="nav-link">Actualidad</RouterLink>
        <RouterLink to="/portfolio" class="nav-link">Portfolio</RouterLink>
      </nav>
    </div>
  </header>

  <main class="container main">
    <RouterView />
  </main>
</template>

<style scoped>
.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(10, 10, 12, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px 18px;
}

.brand-title {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.brand-subtitle {
  margin-top: 2px;
  font-size: 12px;
  opacity: 0.75;
}

.nav {
  display: flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.12);
  opacity: 0.9;
}

.nav-link:hover {
  opacity: 1;
  border-color: rgba(255, 255, 255, 0.22);
}

.nav a.router-link-exact-active {
  opacity: 1;
  border-color: rgba(255, 255, 255, 0.35);
}

.main {
  padding-top: 22px;
}

@media (min-width: 900px) {
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .nav {
    margin-top: 0;
  }
}
</style>