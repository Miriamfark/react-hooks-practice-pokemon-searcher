import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, filteredResults }) {

  let pokemonsArray;
  if (pokemons) {
    pokemonsArray = filteredResults.map((pokemon)=>{
      return <PokemonCard 
      pokemon={pokemon}
      key={pokemon.id} 
      id={pokemon.id}
      name={pokemon.name}
      hp={pokemon.hp}
      frontImage={pokemon.sprites.front}
      backImage={pokemon.sprites.back}
      />
    })
  }

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonsArray}
    </Card.Group>
  );
}

export default PokemonCollection;
