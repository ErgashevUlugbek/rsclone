import "./style.css";
import view from './components/view';
import model from './components/model'
view();

const searchButton = document.querySelector('button#search-button');
searchButton?.addEventListener('click', () => model());

alert('Enter english words it returns russian words and images )')
