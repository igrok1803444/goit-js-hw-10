import SlimSelect from 'slim-select';
import { fetchCatByBreed } from './cat-ip';
export { toFillSelectData, renderCatInfo };
const DOMNavigation = {
  selectElement: document.querySelector('.breed-select'),
  catInfoElement: document.querySelector('.cat-info'),
};

const selectDataArray = [];

const select = new SlimSelect({
  select: DOMNavigation.selectElement,
  data: selectDataArray,
  events: {
    afterChange: newVal => {
      fetchCatByBreed(newVal[0].value);
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
  const markup = `<img src='${catInfoObject.url}'>`;
  console.log(markup);
}
