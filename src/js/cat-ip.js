import axios from 'axios';
import { Notify } from 'notiflix';
import { toFillSelectData } from './render-interface';
export { fetchBreeds };

function fetchBreeds() {
  axios
    .get('https://api.thecatapi.com/v12/breeds')
    .then(response => {
      return response.data;
    })
    .then(data => {
      toFillSelectData(data);
      // console.log(data);
    })
    .catch(erorr => {
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
}
