import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

const App = () => {
  const [characters, setCharacters] = useState([]);

  const removeCharacter = index =>
    setCharacters(characters.filter((character, i) => i !== index));

  const handleSubmit = character => setCharacters([...characters, character]);

  return (
    <div className="container">
      <h1>React Tutorial</h1>
      <p>Add a character with a name and a job to the table.</p>
      <Table characterData={characters} removeCharacter={removeCharacter} />
      <h3>Add New</h3>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
