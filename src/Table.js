import React from "react";

const Table = props => {
  const { characterData, removeCharacter } = props
  console.log(props, 'props inside Main table sfc');
  
  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}


const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
			</tr>
		</thead>
	);
};

const TableBody = (props) => {
	console.log(props);

	const rows = props.characterData.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.job}</td>
				<td>
					<button onClick={() => props.removeCharacter(index)}>Delete</button>
				</td>
			</tr>
		);
	});
	return <tbody>{rows}</tbody>;
};

export default Table;
