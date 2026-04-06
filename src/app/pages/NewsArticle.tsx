import { Link, useParams } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { newsArticles } from "./newsData";

export function NewsArticle() {
  const { id } = useParams<{ id: string }>();
  const article = newsArticles.find((item) => item.id === Number(id));

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-lg text-neutral-600">No se encontró la noticia solicitada.</p>
        <Link
          to="/noticias"
          className="inline-block mt-6 rounded-full bg-neutral-900 px-6 py-3 text-sm text-white transition hover:bg-neutral-700"
        >
          Volver a noticias
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <Link
        to="/noticias"
        className="inline-block text-sm font-medium text-neutral-600 hover:text-neutral-900 mb-8"
      >
        ← Volver a noticias
      </Link>

      <div className="space-y-8">
        <div className="overflow-hidden rounded-3xl bg-neutral-100">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-[450px] object-cover"
          />
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-neutral-900">{article.title}</h1>
          <p className="text-lg leading-8 text-neutral-600">{article.summary}</p>
        </div>

        <div className="prose prose-neutral max-w-none text-neutral-700">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
