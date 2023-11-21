// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { contaEmissoes } = require('../controllers/contaController');

router.post('/contaEmissoes', contaEmissoes);

module.exports = router;