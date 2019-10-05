import React from "react";

const TableHeader = () =>
<thead>
  <tr>
    <th>Name</th>
    <th>Job</th>
    <th>Remove</th>
  </tr>
</thead>

const TableBody = props => {
  const rows = props.characterData.map((row, index) =>
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td>
        <button onClick={() => props.removeCharacter(index)}>Delete</button>
      </td>
    </tr>
  );
  return <tbody>{rows}</tbody>;
};

const Table = ({ characterData, removeCharacter }) =>
<table>
  <TableHeader />
  <TableBody
    characterData={characterData}
    removeCharacter={removeCharacter}
  />
</table>;

export default Table;
