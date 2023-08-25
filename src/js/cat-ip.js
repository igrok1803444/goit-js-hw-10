import axios from 'axios';
export const functions = {
  fetchBreeds: fetchBreeds(),
};
function fetchBreeds() {
  axios.get('https://api.thecatapi.com/v1/breeds');
}
