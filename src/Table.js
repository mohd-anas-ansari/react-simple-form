import React from "react";

class Table extends React.Component {
	state = {};
	render() {
    const { charactersData } = this.props;

		return (
			<table>
				<TableHeader />
				<TableBody charactersData = {charactersData} />
			</table>
		);
	}
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

  const rows = props.charactersData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  });
    return <tbody>{rows}</tbody>;
};


export default Table;
