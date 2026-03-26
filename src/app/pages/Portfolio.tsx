import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("todas");

  const photos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1627961888164-b79f406b245b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGhlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQzMzQxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Retrato en el Atlas",
      category: "Retratos",
      location: "Marruecos",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1650250058624-3a6460e0a8dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwaG90b2dyYXBoeSUyMG1vdW50YWlufGVufDF8fHx8MTc3NDM0NDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Montañas del Himalaya",
      category: "Paisajes",
      location: "Nepal",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1762436933065-fe6d7f51d4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDMzNzY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Vida urbana",
      category: "Urbano",
      location: "Nueva York",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1714842383212-4ed6a4d3fc82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGRvY3VtZW50YXJ5JTIwcGVvcGxlfGVufDF8fHx8MTc3NDM0NDA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Ceremonia tradicional",
      category: "Cultural",
      location: "India",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1667530611203-6661fd9743a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhJTIwc3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc0MzQ0MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Calles de Tokio",
      category: "Urbano",
      location: "Japón",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1704908327709-099b77b57ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGFyY2hpdGVjdHVyZSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NzQzNDQwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Arquitectura europea",
      category: "Arquitectura",
      location: "España",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1759144204797-cbbb4372ca77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkb2N1bWVudGFyeSUyMGFmcmljYXxlbnwxfHx8fDE3NzQzNDQwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Sabana africana",
      category: "Paisajes",
      location: "Kenia",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1632845491104-8eb10126746d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbiUyMGFtZXJpY2ElMjBjdWx0dXJlfGVufDF8fHx8MTc3NDM0NDA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Festival latinoamericano",
      category: "Cultural",
      location: "Colombia",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1612872750175-5b67ab0a6011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG0lMjBjYW1lcmF8ZW58MXx8fHwxNzc0MjQyNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Detrás de cámaras",
      category: "Retratos",
      location: "Set de filmación",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1724627560187-ef762430ab26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBqb3VybmFsaXN0JTIwd29ya2luZ3xlbnwxfHx8fDE3NzQzNDQwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "En el campo",
      category: "Retratos",
      location: "Trabajo en terreno",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1585983549382-4e608379fc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHBvcnRmb2xpbyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQyNzY1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Estudio fotográfico",
      category: "Retratos",
      location: "Studio",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1758525589338-20a5a3a452c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RpZ2F0aXZlJTIwam91cm5hbGlzbXxlbnwxfHx8fDE3NzQzNDQwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Investigación",
      category: "Cultural",
      location: "Archivo",
    },
  ];

  const categories = ["todas", "Retratos", "Paisajes", "Urbano", "Cultural", "Arquitectura"];

  const filteredPhotos =
    selectedCategory === "todas"
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Header */}
      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl tracking-tight mb-4">PORTFOLIO FOTOGRÁFICO</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Una colección de imágenes capturadas durante años de viajes documentando historias alrededor del mundo
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="border-b border-neutral-200 bg-white sticky top-[89px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 whitespace-nowrap tracking-wide transition-colors ${
                  selectedCategory === category
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-neutral-100 mb-3">
                <ImageWithFallback
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="tracking-tight text-neutral-900 mb-1">{photo.title}</h3>
              <p className="text-sm text-neutral-500">{photo.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Photography */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl tracking-tight text-neutral-900 mb-6">SOBRE MI FOTOGRAFÍA</h2>
          <p className="text-neutral-700 mb-6">
            Cada imagen cuenta una historia. Mi trabajo fotográfico busca capturar momentos auténticos
            que reflejen la esencia de las personas, lugares y culturas que documento.
          </p>
          <p className="text-neutral-700">
            Desde retratos íntimos hasta vastos paisajes, mi objetivo es crear imágenes que no solo
            documenten la realidad, sino que también inviten a la reflexión y generen empatía.
          </p>
        </div>
      </section>
    </div>
  );
}
