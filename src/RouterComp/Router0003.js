import React from "react";
import { useSearchParams } from "react-router-dom";

function Router0003() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.warn(searchParams.get("age"));
  console.log(searchParams.get("city"));

  const age = searchParams.get("age");
  const city = searchParams.get("city");


  return (
    <div className="App">
      <h1>useSearchParams Page</h1>

      <h3>Age is : {age}</h3>
      <h3>City is : {city}</h3>

      {/* <input
        type="text"
        onChange={(e) => setSearchParams({ text: e.target.value, age: 20 })}
        placeholder="Set Text in Query Params"/>

      <button onClick={(e) => setSearchParams({ age: 30 })}>
        Set Age in Query Params
      </button> */}
      
    </div>
  );
}

export default Router0003;
