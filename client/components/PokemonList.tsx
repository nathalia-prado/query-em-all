import { fetchPokemonGeneration } from '../apis/pokemon.ts'

import { useQuery } from '@tanstack/react-query'

export default function PokemonList() {


  const { data: generation, isLoading, error } = useQuery(['pokemonGeneration'], () => fetchPokemonGeneration(1))

  if (error instanceof Error) {
    return <p>Something went wrong: {error.message}</p>
  }

  if (!generation || isLoading) {
    return <p>Still loading Pokemon</p>
  }

  return (
    <>
      <h2>Pokémon in {generation.region}:</h2>
      <ul>
        {generation.pokemon.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </>
  )
}
