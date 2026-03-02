<script setup lang="ts">
// Portfolio view for Pablo Martínez Martínez
// Add any reactive data or imports if needed in the future
</script>

<template>
  <main class="portfolio">
    <section class="intro">
      <h1>Pablo Martínez Martínez</h1>
      <p>Físico e investigador especializado en ruido submarino. Desarrollo estudios y proyectos
      relacionados con acústica marina, caracterización del ruido y su impacto en ecosistemas
      subacuáticos.</p>
    </section>

    <section class="projects">
      <h2>Proyectos</h2>
      <ul>
        <li><strong>Modelización del ruido submarino</strong> – Análisis de fuentes naturales
          y antropogénicas.</li>
        <li><strong>Sensores acústicos</strong> – Diseño e implementación de redes de
          monitorización submarina.</li>
        <!-- Añade más proyectos o enlaces a publicaciones aquí -->
      </ul>
    </section>

    <section class="contact">
      <h2>Contacto</h2>
      <p>Correo: <a href="mailto:pablo.martinez@example.com">pablo.martinez@example.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/pablomartinez" target="_blank" rel="noopener">/in/pablomartinez</a></p>
    </section>
  </main>
</template>

<style scoped>
.portfolio {
  padding: 1rem;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
}
.intro h1 {
  margin-bottom: 0.5rem;
  font-size: 2rem;
}
.projects ul {
  list-style: disc;
  margin-left: 1.5rem;
}
section {
  margin-bottom: 2rem;
}
</style>
