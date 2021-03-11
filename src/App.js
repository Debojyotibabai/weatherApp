import React, { useState } from "react";
import "./index.css";
const App = () => {
  const [InputValue, SetInputValue] = useState("");
  const GetValue = (e) => {
    SetInputValue(e.target.value);
  };
  const [Details, SetDetails] = useState({
    Name: "Search for city name",
    Temp: "",
    Description: "",
  });
  const Search = (e) => {
    e.preventDefault();
    if (InputValue === "") {
      alert("Please add a city name.");
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${InputValue}&appid=142edd739fe653be18bd7941f7adf3ca&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          SetDetails({
            Name: data.name,
            Temp: `${data.main.temp}° C`,
            Description: data.weather[0].description,
          });
        });
      SetInputValue("");
    }
  };
  return (
    <div className="main">
      <h1 className="main-heading">
        Weather <br></br> Map
      </h1>
      <form onSubmit={Search} className="search">
        <input
          type="text"
          placeholder="Type here"
          onChange={GetValue}
          required
          autoFocus
          value={InputValue}
        ></input>
        <button type="submit">Search</button>
      </form>
      <div className="result">
        <h1>{Details.Name}</h1>
        <h3>{Details.Temp}</h3>
        <p>{Details.Description}</p>
      </div>
    </div>
  );
};
export default App;
