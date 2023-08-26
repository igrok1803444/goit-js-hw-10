import SlimSelect from 'slim-select';
import { fetchCatByBreed } from './cat-ip';
export { toFillSelectData, renderCatInfo, DOMNavigation };
const DOMNavigation = {
  selectElement: document.querySelector('.breed-select'),
  catInfoElement: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader-container'),
};

const selectDataArray = [];

const select = new SlimSelect({
  select: DOMNavigation.selectElement,
  data: selectDataArray,
  events: {
    afterChange: newVal => {
      fetchCatByBreed(newVal[0].value);
      DOMNavigation.catInfoElement.style.display = 'none';
      DOMNavigation.loader.style.display = 'flex';
    },
  },
});
function toFillSelectData(dataArray) {
  dataArray.forEach(element => {
    const markup = { text: element.name, value: element.id };

    selectDataArray.push(markup);
  });
  select.setData(selectDataArray);
}
function renderCatInfo(catInfoObject) {
  const markup = `<img class='cat-info-photo' src='${catInfoObject.url}' alt='photo of ${catInfoObject.breeds[0].name}' width='50%'>
  <div class='cat-info-text-container'>
    <h2 class='cat-breed'>${catInfoObject.breeds[0].name}</h2>
    <p class='cat-desc'>${catInfoObject.breeds[0].description}</p>
    <p class='cat-temperament'><span class='cat-temperament-action'>Temperament:</span> ${catInfoObject.breeds[0].temperament}</p>
  </div>`;
  DOMNavigation.catInfoElement.innerHTML = markup;
  DOMNavigation.catInfoElement.style.display = 'flex';
  DOMNavigation.loader.style.display = 'none';
}
