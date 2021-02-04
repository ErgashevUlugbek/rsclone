import bootstrap from "bootstrap";

const words = ["bag", "necklace", "rucksack", "watch", "cap", "belt"];
const container = document.querySelector(".container");

async function getImage(word) {
  const keyForUnsplash = "DlxKjLbXzPSSkmUIwqasUVd4kQUEnM8K8InCW5AfZCo";
  const urlToUnsplashAPI =
    "https://api.unsplash.com/search/photos?client_id=" +
    keyForUnsplash +
    "&query=" +
    word;

  const keyForDictionary = `dict.1.1.20210201T053955Z.6b7efb1061c81be1.8a470cc3dee2d1552d180d11ccb604a55894485f`;
  const urlToDictionaryAPI = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${keyForDictionary}&lang=en-ru&text=${word}`;

  const urls = [urlToUnsplashAPI, urlToDictionaryAPI];
  let controller = new AbortController();

  let fetchCard = urls.map((url) => fetch(url, { signal: controller.signal }));
  let responses = await Promise.all(fetchCard);
  responses = [await responses[0].json(), await responses[1].json()];

  container.insertAdjacentHTML(
    "beforeend",
    `<div class='image'><img src=${responses[0].results[0].urls.regular}></div>
            <div class='image'><img src=${responses[0].results[1].urls.regular}></div>
            <div class='image'><img src=${responses[0].results[2].urls.regular}></div>
            <div class='image'><img src=${responses[0].results[3].urls.regular}></div>
            `
  );

  container.insertAdjacentHTML(
    "beforeend",
    `<h2 class='mean'>Mean: ${responses[1].def[0].tr[0].text}</h2>
                <h2 class='type'>Type: ${responses[1].def[0].pos}</h2>`
  );
}

for (const word of words) {
  getImage(word);
}
