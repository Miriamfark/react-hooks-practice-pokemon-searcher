import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [newPokemonName, setNewPokemonName] = useState("")
  const [newPokemonHP, setNewPokemonHP] = useState("")
  const [newPokemonFrontImage, setNewPokemonFrontImage] = useState("")
  const [newPokemonBackImage, setNewPokemonBackImage] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [filteredResults, setFilteredResults] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then((r)=>r.json())
    .then((data)=>setPokemons(data))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const newPokemonObject = {
      name: newPokemonName,
      hp: newPokemonHP,
      sprites: {
        front: newPokemonFrontImage,
        back: newPokemonBackImage
      }
    }
    fetch("http://localhost:3001/pokemon/", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemonObject)
    })
    .then((r)=>r.json())
    .then((newPokemon)=>{
      console.log(newPokemon)
      const newPokemonArray = [...pokemons, newPokemon]
      setPokemons(newPokemonArray)
    })
  }

  function handleSearch(e) {
    setSearchValue(e.target.value)
    console.log(searchValue)
    let filteredArray;
    if(pokemons) {
      filteredArray = pokemons.filter((pokemon)=>{
        return pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
      })
      setFilteredResults(filteredArray)
      console.log(filteredResults)
    }
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
      handleSubmit={handleSubmit} 
      newPokemonName={newPokemonName}
      setNewPokemonName={setNewPokemonName}
      newPokemonHP={newPokemonHP}
      setNewPokemonHP={setNewPokemonHP}
      newPokemonFrontImage={newPokemonFrontImage}
      setNewPokemonFrontImage={setNewPokemonFrontImage}
      newPokemonBackImage={newPokemonBackImage}
      setNewPokemonBackImage={setNewPokemonBackImage}
      />
      <br />
      <Search 
      handleSearch={handleSearch} 
      searchValue={searchValue}
      />
      <br />
      <PokemonCollection 
        pokemons={pokemons}
        filteredResults={filteredResults}
      />
    </Container>
  );
}

export default PokemonPage;
