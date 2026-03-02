<script setup lang="ts">
const noticias = [
  {
    title: 'Actualidad',
    items: [
      {
        headline: 'Ha muerto el ayatolá Jamenei',
        desc: 'Noticia de prueba para maquetar el formato. Aquí irán titulares reales con contexto.',
      },
      {
        headline: 'Nueva ruta de investigación en el Sahel',
        desc: 'Entrada demo: breve resumen, fecha y enlace a la fuente.',
      },
    ],
  },
]
</script>

<template>
  <section>
    <h1>Actualidad</h1>
    <p class="sub">Noticias y notas rápidas (contenido de prueba).</p>

    <div class="stack">
      <div v-for="(block, i) in noticias" :key="i" class="panel">
        <h2>{{ block.title }}</h2>
        <ul class="list">
          <li v-for="n in block.items" :key="n.headline" class="item">
            <div class="headline">{{ n.headline }}</div>
            <div class="desc">{{ n.desc }}</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sub {
  opacity: 0.85;
}
.stack {
  margin-top: 14px;
  display: grid;
  gap: 14px;
}
.panel {
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
}
.list {
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}
.headline {
  font-weight: 700;
}
.desc {
  opacity: 0.85;
  margin-top: 4px;
}
</style>