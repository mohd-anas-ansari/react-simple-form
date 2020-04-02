import React from "react";
import Table from "./Table";

//App component
class App extends React.Component {
	state = {};
	render() {
		const characters = [
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
		];
		return (
			<div className="container">
				<Table charactersData={characters} />
			</div>
		);
	}
}

export default App;
