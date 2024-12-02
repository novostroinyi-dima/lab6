const backgrounds = [
  'linear-gradient(45deg, #ff6b6b, #f7a8b8)', 
  'linear-gradient(45deg, #6b8cff, #a8c8f7)', 
  'linear-gradient(45deg, #28a745, #98e39e)', 
  'linear-gradient(45deg, #f39c12, #ffb347)'  
];

let currentBackgroundIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = backgrounds[currentBackgroundIndex];
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length; 
}

setInterval(changeBackground, 100);
const pokemonSprites = [
  'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu-f.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
];

document.getElementById('spawnButton').addEventListener('click', function () {
  const newPokemon = document.createElement('img');
  const randomPokemon = pokemonSprites[Math.floor(Math.random() * pokemonSprites.length)];
  newPokemon.classList.add('pokemon');
  newPokemon.src = randomPokemon;
  const pokemonArea = document.getElementById('pokemonArea');
  pokemonArea.appendChild(newPokemon);
});
