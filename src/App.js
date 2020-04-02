import React from "react";
import Table from "./Table";
import Form from './Form';

//App component
class App extends React.Component {
  state = {
    characters: []
  };


//RemoveCharacter
removeCharacter = (index) => {
  console.log(index, 'index in removeCharacter');
  
  const characters = this.state.characters;

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    })
  })
}
  
  //handleSubmit
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

	render() {
    const characters = this.state.characters
		return (
			<div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
			</div>
		);
	}
}

 

export default App;
