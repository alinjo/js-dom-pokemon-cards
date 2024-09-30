

const ulElement = document.querySelector('.cards');

function createPokemonCard(pokemon) {

  const liElement = document.createElement('li');
  liElement.classList.add('card');

  const titleElement = document.createElement('h2');
  titleElement.classList.add('card--title');
  titleElement.textContent = pokemon.name;

  const imgElement = document.createElement('img');
  imgElement.classList.add('card--img');
  imgElement.src = pokemon.sprites.other['official-artwork'].front_default;
  imgElement.alt = pokemon.name;
  imgElement.width = 256;

  const statsListElement = document.createElement('ul');
  statsListElement.classList.add('card--text');

  const stats = [

    { name: 'HP', value: pokemon.stats[0].base_stat },
    { name: 'ATTACK', value: pokemon.stats[1].base_stat },
    { name: 'DEFENSE', value: pokemon.stats[2].base_stat },
    { name: 'SPECIAL-ATTACK', value: pokemon.stats[3].base_stat },
    { name: 'SPECIAL-DEFENSE', value: pokemon.stats[4].base_stat },
    { name: 'SPEED', value: pokemon.stats[5].base_stat }

];

  stats.forEach(stat => {

    const statItemElement = document.createElement('li');
    statItemElement.textContent = `${stat.name}: ${stat.value}`;
    statsListElement.appendChild(statItemElement);

  });

  liElement.appendChild(titleElement);
  liElement.appendChild(imgElement);
  liElement.appendChild(statsListElement);

  return liElement;

}

data.forEach(pokemon => {

  const cardElement = createPokemonCard(pokemon);
  ulElement.appendChild(cardElement);

});
