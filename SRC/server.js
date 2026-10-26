import express from 'express';
import { configurarBanco, knex } from './config/knex.js';
import pokemonRouter from './routes/pokemon.routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    mensagem: 'API Pokémon funcionando!',
    rotas: {
      pokemons: '/pokemons',
    }
  });
});

app.use('/pokemons', pokemonRouter);

async function iniciarServidor() {
  try {
    await configurarBanco();

    app.listen(PORT, () => {
      console.log(`API rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar a API:', error.message);
    await knex.destroy();
    process.exitCode = 1;
  }
}

iniciarServidor();