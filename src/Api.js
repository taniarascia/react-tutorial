import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*&limit=1";
    fetch(url)
      .then(result => result.json())
      .then(result => setData(result));
  }, []);

  const result = data.map((entry, index) => <li key={index}>{entry}</li>);

  return (
    <div className="container">
      <ul>{result}</ul>
    </div>
  );
};

export default App;
