import uniteWordCards from './study/study'

export default async function model() {

    const word: any = (<HTMLInputElement>document.querySelector('input[type="text"]')).value;
    async function showDescription() {
        let mainTag = document.querySelector('main');
        mainTag?.insertAdjacentElement('afterbegin', await uniteWordCards(word));
        return mainTag;
    }

    showDescription();
}
