// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');

// Função que retorna todos usuários no banco de dados
async function listCompensacoes(request, response) {
    // Preparar o comando de execução no banco
    const query = 'SELECT * FROM compensacoes WHERE id_usuario = ?'
    connection.query(query, request.body.idUser, (err, results) => { 

        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Retorno de compensacoes com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os compensacoes.`,
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
async function storeCompensacao(request, response) {
    const values = [
        request.body.idUser,
        request.body.data,
        request.body.tipo,
        parseFloat(request.body.quantidade)
    ];
console.log(values)
    // Use placeholders na consulta SQL
    const query = "INSERT INTO compensacoes ( id_usuario, data, tipo, quantidade) VALUES (?, ?, ?, ?)";

    // Execute a ação no banco de dados e valide os retornos para o cliente que realizou a solicitação
    connection.query(query, values, (err, results) => {
        try {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') { // Verifica o código de erro para violação de chave única
                    response.status(400).json({
                        success: false,
                        message: "A compensação já existe. Escolha outro email.",
                        query: query,
                        sqlMessage: err.sqlMessage
                    });
                } else {
                    response.status(400).json({
                        success: false,
                        message: "Não foi possível realizar a compensação. Verifique os dados informados",
                        query: query,
                        sqlMessage: err.sqlMessage
                    });
                }
            } else {
                response.status(201).json({
                    success: true,
                    message: "Sucesso! Compensação salva.",
                    data: results
                });
            }
        } catch (e) {
            response.status(400).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível salvar a compensação!",
                query: query,
                sqlMessage: err.sqlMessage
            });
        }
    });
}


// Função que atualiza o usuário no banco
async function updateCompensacao(request, response) {
    // Preparar o comando de execução no banco
    const query = "UPDATE compensacoes SET `tipo` = ?, `quantidade` = ? WHERE `id` = ?";

    // Recuperar os dados enviados na requisição respectivamente
    const params = Array(
        request.body.tipo,
        parseFloat(request.body.quantidade),    
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
                        message: `Sucesso! Compensação atualizada.`,
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
                    message: "Ocorreu um erro. Não foi possível atualizar a compensação!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// Função que remove usuário no banco
async function deleteCompensacao(request, response) {
    // Preparar o comando de execução no banco
    const query = "DELETE FROM compensacoes WHERE `id` = ?";

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
                        message: `Sucesso! Compensação deletada.`,
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
                    message: "Ocorreu um erro. Não foi possível deletar a compensação!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

module.exports = {
    listCompensacoes,
    storeCompensacao,
    updateCompensacao,
    deleteCompensacao
}