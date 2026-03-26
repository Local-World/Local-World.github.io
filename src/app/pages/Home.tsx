import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const featuredStories = [
    {
      id: 1,
      title: "Voces de África: Historias no contadas",
      description: "Un viaje por el continente africano explorando culturas, tradiciones y las historias de sus habitantes.",
      image: "https://images.unsplash.com/photo-1759144204797-cbbb4372ca77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkb2N1bWVudGFyeSUyMGFmcmljYXxlbnwxfHx8fDE3NzQzNDQwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Reportajes",
      link: "/reportajes",
    },
    {
      id: 2,
      title: "Crisis climática global: El tiempo se agota",
      description: "Análisis profundo de los efectos del cambio climático en comunidades vulnerables alrededor del mundo.",
      image: "https://images.unsplash.com/photo-1584573062942-d46bb3aee3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG5ld3MlMjBnbG9iYWx8ZW58MXx8fHwxNzc0MzQ0MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Noticias",
      link: "/noticias",
    },
    {
      id: 3,
      title: "Miradas del mundo: Portfolio fotográfico",
      description: "Una colección de imágenes capturadas durante años de viajes y documentación de historias humanas.",
      image: "https://images.unsplash.com/photo-1585983549382-4e608379fc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHBvcnRmb2xpbyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQyNzY1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Portfolio",
      link: "/portfolio",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] bg-neutral-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1531164571830-7b608d24afd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGpvdXJuYWxpc20lMjByZXBvcnRlcnxlbnwxfHx8fDE3NzQzNDQwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Documentary journalism"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl tracking-tight mb-6">
            HISTORIAS QUE TRANSFORMAN
          </h1>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Reportajes documentales y periodismo de investigación desde todos los rincones del mundo
          </p>
          <Link
            to="/reportajes"
            className="inline-block bg-white text-neutral-900 px-8 py-3 tracking-wide hover:bg-neutral-100 transition-colors"
          >
            VER REPORTAJES
          </Link>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl tracking-tight text-neutral-900 mb-12">DESTACADOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStories.map((story) => (
            <Link
              key={story.id}
              to={story.link}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100 mb-4">
                <ImageWithFallback
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-xs tracking-widest text-neutral-500 mb-2">{story.category}</div>
              <h3 className="text-xl tracking-tight text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
                {story.title}
              </h3>
              <p className="text-neutral-600">{story.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl tracking-tight text-neutral-900 mb-6">SOBRE ESTE PROYECTO</h2>
          <p className="text-neutral-700 mb-6">
            Un espacio dedicado al periodismo documental y de investigación. Aquí encontrarás reportajes
            en video, análisis de actualidad y un portfolio fotográfico resultado de años de trabajo en
            terreno capturando historias que necesitan ser contadas.
          </p>
          <p className="text-neutral-700">
            Cada reportaje es un testimonio del mundo que nos rodea, un compromiso con la verdad y una
            ventana hacia realidades que muchas veces permanecen invisibles.
          </p>
        </div>
      </section>
    </div>
  );
}
