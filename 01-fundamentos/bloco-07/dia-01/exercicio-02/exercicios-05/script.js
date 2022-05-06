let count = 0;
const countText = document.getElementById('count-text');
document.getElementById('btn-click').addEventListener('click', () => {
  countText.innerText = count;
  count += 1;
});