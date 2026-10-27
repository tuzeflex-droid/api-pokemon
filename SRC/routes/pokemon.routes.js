import { router } from 'express';
import {pokemonController} from '../controller/pokemon.controller.js';

router.getAll('/pokemon', pokemonController.getAllpokemon);
router.get('/pokemon/:id', pokemonController.getPokemonById);
router.post('/pokemon', pokemonController.createPokemon);
router.put('/pokemon/:id', pokemonController.updatePokemon);
router.patch('/pokemon/:id', pokemonController.patchPokemon);
router.delete('/pokemon/:id', pokemonController.deletePokemon);
