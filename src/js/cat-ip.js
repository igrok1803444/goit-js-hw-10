import axios from 'axios';
import { Notify } from 'notiflix';
import {
  toFillSelectData,
  renderCatInfo,
  DOMNavigation,
} from './render-interface';
export { fetchBreeds, fetchCatByBreed };

function fetchBreeds() {
  axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      toFillSelectData(response.data);
      DOMNavigation.loader.style.display = 'none';
    })
    .catch(erorr => {
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
}
function fetchCatByBreed(breedId) {
  axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      renderCatInfo(response.data[0]);
    })
    .catch(erorr => {
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
}
