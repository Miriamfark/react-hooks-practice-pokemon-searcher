import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ 
  handleSubmit, 
  newPokemonName, 
  setNewPokemonName,
  newPokemonHP,
  setNewPokemonHP,
  newPokemonFrontImage,
  setNewPokemonFrontImage,
  newPokemonBackImage,
  setNewPokemonBackImage
}) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
          onChange={(e)=>{
            setNewPokemonName(e.target.value)
            console.log(newPokemonName)
          }}
          fluid label="Name" 
          placeholder="Name" 
          name="name" 
          value={newPokemonName}
          />
          <Form.Input 
          onChange={(e)=>{
            setNewPokemonHP(e.target.value)
            console.log(newPokemonHP)
          }}
          fluid label="hp" 
          placeholder="hp" 
          name="hp"
          value={newPokemonHP}
           />
          <Form.Input
            onChange={(e)=>setNewPokemonFrontImage(e.target.value)}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemonFrontImage}
          />
          <Form.Input
          onChange={(e)=>setNewPokemonBackImage(e.target.value)}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemonBackImage}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
