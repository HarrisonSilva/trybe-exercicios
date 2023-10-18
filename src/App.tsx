import { Pokedex } from './components/Pokedex'
import { Pokemon } from './components/Pokemon'
import pokemonList from './utils/data'

function App() {
  return (
    <div>
   < Pokedex />
   {pokemonList.map((pokemon) => (
    <section>
    < Pokemon 
    key={pokemon.id}
    name={pokemon.name}
    type={pokemon.type}
    averageWeight={pokemon.averageWeight}
    image={pokemon.image}
    moreInfo={pokemon.moreInfo}
    id={pokemon.id}
    />
    </section>
   ))}
   </div>
  )
}

export default App
