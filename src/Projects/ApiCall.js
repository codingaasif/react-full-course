import React, { useEffect, useState } from "react";
import './ApiCall.css'

function ApiCall() {
  const [city, setCity] = useState("");

  const url = `http://api.weatherapi.com/v1/current.json?key=65a70d4a2e74423ebd6155155233110&q=${city}`;

  const [temp, setTemp] = useState(0);

  console.log(url);

  const handleOnChange = (event) => {
    setCity(event.target.value);
  };

  const handleClick = () => {
    const fetchData = async () => {
      const result = await fetch(url);
      console.log(result);
      result.json().then((json) => {
        setTemp(json?.current?.temp_c);
        console.log(json);
      });
    };
    fetchData();
  };

  useEffect(() => {
    handleClick();
  });

  return (
    <div className="container">
      <h1>Weather Api Data</h1>
      <br />
      <input type="text" name="city" value={city} onChange={handleOnChange} />
      <br /><br />
      <button onClick={handleClick}> Search </button>
      <br /><br />
      <h2>Current Temp : {temp} °C </h2>
    </div>
  );
}

export default ApiCall;
