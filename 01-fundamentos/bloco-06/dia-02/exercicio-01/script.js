document.getElementById('submit-btn').addEventListener('click', (event) => {
  console.log('enviado');
});
// const validate = new window.JustValidate('#form');

const myDate = new Date();
const picker = new Pikaday({
   field: document.getElementById('datepicker'),
   trigger: document.getElementById('selectData'),
   minDate: new Date(myDate.getFullYear(), myDate.getMonth() + 1, 1),
   defaultDate: new Date(myDate.getFullYear(), myDate.getMonth() + 1, 1),
   maxDate: new Date(2022, 11, 31) });
