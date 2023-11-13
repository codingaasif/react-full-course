import React, { useEffect, useState } from "react";
import "../Pokemon-App/Style.css";
import Card from "./Card";
import PokemonInfo from "./PokemonInfo";
import axios from "axios";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const pokeFun = async () => {
    setLoading(true);

    try {
      const promiseData = [];

      for (let i = 1; i <= 50; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promiseData.push(axios.get(url));
      }
      const responses = await Promise.all(promiseData);
      const pokemonData = responses.map((response) => {
        return response.data;
      });
      setPokeData(pokemonData);
    } catch (error) {
      console.log("Error fetch Data: ", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    pokeFun();
  }, []);

  console.log(pokeData);

  return (
    <>
      <h1 className="header">Pokemon App</h1>

      <div className="container">
        <Card pokemon={pokeData} loading={loading} />

        <div className="left-content">
          <div className="btn-group">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
        {/* <div className="right-content">
                <PokemonInfo />
                </div> */}
      </div>
    </>
  );
};

export default Main;
