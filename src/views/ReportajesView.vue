<script setup lang="ts">
type Reportaje = { title: string; note: string; thumb: string }

const reportajes: Reportaje[] = [
  {
    title: 'MAURITANIA',
    note: 'Desierto, ciudades frontera y vida nómada (demo).',
    thumb: 'https://picsum.photos/seed/mauritania/800/450',
  },
  {
    title: 'MARRUECOS',
    note: 'Medinas, rutas del atlas y cultura popular (demo).',
    thumb: 'https://picsum.photos/seed/marruecos/800/450',
  },
  {
    title: 'TOGO',
    note: 'Ritmos, mercado y costa del golfo de Guinea (demo).',
    thumb: 'https://picsum.photos/seed/togo/800/450',
  },
  {
    title: 'TÚNEZ',
    note: 'Entre el Mediterráneo y el interior: miradas (demo).',
    thumb: 'https://picsum.photos/seed/tunez/800/450',
  },
]
</script>

<template>
  <section>
    <h1>Reportajes</h1>
    <p class="sub">
      Aquí irán tus vídeos (YouTube) con portada y enlace. De momento, tarjetas de prueba.
    </p>

    <div class="grid">
      <article v-for="r in reportajes" :key="r.title" class="card">
        <img :src="r.thumb" :alt="r.title" class="thumb" />
        <div class="body">
          <h2>{{ r.title }}</h2>
          <p>{{ r.note }}</p>
          <button class="btn" disabled>Ver (próximamente)</button>
        </div>
      </article>
    </div>

    <p class="hint">
      Tip: cuando tengas vídeos, usa la miniatura de YouTube:
      <code>https://img.youtube.com/vi/ID_DEL_VIDEO/hqdefault.jpg</code>
    </p>
  </section>
</template>

<style scoped>
.sub {
  opacity: 0.85;
  max-width: 70ch;
}
.grid {
  margin-top: 16px;
  display: grid;
  gap: 14px;
}
.card {
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
}
.thumb {
  width: 100%;
  height: auto;
  display: block;
}
.body {
  padding: 14px;
}
.btn {
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: transparent;
  color: inherit;
  opacity: 0.6;
}
.hint {
  margin-top: 16px;
  opacity: 0.8;
}
@media (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
