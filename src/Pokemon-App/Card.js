import React from "react";

const Card = ({ pokemon, loading }) => {
  console.log(pokemon.url);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div className="card">
                <h2>Name : {item.name}</h2>
                <h2>Id : {item.id}</h2>
                <img src={item?.sprites?.front_shiny} alt="" />
                <h2>Weight : {item.weight}</h2>
                <h2>{item.types.name}</h2>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
