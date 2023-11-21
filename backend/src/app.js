// Módulo de configuração da webapi, módulo de aplicação
// Importar o pacote express (servidor)
const express = require('express');
// Importar o cors para lidar com requisições externas
const cors = require('cors');
// Importar as rotas para serem executadas na aplicação
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const findUserRouter = require('./routes/findUserRouter');
const findCarRouter = require('./routes/findCarRouter');
const carRouter = require('./routes/carRouter');
const abastecimentosRouter = require('./routes/abastecimentosRouter');
const compensacaoRouter = require('./routes/compensacaoRouter');
const contaRouter = require('./routes/contaRouter');
const somaAbastecimentosRouter = require('./routes/somaAbastecimentosRouter');
const somaCompensacoesRouter = require('./routes/somaCompensacoesRouter');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();

// Instanciar o express na variável app
const app = express();

// Habilitar o recebimento de requests em formato JSON
app.use(express.json());
// Habilitar o uso dos cors no servidor
app.use(cors())
// Habilitar as rotas na aplicação
app.use('/api', userRouter);
app.use('/api/auth', loginRouter);
app.use('/api/find', findUserRouter);
app.use('/api/findCar', findCarRouter);
app.use('/api/car', carRouter);
app.use('/api/abastecimentos', abastecimentosRouter);
app.use('/api/compensacao', compensacaoRouter);
app.use('/api/conta', contaRouter);
app.use('/api/somaA', somaAbastecimentosRouter);
app.use('/api/somaC', somaCompensacoesRouter);
// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 3333);

module.exports = app;