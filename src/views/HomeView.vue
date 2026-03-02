<template>
  <section class="hero">
    <h1>LOCAL WORLD</h1>
    <p class="lead">
      Un espacio de reportajes y divulgación cultural: etnias, tradiciones, actualidad y miradas desde el terreno.
      Aquí no venimos a “explicar” el mundo desde lejos: venimos a caminarlo.
    </p>

    <div class="card">
      <h2>Quién soy</h2>
      <p>
        Me llamo Pablo Martínez y viajo por distintos países para contar cómo vive la gente en otras partes del mundo:
        qué comen, cómo trabajan, qué celebran, qué temen y qué sueñan. Historias reales, sin filtro, con respeto y curiosidad.
      </p>
    </div>

    <div class="grid">
      <div class="mini">
        <h3>🎥 Reportajes</h3>
        <p>Series por países con vídeo, fotos y contexto para entender el “por qué”.</p>
      </div>
      <div class="mini">
        <h3>🗞️ Actualidad</h3>
        <p>Noticias y notas rápidas conectadas con cultura y territorio.</p>
      </div>
      <div class="mini">
        <h3>📷 Portfolio</h3>
        <p>Selección fotográfica de viajes: retratos, calle, paisajes y vida cotidiana.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero h1 {
  font-size: 44px;
  letter-spacing: 0.08em;
  margin: 0 0 10px;
}
.lead {
  font-size: 16px;
  opacity: 0.9;
  max-width: 70ch;
}
.card {
  margin-top: 18px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
}
.grid {
  margin-top: 18px;
  display: grid;
  gap: 12px;
}
.mini {
  padding: 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
@media (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>