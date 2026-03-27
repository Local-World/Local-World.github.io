import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Reportajes() {
  const [selectedCountry, setSelectedCountry] = useState("todos");

  const reportajes = [
    {
      id: 1,
      title: "Mauritania: El país que el mundo decidió no mirar",
      country: "Mauritania",
      videoId: "w-st5riqNIs", // Reemplazar con ID real de YouTube
      thumbnail: "/Portada mauritania historia.jpg",
      description: "Esta es la historia de Haytam, una persona ficticia que representa a cada una de las personas que conocí en Mauritania. Contando desde su voz como es la vida en este país.",
      duration: "4:38",
    },
    {
      id: 2,
      title: "6 Días en Mauritania",
      country: "Mauritania",
      videoId: "7RAq2RPBzjE", // Reemplazar con ID real de YouTube
      thumbnail: "/PORTADA MAURITANIA.jpg",
      description: "En este reportaje cuento como es la vida en un país tan inhóspito como Mauritania, durante 6 días me intento adentrar en la cultura de este país viajando yo solo por este y conociendo a distintas personas que me cuentan como se vive ahí.",
      duration: "28:46",
    },
    {
      id: 3,
      title: "Marruecos: La vida en el Rift",
      country: "Marruecos",
      videoId: "_yYZ1wk88GQ", // Reemplazar con ID real de YouTube
      thumbnail: "/Portada_Montañas.JPG",
      description: "En este reportaje cuento como es la vida en el Rift, una región montañosa en el norte de Marruecos. Vemos las diferencias con las grandes ciudades y la forma de vida de los autoctonos de los pueblos rurales.",
      duration: "16:21",
    },
    {
      id: 4,
      title: "Marruecos: Una Tierra de cultura, hospitalidad y mari***na",
      country: "Marruecos",
      videoId: "6XX_DlwovzY", // Reemplazar con ID real de YouTube
      thumbnail: "/Portada_ciudades.jpg",
      description: "¿Cómo es realmente la vida en Marruecos más allá del turismo y los monumentos? En este reportaje cuento como es la vida en las ciudades marroquíes desde un punto de vista diferente a como suelen contar.",
      duration: "11:13",
    },
    {
      id: 5,
      title: "Túnez: Las puertas del Sáhara",
      country: "Túnez",
      videoId: "s-6qcAbyZs4", // Reemplazar con ID real de YouTube
      thumbnail: "",
      description: "Douz, conocida como La puerta del Sáhara, es una ciudad del sur de Túnez conocida por su historia y su cultura relacionada con el desierto. Además de adentrarnos en el desierto, relatamos como fueron las últimas horas de viaje y las conclusiones de este.",
      duration: "20:16",
    },
    {
      id: 6,
      title: "Túnez: El problema del fosfato",
      country: "Túnez",
      videoId: "ILyk9h0wIYU", // Reemplazar con ID real de YouTube
      thumbnail: "",
      description: "No mucha gente conoce qué es el fosfato. Este mineral está siendo utilizado ahora mismo por millones de personas, ya sea en su portatil, smartphone o televisión. Este recurso ha generado mucha riqueza para unos pocos en el norte de África y muchos problemas de salud y explotación en otras muchas personas.",
      duration: "19:13",
    },
    {
      id: 7,
      title: "Túnez: Explorando Kasserine, ciudad de historia y terrorismo",
      country: "Túnez",
      videoId: "ajAYoMxP8t0", // Reemplazar con ID real de YouTube
      thumbnail: "",
      description: "Segundo reportaje en Túnez, esta vez seguimos adentrandonos al interior del país. En nuestro viaje nos encontramos una ciudad afectada hace años por el terrorismo. En esta conocemos gente y la historia de este país.",
      duration: "13:03",
    },
    {
      id: 8,
      title: "¿Cómo es la vida cotidiana en Túnez?",
      country: "Túnez",
      videoId: "seitRW8cJoU", // Reemplazar con ID real de YouTube
      thumbnail: "",
      description: "Primer reportaje en Túnez, en este exploramos como es la vida cotidiana de los tunecinos, tanto en las grandes ciudades como en villas más remotas.",
      duration: "15:19",
    },
  ];

  const countries = ["todos", "Mauritania", "Marruecos", "Túnez"];

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
            Historias documentadas de diferentes países del mundo
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
