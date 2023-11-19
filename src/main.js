const form = document.querySelector('.form-wrapper');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const bmiResult = document.querySelector('.bmi-result');
const bmiStatement = document.querySelector('.bmi-statement');
const details = document.querySelector('dialog');
const modalClose = document.querySelector('dialog .modal-close button');

form.addEventListener('submit', e => {
  e.preventDefault();

  details.showModal();

  let height = heightInput.value;
  let weight = weightInput.value;
  let bmiCalculate = (weight / (height / 100) ** 2).toFixed(1);

  bmiResult.innerText = bmiCalculate;

  if (bmiCalculate < 18.5) {
    bmiStatement.innerText = 'Your BMI falls within the underweight range';
  } else if (bmiCalculate > 18.5 && bmiCalculate <= 24.9) {
    bmiStatement.innerText =
      'Your BMI falls within the normal or healthy weight range';
  } else if (bmiCalculate >= 25 && bmiCalculate <= 29.9) {
    bmiStatement.innerText = 'Your BMI falls within the overweight range';
  } else {
    bmiStatement.innerText = 'Your BMI falls within the obese range';
  }

  heightInput.value = '';
  weightInput.value = '';
});

modalClose.onclick = () => {
  details.close();
};
