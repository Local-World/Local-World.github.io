import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Reportajes() {
  const [selectedCountry, setSelectedCountry] = useState("todos");

  const reportajes = [
    {
      id: 1,
      title: "Voces de Senegal: Entre tradición y modernidad",
      country: "África",
      videoId: "dQw4w9WgXcQ", // Reemplazar con ID real de YouTube
      thumbnail: "https://images.unsplash.com/photo-1759144204797-cbbb4372ca77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkb2N1bWVudGFyeSUyMGFmcmljYXxlbnwxfHx8fDE3NzQzNDQwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Un recorrido por las comunidades de Senegal explorando cómo mantienen sus tradiciones ancestrales mientras abrazan el futuro.",
      duration: "28:45",
    },
    {
      id: 2,
      title: "Tokio después del anochecer",
      country: "Asia",
      videoId: "dQw4w9WgXcQ", // Reemplazar con ID real de YouTube
      thumbnail: "https://images.unsplash.com/photo-1667530611203-6661fd9743a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhJTIwc3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc0MzQ0MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "La vida nocturna de Tokio a través de los ojos de aquellos que trabajan cuando la mayoría duerme.",
      duration: "32:12",
    },
    {
      id: 3,
      title: "Amazonas: El último refugio",
      country: "América Latina",
      videoId: "dQw4w9WgXcQ", // Reemplazar con ID real de YouTube
      thumbnail: "https://images.unsplash.com/photo-1632845491104-8eb10126746d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbiUyMGFtZXJpY2ElMjBjdWx0dXJlfGVufDF8fHx8MTc3NDM0NDA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Comunidades indígenas luchan por preservar la selva amazónica frente a la deforestación y el desarrollo industrial.",
      duration: "45:30",
    },
    {
      id: 4,
      title: "Arquitectura soviética: Memoria en concreto",
      country: "Europa",
      videoId: "dQw4w9WgXcQ", // Reemplazar con ID real de YouTube
      thumbnail: "https://images.unsplash.com/photo-1704908327709-099b77b57ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGFyY2hpdGVjdHVyZSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NzQzNDQwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Un viaje por las estructuras arquitectónicas de la era soviética y las historias que guardan sus paredes.",
      duration: "38:20",
    },
    {
      id: 5,
      title: "Mercados flotantes de Bangkok",
      country: "Asia",
      videoId: "dQw4w9WgXcQ", // Reemplazar con ID real de YouTube
      thumbnail: "https://images.unsplash.com/photo-1667530611203-6661fd9743a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhJTIwc3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc0MzQ0MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "La tradición de los mercados flotantes sobrevive en medio de la Bangkok moderna y cosmopolita.",
      duration: "25:15",
    },
    {
      id: 6,
      title: "Marruecos: Artesanos del desierto",
      country: "África",
      videoId: "dQw4w9WgXcQ", // Reemplazar con ID real de YouTube
      thumbnail: "https://images.unsplash.com/photo-1759144204797-cbbb4372ca77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkb2N1bWVudGFyeSUyMGFmcmljYXxlbnwxfHx8fDE3NzQzNDQwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Artesanos marroquíes mantienen vivas técnicas milenarias en talleres familiares del Atlas.",
      duration: "30:40",
    },
  ];

  const countries = ["todos", "África", "Asia", "América Latina", "Europa"];

  const filteredReportajes =
    selectedCountry === "todos"
      ? reportajes
      : reportajes.filter((r) => r.country === selectedCountry);

  return (
    <div>
      {/* Header */}
      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl tracking-tight mb-4">REPORTAJES DOCUMENTALES</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Historias documentadas en video desde diferentes países del mundo
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="border-b border-neutral-200 bg-white sticky top-[89px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-4 overflow-x-auto">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-4 py-2 whitespace-nowrap tracking-wide transition-colors ${
                  selectedCountry === country
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {country.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredReportajes.map((reportaje) => (
            <div key={reportaje.id} className="group">
              <div className="aspect-video overflow-hidden bg-neutral-900 mb-4 relative cursor-pointer">
                {/* Video embed - reemplazar con tus videos reales de YouTube */}
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${reportaje.videoId}`}
                  title={reportaje.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center gap-4 text-xs tracking-widest text-neutral-500 mb-3">
                <span>{reportaje.country}</span>
                <span>•</span>
                <span>{reportaje.duration}</span>
              </div>
              <h2 className="text-2xl tracking-tight text-neutral-900 mb-3">
                {reportaje.title}
              </h2>
              <p className="text-neutral-600 leading-relaxed">{reportaje.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
