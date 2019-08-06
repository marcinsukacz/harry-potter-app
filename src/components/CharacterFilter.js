import React from 'react';

const CharacterFilter = (props) => {




  function handleChange(event){
    props.onHouseSelected(event.target.value)
  }

  return (
    <select id="character-selector" defaultValue="default" onChange={handleChange}>
      <option value="">None</option>
      <option value="Gryffindor">Gryffindor</option>
      <option value="Ravenclaw">Ravenclaw</option>
      <option value="Slytherin">Slytherin</option>
      <option value="Hufflepuff">Hufflepuff</option>

    </select>
  )
}

export default CharacterFilter;
