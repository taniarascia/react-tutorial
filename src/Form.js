import React, { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [characterInfo, setCharacterInfo] = useState({ name: '', job: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setCharacterInfo({
      ...characterInfo,
      [name]: value
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    handleSubmit(characterInfo);
    setCharacterInfo({ name: '', job: '' });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={characterInfo.name}
        onChange={handleChange}
      />
      <label>Job</label>
      <input
        type="text"
        name="job"
        value={characterInfo.job}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
