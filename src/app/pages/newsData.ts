export type NewsArticle = {
  id: number;
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
  content: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Opinión: La vuelta al imperialismo",
    summary:
      "En una época en la que el mundo parece estar más avanzado tecnológicamente que nunca, yo me pregunto: ¿Por qué parece que hemos vuelto al sistema imperialista que reprimía antaño?",
    image: "/mundo_imperialista.jpg",
    date: "6 de Abril 2026",
    category: "Opinión",
    content: [
      "El debate vuelve a cobrar fuerza en las plazas, en las redes y en los parlamentos: ¿somos realmente libres o vivimos una nueva forma de imperialismo? Muchos expertos señalan que, aunque las banderas y los ejércitos cambian, las dinámicas de poder económico, cultural y tecnológico siguen replicando estructuras desiguales.",
      "En las últimas décadas hemos visto cómo los grandes bloques geopolíticos amplían su influencia mediante acuerdos comerciales, tecnología y control mediático. Esta vez no es solo una ocupación militar con tanques: es una ocupación de mercados, mentalidades y recursos naturales.",
      "Para entender este fenómeno es clave mirar hacia los países dependientes, donde la deuda externa, las multinacionales extractivas y los mensajes de ‘progreso’ generan una nueva forma de sometimiento. La crisis climática y la transición energética solo agravan ese pulso, porque los recursos estratégicos pasan a manos de unos pocos.",
      "Ante esto, la respuesta pasa por romper con las historias impuestas y apoyar la soberanía real de los pueblos. Solo así podremos construir un mundo donde la palabra ‘imperialismo’ no vuelva a definir nuestro futuro.",
    ],
  },
];
