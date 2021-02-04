export default async function getImageAndWordFromAPI(word: string) {
  // Getting images from "Unsplash API" and translation from "Yandex dictionary API"
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
  let fetchCard = urls.map(
    (url: RequestInfo): Promise<any> =>
      fetch(url, { signal: controller.signal })
  );
  let responses = await Promise.all(fetchCard);
  responses = [await responses[0].json(), await responses[1].json()];

  return responses;
}
