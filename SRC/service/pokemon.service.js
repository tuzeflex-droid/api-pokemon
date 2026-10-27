import { knex } from '../config/knex.js';
import pokemonrepository from '../repository/pokemon.repository.js';

class pokemonService {
  async getAllPokemon() {
    const pokemons = await pokemonrepository.getAllPokemon();
    return pokemons;
  }

  async getPokemonById(id) {
    const pokemon = await pokemonrepository.getPokemonById(id);
    return pokemon;
  }

  async createPokemon(dados) {
    const pokemonCriado = await pokemonrepository.createPokemon(dados);
    return pokemonCriado;
  }

  async updatePutpokemon(id, dados) {
    const pokemonAtualizado = await pokemonrepository.updatePutpokemon(id, dados);
      return pokemonAtualizado;
    }
  

  async updatePatchPokemon(id, dados) {
    const pokemon = await pokemonrepository.updatePatchPokemon(id, dados);
    return pokemon;
  }

  async deletePokemon(id) {
    const pokemonDeletado = await pokemonrepository.deletePokemon(id);
    return pokemonDeletado;
  }

}
export default new pokemonService();
