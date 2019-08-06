import React from 'react';

const CharacterInfo = ({character}) => {
  if (!character ) return null;
  return (
    <div>

        <h3>{character.name}</h3>
        <img src={character.image} />

      </div>
  )
}




export default CharacterInfo;
