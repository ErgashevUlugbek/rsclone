import getImageAndWordFromAPI from "../../utils/api";

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper", "container");

export default async function uniteWordCards(word: string) {
  const responses = await getImageAndWordFromAPI(word);
  wrapper.innerHTML = '';
  const h2 = document.querySelector('h2')?.hidden;
  return makeWordCards(responses);
}

function makeWordCards(responses: any[]) {
  // let wordSynonyms = responses[1].def[0].tr[0].syn;
  // console.log(wordSynonyms)
  // wordSynonyms = wordSynonyms !== undefined ? wordSynonyms.reduce((prev: any, curr: any) => prev.text + ' ' + curr.text) : ' No synonyms';
  wrapper?.insertAdjacentHTML(
    "beforeend",
    `<div class="card p-4">
      <div class="cardImages row">
        <div class="single-img col-6 flex-wrap"><img src="${responses[0].results[0].urls.regular}" alt="image"></div>
        <div class="single-img col-6 flex-wrap"><img src="${responses[0].results[1].urls.regular}" alt="image"></div>
        <div class="single-img col-6 flex-wrap"><img src="${responses[0].results[2].urls.regular}" alt="image"></div>
        <div class="single-img col-6 flex-wrap"><img src="${responses[0].results[3].urls.regular}" alt="image"></div>
      </div>
      <div class="description">
        <div class="mean">Mean: ${responses[1].def[0].tr[0].text}</div>
        <div class="type">Type: ${responses[1].def[0].tr[0].pos}</div>
      </div>
    </div>`
  );

  return wrapper;
}
