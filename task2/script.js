import data from './data.json' assert { type: 'json' };
import { createList } from './helper.js';

const dataUser = data.data;
const condition = data.condition;
const section = document.querySelector('#section');
const buttonFilter = document.querySelector('#filter');
const buttonReset = document.querySelector('#reset');

const list = createList(dataUser);
section.append(list);
let sortList;

buttonFilter.addEventListener('click', handleFilter);
buttonReset.addEventListener('click', handleReset);

function handleFilter() {
  let conditionItem;
  let sortBy;
  let filter = [];

  for (const target in condition) {
      conditionItem = condition[target][0];
    for (const key in conditionItem) {
      conditionItem = key;
    }

    dataUser.filter(item => {
      let match = true;
      for (const key in item) {
        if (
          target === 'exclude' &&
          key === conditionItem &&
          item[key] !== match) {
          filter.push(item);
        }
        if(target === 'include' &&
        key === conditionItem &&
        item[key] === match){
          filter.push(item);
        }
      }
    });
  }

  if (!condition.sort_by) return dataUser;
  for (let i = 0; i < condition.sort_by.length; i++) {
    sortBy = condition.sort_by[i].toString();
  }

  const sortlist = filter.toSorted((a, b) => a[sortBy] - b[sortBy]);
  sortList = createList(sortlist);
  list.remove();
  section.append(sortList);
}

function handleReset(){
  sortList.remove();
  section.append(list);
}
