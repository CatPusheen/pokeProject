import { Pokemon } from './classes.js';
import { fillPokemonCard } from './const.js';

    const pokemon =  JSON.parse(localStorage.getItem('pokemons'));
  const mp = pokemon.map(el => fillPokemonCard(el))
    
    
 