import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { newsArticles } from "./newsData";

export function News() {
  return (
    <div className="bg-[#FFF4EA] text-[#2E201D]">
      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl tracking-tight mb-4">NOTICIAS DE ACTUALIDAD</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Análisis y opinión sobre los acontecimientos que moldean nuestro mundo
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {newsArticles.map((article) => (
            <Link
              key={article.id}
              to={`/noticias/${article.slug}`}
              className="group block"
            >
              <article className="cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden mb-4 rounded-lg shadow-[0_4px_12px_rgba(110,31,42,0.07)]">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center gap-4 text-xs tracking-widest text-[#2E201D]/55 mb-3">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                <h2 className="text-2xl tracking-tight text-[#2E201D] mb-3 group-hover:text-[#6E1F2A] transition-colors">
                  {article.title}
                </h2>

                <p className="text-[#2E201D]/75 leading-relaxed">
                  {article.summary}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}