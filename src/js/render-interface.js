import SlimSelect from 'slim-select';
import { fetchBreeds } from './cat-ip.js';
export { toFillSelectData };
const DOMNavigation = {
  selectElement: document.querySelector('.breed-select'),
};

const selectDataArray = [];

const select = new SlimSelect({
  select: DOMNavigation.selectElement,
  data: selectDataArray,
  events: {
    afterChange: newVal => {
      console.log(newVal);
    },
  },
});
function toFillSelectData(dataArray) {
  dataArray.forEach(element => {
    const markup = { text: element.name, id: element.id };

    selectDataArray.push(markup);
  });
  console.log(selectDataArray);
  select.setData(selectDataArray);
}
