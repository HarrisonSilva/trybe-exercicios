export type PokemonList = {
    id: number,
    name: string,
    type: string,
    averageWeight: {
      value: number,
      measurementUnit: string,
    },
    image: string,
    moreInfo: string,
}