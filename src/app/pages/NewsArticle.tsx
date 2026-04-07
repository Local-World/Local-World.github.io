import { Link, useParams } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { newsArticles } from "./newsData";

export function NewsArticle() {
  const { id } = useParams();

  const article = newsArticles.find((item) => item.slug === id);

  if (!article) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl tracking-tight text-neutral-900 mb-4">
          Artículo no encontrado
        </h1>
        <p className="text-neutral-600 mb-8">
          No hemos encontrado el artículo que buscas.
        </p>
        <Link
          to="/noticias"
          className="inline-block text-neutral-900 underline underline-offset-4"
        >
          Volver a noticias
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <article className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <header className="mb-10">
          <div className="flex items-center gap-4 text-xs tracking-widest text-neutral-500 mb-5">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <h1 className="text-5xl md:text-6xl tracking-tight text-neutral-900 mb-6">
            {article.title}
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed text-neutral-700 max-w-3xl">
            {article.summary}
          </p>
        </header>

        <figure className="mb-12">
          <div className="overflow-hidden rounded-lg bg-neutral-100">
            <ImageWithFallback
              src={article.image}
              alt={article.caption}
              className="w-full h-auto object-cover"
            />
          </div>

          <figcaption className="mt-3 text-sm italic text-neutral-500">
            {article.caption}
          </figcaption>
        </figure>

        <div className="space-y-6 text-lg leading-relaxed text-neutral-800">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <Link
            to="/noticias"
            className="inline-block text-neutral-900 underline underline-offset-4"
          >
            Volver a noticias
          </Link>
        </div>
      </article>
    </main>
  );
}