import { PokemonList } from '../types/pokemonsTypes'

export function Pokemon(props: PokemonList) {
    return (
        <div id='poke-container'>
        <h4>Nome: {props.name}</h4>
        <h4>Id: {props.id}</h4>
        <p>Tipo: {props.type}</p>
        <p>Peso: {props.type}</p>
        <img src={props.image} alt="" />
        <p>Tipo: {props.type}</p>
        <p>Info: {props.moreInfo}</p>
        </div>
    )
}