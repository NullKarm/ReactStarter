import React from "react";
//functional React Components/Simple Component
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
  );
};

//functional React Components/Simple Component
const TableBody = (props) => {
  // Setup das rows fazendo o map method para criar um novo array com os resultados de aplicar uma determinada funçao a cada elemento do array original
  const rows = props.characterData.map((row, index) => {
    return (
      // index para identificar rows/diferenciar e o resto é usar row (o usual é usar (e)) e aceder a prop name e job. Muito IMPORTANTE Que sempre que se faça listas no REACT se defina KEYS para ajudar idenficar. Facilita manipulação dos elementos
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>; //devolver entre o body o novo array rows
};

//custom React components/Class react component

class Table extends React.Component {
  render() {
    //deestructure dos props
    const { characterData, removeCharacter } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    );
  }
}

export default Table;
