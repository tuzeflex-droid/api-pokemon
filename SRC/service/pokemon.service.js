import { knex } from '../config/knex.js';

class pokemonService {
  async getAllPokemon() {
    return await knex('pokemon').select('*');
  }

  async getPokemonById(id) {
    return await knex('pokemon')
      .where({ id })
      .first();
  }

  async createPokemon(dados) {
    const pokemon = {
      nome: dados.nome,
      nivel: dados.nivel,
      tipo: dados.tipo,
      treinador_id: dados.treinador_id
    };

    await knex('pokemon').insert(pokemon);

    return pokemon;
  }

  async updatePokemon(id, dados) {
    const quantidade = await knex('pokemon')
      .where({ id })
      .update(dados);

    if (!quantidade) {
      return null;
    }

    return await this.getPokemonById(id);
  }

  async patchPokemon(id, dados) {
    return await this.updatePokemon(id, dados);
  }

  async deletePokemon(id) {
    return await knex('pokemon')
      .where({ id })
      .del();
  }
}

export default new pokemonService();