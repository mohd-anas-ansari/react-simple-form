import React from "react";
import Table from "./Table";

//App component
class App extends React.Component {
  state = {
    characters: [
			{
				name: "Charlie",
				job: "Janitor"
			},
			{
				name: "Mac",
				job: "Bouncer"
			},
			{
				name: "Dee",
				job: "Aspring actress"
			},
			{
				name: "Dennis",
				job: "Bartender"
			}
		]
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
	render() {
    const characters = this.state.characters
		return (
			<div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
			</div>
		);
	}
}

 

export default App;
