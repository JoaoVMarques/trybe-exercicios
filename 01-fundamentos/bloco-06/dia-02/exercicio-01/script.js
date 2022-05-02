document.getElementById('datepicker').addEventListener('click', (event) => {
  event.preventDefault();
});

// const validate = new window.JustValidate('#form');

const myDate = new Date();
const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  trigger: document.getElementById('selectData'),
  minDate: new Date(myDate.getFullYear(), myDate.getMonth() + 1, 1),
  defaultDate: new Date(myDate.getFullYear(), myDate.getMonth() + 1, 1),
  maxDate: new Date(2022, 11, 31)
});

const validation = new JustValidate('#form');
validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Name is required',
    },
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ])
  .addField('#datepicker', [
    {
      rule: 'required',
      errorMessage: 'Data is required',
    },
  ])
  .addField('#use-pictures', [
    {
      rule: 'required',
      errorMessage: 'Term is required',
    },
]);
