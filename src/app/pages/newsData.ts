export type NewsArticle = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  image: string;
  caption: string;
  date: string;
  category: string;
  content: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "la-vuelta-al-imperialismo",
    title: "Opinión: La vuelta al imperialismo",
    summary:
      "En una época en la que el mundo parece estar más avanzado tecnológicamente que nunca, yo me pregunto: ¿Por qué parece que hemos vuelto al sistema imperialista que reprimía antaño?",
    image: "/mundo_imperialista - copia.jpg",
    caption: "Trump y Xi Jinping",
    date: "6 de Abril 2026",
    category: "Opinión",
    content: [
      "Siglo XXI, la era de mayor avance en toda la humanidad, la era de la información, de los avances médicos y del confort. Pero, ¿es posible que a pesar de todo el mundo haya vuelto al imperialismo del siglo XIX?",
      "En las últimas décadas hemos visto cómo los grandes bloques geopolíticos amplían su influencia mediante acuerdos comerciales, tecnología y control mediático. El poder parece no medirse ya con ocupación militar, sino con tecnología, ideología e influencia en regiones. O eso parece, ¿No?",
      "Hace unos pocos meses Donald Trump, entraba a Venezuela y secuestraba sin el permiso internacional a uno de los peores dictadores del último siglo, Nicolás Maduro. Todo el mundo parecía celebrarlo, el pueblo de Venezuela era libre por fin. Pero, cuatro meses después ¿Es así?",
      "El 28 de febrero en la famosa operación 'Furia épica' Donald Trump junto con Benjamin Netanyahu, atacaban, de nuevo, sin el permiso internacional ni de la corte de los Estados Unidos, a una de las mayores potencias de oriente medio, Irán. ¿La excusa esta vez? Este país parece estar a punto de contar con armas nucleares (me recuerda a algo que ocurrió en 2003), y eliminar el horrible y represorio régimen de los ayatolás. ",
      "Año 2022, Ucrania está a punto de entrar en la OTAN. A lo que Rusia se opone rotundamente a esa decisión. ¿La consecuencia? Invadir a un país por mis propios medios. Invasión, que a día de hoy, aunque ya prácticamente no salga en los medios, sigue vigente.", 
      "Gaza, un paraje desolado, el infierno en la Tierra. ¿Cuántos crimenes de guerra se han cometido en ese territorio? Sin consecuencias, Israel puede bombardear colegios y hospitales, hacer record de periodistas asesinados sin consecuencias. ¿Qué mensaje se le da al mundo?",
      "¿Y que pasa con China? China no se mete con nadie ¿no? China es el gran callado de esta partida de ajedrez. Mientras los demás invaden paises a fuerza bruta, ellos están haciendose fuertes en su propio país. Mejoran infraestructuras, tecnología, armamento y por supuesto mejorando redes comerciales y riqueza. Xingping sigue con su plan: En el 2049 ser la mayor potencia mundial. Pero no, China no se conforma solo con esto. Es cierto que sin violencia aparente, pero china ya cuenta con mas de 10.000 empresas propias en el continente africano, más de 182.000 millones en prestamos a este continente y millones de chinos con visas de trabajo en paises con Angola. China es el invasor silencioso del siglo XXI, pero no por no derramar sangre dejas de ser un invasor.",   
      "Y sí, este articulo no va de política, no va de que bueno/malo es Trump por buscar la democracia/el petróleo de un país u otro. No va de como Putin y Rusia están locos por invadir un país occidental como Ucrania. Ni tampoco de lo malos que son los sionistas o los chinos. Va de este nuevo orden mundial que se está cocinando. El cómo ya estamos inmersos en una guerra mundial pero sin saberlo. Una tercera guerra mundial librándose silenciosamente en paises proxis. Y sobre todo, en como cuatro grandes imperios quieren hacerse con el control del mundo, como a nuestra costa pretenden repartirse nuestra riqueza, nuestra influencia, religión y especialmente: Nuestro Futuro."  
    ],
  }, 
];