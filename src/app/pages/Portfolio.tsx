import { useEffect, useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const photos = [
    {
      id: 1,
      url: "/Portfolio/madrehijo_alsacia.jpg",
      title: "Madre e hijo en Alsacia",
      location: "Francia",
      description: "",
    },
    {
      id: 2,
      url: "/Portfolio/monte_alsacia.jpg",
      title: "Paisaje de Alsacia",
      location: "Francia",
      description: "",
    },
    {
      id: 3,
      url: "/Portfolio/ana_musical.jpg",
      title: "Orgulloso de ti, hermanita",
      location: "España",
      description: "",
    },
    {
      id: 4,
      url: "/Portfolio/iglesia_alsacia.jpg",
      title: "Iglesia en Alsacia",
      location: "Francia",
      description: "",
    },
    {
      id: 5,
      url: "/Portfolio/camello_agadir.jpg",
      title: "Trata de Camellos",
      location: "Marruecos",
      description: "En Marruecos es común el maltrato de camellos para uso turístico.",
    },
    {
      id: 6,
      url: "/Portfolio/mauritania_hombre.jpg",
      title: "Un café en Mauritania",
      location: "Mauritania",
      description: "Comercios callejeros de café y té en pueblos de Mauritania.",
    },
    {
      id: 7,
      url: "/Portfolio/mujer_mercado.jpg",
      title: "Mujer en mercado de Marrakech",
      location: "Marruecos",
      description: "",
    },
    {
      id: 8,
      url: "/Portfolio/margalo.jpg",
      title: "Tortuga al sol",
      location: "España",
      description: "",
    },
    {
      id: 9,
      url: "/Portfolio/bicicleta_bratislava.jpg",
      title: "Paseo en bicicleta en Bratislava",
      location: "Eslovaquia",
      description: "",
    },
    {
      id: 10,
      url: "/Portfolio/pareja_marrakech.jpg",
      title: "Las vistas de Marrakech",
      location: "Marruecos",
      description: "",
    },
    {
      id: 11,
      url: "/Portfolio/pareja_agadir.jpg",
      title: "Playa en Agadir",
      location: "Marruecos",
      description: "",
    },
    {
      id: 12,
      url: "/Portfolio/marmenor.jpg",
      title: "Veleros en el Mar Menor",
      location: "España",
      description: "",
    },
    {
      id: 13,
      url: "/Portfolio/byn_cartagena.jpg",
      title: "Viejos tiempos en Cartagena",
      location: "España",
      description: "",
    },
    {
      id: 14,
      url: "/Portfolio/ceramica_agadir.jpg",
      title: "Alfarero de Agadir",
      location: "Marruecos",
      description: "Una antigua profesión Marroquí que se mantiene aún en algunas zonas del país",
    },
    {
      id: 15,
      url: "/Portfolio/granada.jpg",
      title: "Arquitectura granadina",
      location: "España",
      description: "",
    },
    {
      id: 16,
      url: "/Portfolio/max.jpg",
      title: "Gracias",
      location: "España",
      description: "'No diré que no lloréis, pues no todas las lágrimas son amargas'",
    },
    {
      id: 17,
      url: "/Portfolio/arbol_nieve.jpg",
      title: "Árbol nevado en Alsacia",
      location: "Francia",
      description: "",
    },
    {
      id: 18,
      url: "/Portfolio/pueblo_agadir.jpg",
      title: "Personas paseando por un pueblo de Agadir",
      location: "Marruecos",
      description: "",
    },
    {
      id: 19,
      url: "/Portfolio/noria_alsacia.jpg",
      title: "Noria en Alsacia",
      location: "Francia",
      description: "",
    },
    {
      id: 20,
      url: "/Portfolio/muro_budapest.jpg",
      title: "Las víctimas de la ocupación alemana",
      location: "Hungría",
      description: "Monumento polémico debido a que pretende blanquear el papel de Hungría en el Holocausto",
    },
    {
      id: 21,
      url: "/Portfolio/ana_musical2.jpg",
      title: "Obra musical Gran Showman",
      location: "España",
      description: "",
    },
    {
      id: 22,
      url: "/Portfolio/pareja_agadir_byn.jpg",
      title: "Día en la playa de Marruecos",
      location: "Marruecos",
      description: "",
    },
    {
      id: 23,
      url: "/Portfolio/rulitas_desierto.jpg",
      title: "La inmensidad del desierto",
      location: "Túnez",
      description: "",
    },
    {
      id: 24,
      url: "/Portfolio/playa_perro.jpg",
      title: "Un día en la playa",
      location: "España",
      description: "",
    },
    {
      id: 25,
      url: "/Portfolio/mauritania_mujeres.jpg",
      title: "Las mujeres en Mauritania",
      location: "Mauritania",
      description: "",
    },
    {
      id: 26,
      url: "/Portfolio/trabajador_agadir.jpg",
      title: "Trabajos de Agadir",
      location: "Marruecos",
      description: "",
    },
    {
      id: 27,
      url: "/Portfolio/caña_agadir.jpg",
      title: "La soledad en Marruecos",
      location: "Marruecos",
      description: "",
    },
    {
      id: 28,
      url: "/Portfolio/nieve_alsacia.jpg",
      title: "Paisaje nevado",
      location: "Alemania",
      description: "",
    },
    {
      id: 29,
      url: "/Portfolio/ruina_kasserine.jpg",
      title: "Ruinas romanas de Kasserine",
      location: "Túnez",
      description: "Kasserine fue una ciudad en la época romana, en donde aun cuenta con ruinas de esta época",
    },
    {
      id: 30,
      url: "/Portfolio/natalia_noria.jpg",
      title: "Grandes recuerdos",
      location: "España",
      description: "",
    },
    {
      id: 31,
      url: "/Portfolio/rulis.jpg",
      title: "Rulis",
      location: "Marruecos",
      description: "",
    },
    {
      id: 32,
      url: "/Portfolio/primaken.jpg",
      title: "Primaken",
      location: "Marruecos",
      description: "",
    },
    {
      id: 33,
      url: "/Portfolio/poblado_playa.jpg",
      title: "Poblado de pescadores Agadir",
      location: "Marruecos",
      description: "",
    },
  ];

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  const openPhoto = (index: number) => {
    setDirection(0);
    setSelectedIndex(index);
  };

  const closePhoto = () => {
    setSelectedIndex(null);
    setDirection(0);
  };

  const goToPrevious = () => {
    if (selectedIndex === null) return;
    setDirection(-1);
    setSelectedIndex((prev) => (prev === 0 ? photos.length - 1 : (prev as number) - 1));
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    setDirection(1);
    setSelectedIndex((prev) => (prev === photos.length - 1 ? 0 : (prev as number) + 1));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") closePhoto();
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };

    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  return (
    <div className="bg-[#FFF4EA] text-[#2E201D]">
      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl tracking-tight mb-4">PORTFOLIO FOTOGRÁFICO</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Una colección de imágenes capturadas durante años de viajes documentando historias alrededor del mundo
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => openPhoto(index)}
              className="group cursor-pointer text-left"
            >
              <div className="aspect-[4/5] overflow-hidden mb-3 rounded-md shadow-[0_4px_12px_rgba(110,31,42,0.07)]">
                <ImageWithFallback
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="tracking-tight text-neutral-900 mb-1">{photo.title}</h3>
              <p className="text-sm text-neutral-500">{photo.location}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-[#F3E6D8] py-20 border-t border-t-[#D9C3B3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl tracking-tight text-neutral-900 mb-6">SOBRE MI FOTOGRAFÍA</h2>
          <p className="text-neutral-700 mb-6">
            Cada imagen cuenta una historia. Mi trabajo fotográfico busca capturar momentos auténticos
            que reflejen la esencia de las personas, lugares y culturas que documento.
          </p>
          <p className="text-neutral-700">
            Centrado en fotografía periodística, mi objetivo es crear imágenes que no solo
            documenten la realidad, sino que también inviten a la reflexión y acerquen al que la vea a ese mundo.
          </p>
        </div>
      </section>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={closePhoto}
        >
          <div
            className="relative flex flex-col items-center max-w-[95vw] max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closePhoto}
              className="absolute -top-3 -right-3 z-30 bg-white/10 hover:bg-white/20 border border-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors backdrop-blur"
              aria-label="Cerrar imagen"
            >
              ×
            </button>

            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-2 md:-left-16 top-[40%] -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors backdrop-blur"
              aria-label="Imagen anterior"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-2 md:-right-16 top-[40%] -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors backdrop-blur"
              aria-label="Imagen siguiente"
            >
              ›
            </button>

            <div
              key={`${selectedPhoto.id}-${direction}`}
              className={`inline-flex flex-col items-center ${
                direction > 0
                  ? "animate-[slideInRight_350ms_ease]"
                  : direction < 0
                  ? "animate-[slideInLeft_350ms_ease]"
                  : "animate-[fadeIn_250ms_ease]"
              }`}
            >
              <div className="inline-block overflow-hidden rounded-t-md shadow-2xl bg-black max-w-[95vw]">
                <ImageWithFallback
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="block max-w-[95vw] max-h-[68vh] w-auto h-auto object-contain bg-black"
                />
              </div>

              <div className="w-full bg-white rounded-b-md px-6 py-5 md:px-8 md:py-6 shadow-2xl">
                <p className="text-sm text-neutral-400 mb-2">
                  {selectedIndex + 1} / {photos.length}
                </p>
                <h3 className="text-2xl tracking-tight text-neutral-900 mb-1">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-3">{selectedPhoto.location}</p>
                <p className="text-neutral-700 leading-relaxed">{selectedPhoto.description}</p>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes slideInRight {
              from {
                opacity: 0;
                transform: translateX(60px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-60px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: scale(0.98);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}