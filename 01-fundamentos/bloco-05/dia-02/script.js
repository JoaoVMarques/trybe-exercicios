ondeEsta = document.getElementById('elementoOndeVoceEsta');

ondeEsta.parentNode.style.color = 'green';
console.log(ondeEsta.parentNode);

filho = document.getElementById('primeiroFilhoDoFilho').innerText = 'olá sou o primeiro filho do filho.';
pai = document.getElementById('pai');
console.log(pai.firstElementChild);
console.log(ondeEsta.previousElementSibling);
console.log(ondeEsta.nextSibling);
console.log(ondeEsta.nextElementSibling);
console.log(pai.firstElementChild.nextElementSibling.nextElementSibling);

