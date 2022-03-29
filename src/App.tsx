import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from "./models/pokemon"
import POKEMONS from './models/mock-pokemon'
  
const App: FunctionComponent = () => {
 const [pokemons, setPokemons] = useState<Pokemon[]>(POKEMONS);

 useEffect(() => {
    setPokemons(pokemons)
 },[])
 
 return (
  
    <div>
        <h1>Bienvenue sur votre pokedex vous avez {pokemons.length} pokemons </h1>
        <div className="row">
        <ul>
            {pokemons.map(({name, picture})=> (
                
                <div className="col s2">
                  <div className="card">
                    <div className="card-image">
                      <img src={picture} />
                      <span className="card-title" key={name}> {name}</span>
                    </div>
                    <div className="card-content">
                      <p>I am a pokemon.</p>
                    </div>
                    <div className="card-action">
                      <p>{name}</p>
                    </div>
                  </div>
                </div>
            ))}
        </ul>
        </div>
    
    </div>
    
 ) 
}
  
export default App;

