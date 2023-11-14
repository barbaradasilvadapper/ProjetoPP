// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');

// Função que retorna todos usuários no banco de dados
async function listAbastecimentos(request, response) {
    // Preparar o comando de execução no banco
    const query = 'SELECT * FROM abastecimentos WHERE id_usuario = ?'
    connection.query(query, request.body.idUser, (err, results) => { 

        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Retorno de abastecimentos com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os abastecimentos.`,
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

// Função que cria um novo usuário 
async function storeAbastecimento(request, response) {
    const values = [
        request.body.idUser,
        request.body.data,
        parseFloat(request.body.litros)
    ];
console.log(values)
    // Use placeholders na consulta SQL
    const query = "INSERT INTO abastecimentos ( id_usuario, data, litros) VALUES (?, ?, ?)";

    // Execute a ação no banco de dados e valide os retornos para o cliente que realizou a solicitação
    connection.query(query, values, (err, results) => {
        try {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') { // Verifica o código de erro para violação de chave única
                    response.status(400).json({
                        success: false,
                        message: "O abastecimento já existe. Escolha outro email.",
                        query: query,
                        sqlMessage: err.sqlMessage
                    });
                } else {
                    response.status(400).json({
                        success: false,
                        message: "Não foi possível realizar o abastecimento. Verifique os dados informados",
                        query: query,
                        sqlMessage: err.sqlMessage
                    });
                }
            } else {
                response.status(201).json({
                    success: true,
                    message: "Sucesso! Abastecimento salvo.",
                    data: results
                });
            }
        } catch (e) {
            response.status(400).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível salvar o abastecimento!",
                query: query,
                sqlMessage: err.sqlMessage
            });
        }
    });
}


// Função que atualiza o usuário no banco
async function updateAbastecimento(request, response) {
    // Preparar o comando de execução no banco
    const query = "UPDATE abastecimentos SET `data` = ?, `litros` = ? WHERE `id` = ?";

    // Recuperar os dados enviados na requisição respectivamente
    const params = Array(
        request.body.data,
        parseFloat(request.body.litros),    
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
                        message: `Sucesso! Abastecimento atualizado.`,
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
                    message: "Ocorreu um erro. Não foi possível atualizar o abastecimento!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// Função que remove usuário no banco
async function deleteAbastecimento(request, response) {
    // Preparar o comando de execução no banco
    const query = "DELETE FROM abastecimentos WHERE `id` = ?";

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
                        message: `Sucesso! Abastecimento deletada.`,
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
                    message: "Ocorreu um erro. Não foi possível deletar o abastecimento!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

module.exports = {
    listAbastecimentos,
    storeAbastecimento,
    updateAbastecimento,
    deleteAbastecimento
}