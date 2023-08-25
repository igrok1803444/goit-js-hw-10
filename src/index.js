import axios from 'axios';
import { fetchBreeds } from './js/cat-ip';
import './js/render-interface';
import 'slim-select/dist/slimselect.css';
import 'notiflix/dist/notiflix-3.2.6.min.css';
axios.defaults.headers.common['x-api-key'] =
  'live_sqZfETGaJwAJolmuyOFMwKKWWpgc00OcLxLfp4PBYjnUuWCniNYVb3eexoAkkQEg';
document.addEventListener('DOMContentLoaded', fetchBreeds);
