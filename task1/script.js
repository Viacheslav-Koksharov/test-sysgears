import data from './data.json' assert { type: 'json' };
import { initOption } from './helper.js';

const refs = {
  inputValue: document.querySelector('#distance'),
  inputUnit: document.querySelector('#unit'),
  outputValue: document.querySelector('#convert_distance'),
  outputUnit: document.querySelector('#convert_unit'),
};

refs.inputValue.addEventListener('input', handleChangeValue);
refs.inputUnit.addEventListener('change', handleChangeUnit);
refs.outputUnit.addEventListener('change', handleChangeUnit);

initOption(data,refs.inputUnit, refs.outputUnit);

function handleChangeValue() {
  const { inputValue, inputUnit, outputValue, outputUnit } = refs;

  if (inputValue.value) {
    inputUnit.removeAttribute('disabled');
    outputUnit.removeAttribute('disabled');

    if (inputUnit.value === outputUnit.value) {
      outputValue.value = inputValue.value;
    } else {
      handleChangeUnit();
    }
  } else {
    outputValue.value = '';
    inputUnit.setAttribute('disabled', true);
    outputUnit.setAttribute('disabled', true);
  }
}

function handleChangeUnit() {
  const { inputValue, inputUnit, outputValue, outputUnit } = refs;

  if (!inputValue.value) return;

  if (inputUnit.value === outputUnit.value) {
    outputValue.value = inputValue.value;
  } else {
    outputValue.value = (
      data[inputUnit.value][outputUnit.value] * inputValue.value
    ).toFixed(2);
  }
}
