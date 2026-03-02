<script setup lang="ts">
const fotos = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/portfolio-${i + 1}/900/900`,
}))
</script>

<template>
  <section>
    <h1>Portfolio</h1>
    <p class="sub">Galería de prueba. Aquí subirás fotos tuyas.</p>

    <div class="grid">
      <img v-for="f in fotos" :key="f.id" :src="f.src" class="photo" :alt="`Foto ${f.id}`" />
    </div>
  </section>
</template>

<style scoped>
.sub {
  opacity: 0.85;
}
.grid {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.photo {
  width: 100%;
  height: auto;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
@media (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>