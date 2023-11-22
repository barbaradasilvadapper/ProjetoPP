// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');

// Função que retorna todos usuários no banco de dados
async function listCars(request, response) {
    // Preparar o comando de execução no banco
    connection.query('SELECT * FROM carros', (err, results) => { 
        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Retorno de carros com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os carros.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}

// // Função que cria um novo usuário 
// async function storeCar(request, response) {
//     const values = [
//         request.body.idUser,
//         request.body.placa,
//         request.body.combustivel,
//         parseFloat(request.body.consumo)
//     ];
// console.log(values)
//     // Use placeholders na consulta SQL
//     const query = "INSERT INTO carros (id_usuario, placa, combustivel, consumo) VALUES (?, ?, ?, ?)";

//     // Execute a ação no banco de dados e valide os retornos para o cliente que realizou a solicitação
//     connection.query(query, values, (err, results) => {
//         try {
//             if (err) {
//                 if (err.code === 'ER_DUP_ENTRY') { // Verifica o código de erro para violação de chave única
//                     response.status(400).json({
//                         success: false,
//                         message: "O carro já existe. Escolha outro email.",
//                         query: query,
//                         sqlMessage: err.sqlMessage
//                     });
//                 } else {
//                     response.status(400).json({
//                         success: false,
//                         message: "Não foi possível realizar o cadastro. Verifique os dados informados",
//                         query: query,
//                         sqlMessage: err.sqlMessage
//                     });
//                 }
//             } else {
//                 response.status(201).json({
//                     success: true,
//                     message: "Sucesso! Carro cadastrado.",
//                     data: results
//                 });
//             }
//         } catch (e) {
//             response.status(400).json({
//                 success: false,
//                 message: "Ocorreu um erro. Não foi possível cadastrar o carro!",
//                 query: query,
//                 sqlMessage: err.sqlMessage
//             });
//         }
//     });
// }

async function storeCar(request, response) {
    const values = [
        request.body.idUser,
        request.body.placa,
        request.body.combustivel,
        parseFloat(request.body.consumo)
    ];

    const query = "INSERT INTO carros (id_usuario, placa, combustivel, consumo) VALUES (?, ?, ?, ?)";
    
    connection.query(query, values, (err, results) => {
        try {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    response.status(400).json({
                        success: false,
                        message: "O carro já existe. Escolha outra placa.",
                        query: query,
                        sqlMessage: err.sqlMessage
                    });
                } else {
                    response.status(400).json({
                        success: false,
                        message: "Não foi possível realizar o cadastro. Verifique os dados informados",
                        query: query,
                        sqlMessage: err.sqlMessage
                    });
                }
            } else {
                const insertedPlaca = request.body.placa; // Obtém a placa do carro recém-cadastrado

                response.status(201).json({
                    success: true,
                    message: "Sucesso! Carro cadastrado.",
                    placa: insertedPlaca, // Inclui a placa do carro na resposta
                    data: results
                });
            }
        } catch (e) {
            response.status(400).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível cadastrar o carro!",
                query: query,
                sqlMessage: err.sqlMessage
            });
        }
    });
}


// Função que atualiza o usuário no banco
async function updateCar(request, response) {
    // Preparar o comando de execução no banco
    const query = "UPDATE carros SET `combustivel` = ?, `consumo` = ? WHERE `id` = ?";

    // Recuperar os dados enviados na requisição respectivamente
    const params = Array(
        request.body.combustivel,
        request.body.consumo,    
        request.params.id  // Recebimento de parametro da rota
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! Carro atualizado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a atualização. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível atualizar o carro!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// Função que remove usuário no banco
async function deleteCar(request, response) {
    // Preparar o comando de execução no banco
    const query = "DELETE FROM carros WHERE `id` = ?";

    // Recebimento de parametro da rota
    const params = Array(
        request.params.id
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! Carro deletado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível deletar o carro!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

module.exports = {
    listCars,
    storeCar,
    updateCar,
    deleteCar
}