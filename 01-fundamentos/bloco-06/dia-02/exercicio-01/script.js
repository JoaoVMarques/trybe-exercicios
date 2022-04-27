document.getElementById('send-button').addEventListener('click', (event) => {
  event.preventDefault()
});

const myDate = new Date();
const picker = new Pikaday({
   field: document.getElementById('datepicker'),
   minDate: new Date(myDate.getFullYear(), myDate.getMonth() + 1, 1),
   maxDate: new Date(2022, 11, 31) });
console.log(myDate.getDay());