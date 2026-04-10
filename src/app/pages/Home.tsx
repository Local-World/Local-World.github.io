import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const heroImages = [
    "/pag_principal.jpg",
    "/desierto.jpg",
    "/mauritania_hombre.jpg",
    "/Portfolio/marmenor.jpg",
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 15000);

    return () => window.clearInterval(interval);
  }, [heroImages.length]);

  const featuredStories = [
    {
      id: 1,
      title: "6 Días en Mauritania",
      description:
        "En este reportaje cuento como es la vida en un país tan inhóspito como Mauritania, durante 6 días me intento adentrar en la cultura de este país viajando yo solo por este y conociendo a distintas personas que me cuentan como se vive ahí.",
      image: "/PORTADA MAURITANIA.jpg",
      category: "Reportajes",
      link: "/reportajes",
    },
    {
      id: 2,
      title: "Opinión: La vuelta al imperialismo",
      description:
        "En una época en la que el mundo parece estar más avanzado tecnológicamente que nunca, yo me pregunto: ¿Por qué parece que hemos vuelto al sistema imperialista que reprimía antaño?",
      image: "/mundo_imperialista.jpg",
      category: "Opinión",
      link: "/noticias",
    },
    {
      id: 3,
      title: "Portfolio fotográfico",
      description:
        "Una colección de imágenes capturadas durante años de viajes y documentación de historias humanas.",
      image: "/Portfolio/madrehijo_alsacia.jpg",
      category: "Portfolio",
      link: "/portfolio",
    },
  ];

  return (
    <div>
      <section className="relative h-[70vh] min-h-[400px] md:min-h-[600px] bg-gradient-to-br from-vintage-crimson to-vintage-crimson flex items-center justify-center overflow-hidden shadow-inner">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <ImageWithFallback
              key={image}
              src={image}
              alt="Portada Local World"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ${
                index === currentHeroIndex ? "opacity-40" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-10 text-center text-white sm:pt-12 md:pt-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4 sm:mb-5 drop-shadow-lg">
            LOCAL WORLD
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-200 mb-8 max-w-2xl mx-auto leading-8 drop-shadow">
            Reportajes, documentales y periodismo de investigación. Divulgación cultural, etnias,
            tradiciones, problematicas y actualidad. Aquí no venimos a explicar el mundo venimos a
            caminarlo.
          </p>
          <Link
            to="/reportajes"
            className="inline-block bg-[#F2F0EF] text-neutral-900 px-8 py-3 tracking-wide hover:bg-[#A34A52]/90 transition-all shadow-sm hover:shadow-md rounded-lg"
          >
            VER REPORTAJES
          </Link>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentHeroIndex(index)}
              aria-label={`Ir a imagen ${index + 1}`}
              className={`h-2.5 rounded-full transition-all shadow-md ${
                index === currentHeroIndex ? "bg-[#6E1F2A] w-6" : "bg-[#6E1F2A]/25 hover:bg-[#6E1F2A]/40"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl tracking-tight text-foreground mb-8">DESTACADOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStories.map((story) => {
            const borderColor = {
              "Reportajes": "border-t-[#6E1F2A]",
              "Opinión": "border-t-[#6E1F2A]",
              "Portfolio": "border-t-[#6E1F2A]",
            }[story.category] || "border-t-neutral-200";
            return (
              <Link key={story.id} to={story.link} className="group">
                <div className={`aspect-[4/3] overflow-hidden bg-[#6E1F2A]/15 mb-4 rounded-lg shadow-md group-hover:shadow-lg transition-shadow border border-[#6E1F2A]/40 border-t-4 ${borderColor}`}>
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-xs tracking-widest text-muted-foreground mb-2">
                  {story.category}
                </div>
                <h3 className="text-xl tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
                <p className="text-muted-foreground">{story.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-[#F3E6D8] py-20 shadow-[inset_0_2px_0_rgba(84,59,53,0.18)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl tracking-tight text-neutral-900 mb-6">SOBRE MÍ</h2>
          <p className="text-neutral-900/80 mb-6">
            Soy Pablo Martínez, me dedico a viajar y conocer cualquier cultura o país del mundo,
            desde lo mejor de cada una de estas hasta lo peor del ser humano. Este es un espacio
            para exponer lo que he visto con mis propios ojos, a través del periodismo documental y
            de investigación. Aquí encontrarás reportajes en video, análisis de actualidad, opinión
            y un portfolio fotográfico capturando todo tipo de historias que necesitan ser contadas.
          </p>
          <p className="text-secondary-foreground/80">
            Cada reportaje es un testimonio del mundo que nos rodea, un compromiso con la verdad y
            una ventana hacia realidades que muchas veces permanecen invisibles.
          </p>
        </div>
      </section>
    </div>
  );
}