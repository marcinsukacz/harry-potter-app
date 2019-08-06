import React, {Component} from 'react';
import CharacterList from '../components/CharacterList';
import CharacterInfo from '../components/CharacterInfo';
import CharacterFilter from '../components/CharacterFilter';


class CharacterBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      selectedCharacter: null,
      filteredCharacters: []
    }
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
    this.handleFilter = this.handleFilter.bind(this);

  }

  handleCharacterSelected(index){
    const selectedCharacter = this.state.filteredCharacters[index]
    this.setState({selectedCharacter: selectedCharacter})
  }

  handleFilter(house){
    if(house){
    const filteredCharacters = this.state.characters.filter(character => {
      return character.house == house
    })
    this.setState({filteredCharacters: filteredCharacters})
  }
}

componentDidMount(){
  const url = 'http://hp-api.herokuapp.com/api/characters';

  fetch(url)
  .then(res => res.json())
  .then(characters => this.setState({characters: characters, filteredCharacters: characters}))
  .catch(err => console.error())

}




render (){
  return (<div>
      <CharacterFilter onHouseSelected={this.handleFilter}/>
      <CharacterList onCharacterSelected={this.handleCharacterSelected} characters={this.state.filteredCharacters}/>
      <CharacterInfo character={this.state.selectedCharacter} />
  </div>);
}

}


export default CharacterBox;
