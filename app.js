const URL = "https://japones.onrender.com/api/v1/anime/";

const URL2 ="https://japones.onrender.com/api/v1/manga/"

const container = document.querySelector("#container");
const containerDos = document.querySelector("#containerDos");


//De manera global tengo una lista donde almacenar las peliculas fuera de cualquier función
let animeList;

let mangaList;
//---------------------------------------------

const get = async () => {
  const raw = await fetch(URL);
  const json = await raw.json();
  const anime =  json.data.anime;
 
  mapAnime(anime);
};

const get2 = async () => {
    const raw = await fetch(URL2);
    const json = await raw.json();
    const manga =  json.data.manga;
 
    mapManga(manga);
  };

const mapAnime = (animes) => {
  
  const mappedAnime = animes.map((anime) => ({
    img:anime.images ,
    name: anime.name,
    description: anime.description,
   
  }));
  animeList = mappedAnime;
  generateHTML(animeList);
};

const mapManga = (mangas) => {
  
    const mappedManga = mangas.map((manga) => ({
      img: manga.images ,
      name: manga.name,
      description: manga.description,
    }));
    mangaList = mappedManga;
    generateHTMLDos(mangaList);
  };

const generateHTML = (mappedList) => {


 
  for (const item of mappedList) {
    const figure = `
    <figure class="figure">
    <div class="image"><img src="${item.img}"/></div>
    <h1 class="titulo">${item.name}</h1>
    <p class="description">${item.description}</p>
    </figure>

    `;
    paint(figure);
  }
};
const generateHTMLDos = (mappedList) => {
 
    for (const item of mappedList) {
      const figure = `
      <figure class="figureManga">
      <div class="imageManga"><img src="${item.img}"/></div>
      <div class="texto">
        <h1 class="titulo">${item.name}</h1>
        <p class="description">${item.description}</p>
      
      </div>
      </figure>
      `;
      paint(figure);
    }
  };
  

const paint = (figure) => {
  container.innerHTML += figure;
};



const starManga = () => {
  container.innerHTML = "";
  get()



}

const starAnime = () => {
  container.innerHTML = "";
  get2()
  
}





