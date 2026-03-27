import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function News() {
  const newsArticles = [
    {
      id: 1,
      title: "Crisis climática: nuevos datos revelan aceleración del deshielo polar",
      summary: "Científicos internacionales presentan evidencia contundente sobre el aumento de la temperatura en los polos y sus consecuencias inmediatas para las comunidades costeras.",
      image: "https://images.unsplash.com/photo-1584573062942-d46bb3aee3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG5ld3MlMjBnbG9iYWx8ZW58MXx8fHwxNzc0MzQ0MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "22 Marzo 2026",
      category: "Medio Ambiente",
    },
    {
      id: 2,
      title: "Investigación revela red de corrupción en instituciones públicas",
      summary: "Tras seis meses de investigación, se descubre un esquema de desvío de fondos que involucra a múltiples funcionarios de alto nivel en tres países de la región.",
      image: "https://images.unsplash.com/photo-1758525589338-20a5a3a452c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RpZ2F0aXZlJTIwam91cm5hbGlzbXxlbnwxfHx8fDE3NzQzNDQwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "20 Marzo 2026",
      category: "Investigación",
    },
    {
      id: 3,
      title: "Refugiados climáticos: el drama humano detrás de las cifras",
      summary: "Millones de personas se ven obligadas a abandonar sus hogares debido a condiciones climáticas extremas. Un análisis profundo de esta crisis humanitaria en desarrollo.",
      image: "https://images.unsplash.com/photo-1714842383212-4ed6a4d3fc82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGRvY3VtZW50YXJ5JTIwcGVvcGxlfGVufDF8fHx8MTc3NDM0NDA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "18 Marzo 2026",
      category: "Derechos Humanos",
    },
    {
      id: 4,
      title: "La lucha por los recursos naturales en África Subsahariana",
      summary: "Comunidades locales enfrentan a corporaciones multinacionales en defensa de sus territorios ancestrales y recursos naturales frente a la explotación desmedida.",
      image: "https://images.unsplash.com/photo-1759144204797-cbbb4372ca77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkb2N1bWVudGFyeSUyMGFmcmljYXxlbnwxfHx8fDE3NzQzNDQwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "15 Marzo 2026",
      category: "Geopolítica",
    },
    {
      id: 5,
      title: "Tecnología y vigilancia: el precio de la privacidad en la era digital",
      summary: "Nuevas revelaciones sobre programas de vigilancia masiva ponen en evidencia el conflicto entre seguridad nacional y derechos civiles en la era de la información.",
      image: "https://images.unsplash.com/photo-1724627560187-ef762430ab26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBqb3VybmFsaXN0JTIwd29ya2luZ3xlbnwxfHx8fDE3NzQzNDQwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "12 Marzo 2026",
      category: "Tecnología",
    },
    {
      id: 6,
      title: "Agricultura sostenible: modelos exitosos en América Latina",
      summary: "Agricultores de varios países implementan prácticas sostenibles que no solo protegen el medio ambiente, sino que también aumentan la productividad y mejoran sus ingresos.",
      image: "https://images.unsplash.com/photo-1632845491104-8eb10126746d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbiUyMGFtZXJpY2ElMjBjdWx0dXJlfGVufDF8fHx8MTc3NDM0NDA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "10 Marzo 2026",
      category: "Sostenibilidad",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl tracking-tight mb-4">NOTICIAS DE ACTUALIDAD</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Análisis y opinión sobre los acontecimientos que moldean nuestro mundo
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {newsArticles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100 mb-4">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-4 text-xs tracking-widest text-neutral-500 mb-3">
                <span>{article.category}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <h2 className="text-2xl tracking-tight text-neutral-900 mb-3 group-hover:text-neutral-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-neutral-600 leading-relaxed">{article.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
