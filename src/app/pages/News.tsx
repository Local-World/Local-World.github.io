import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { newsArticles } from "./newsData";

export function News() {

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
            <Link
              key={article.id}
              to={`/noticias/${article.id}`}
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100 mb-4">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs tracking-widest text-neutral-500 mb-3">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h2 className="text-2xl tracking-tight text-neutral-900 mb-3 group-hover:text-neutral-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-neutral-600 leading-relaxed">{article.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
