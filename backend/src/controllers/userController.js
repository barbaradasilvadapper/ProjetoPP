// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');

// Função que retorna todos usuários no banco de dados
async function listUsers(request, response) {
    // Preparar o comando de execução no banco
    connection.query('SELECT * FROM usuarios', (err, results) => { 
        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Retorno de usuarios com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os usuários.`,
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


//Função que cria novo usuario
async function storeUser(request, response) {
    const values = [
        request.body.nome,
        request.body.email,
        bcrypt.hashSync(request.body.senha, 3)
    ];

    const query = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
    
    connection.query(query, values, (err, results) => {
        try {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    response.status(400).json({
                        success: false,
                        message: "O email já existe. Escolha outro email.",
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
                const userId = results.insertId; // Obtém o ID do usuário recém-cadastrado

                response.status(201).json({
                    success: true,
                    message: "Sucesso! Usuário cadastrado.",
                    userId: userId, // Inclui o ID do usuário na resposta
                    data: results
                });
            }
        } catch (e) {
            response.status(400).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível cadastrar o usuário!",
                query: query,
                sqlMessage: err.sqlMessage
            });
        }
    });
}


// Função que atualiza o usuário no banco
async function updateUser(request, response) {
    const { email, senha } = request.body;

    const hashedPassword = bcrypt.hashSync(senha, 3);

    const query = "UPDATE usuarios SET `senha` = ? WHERE `email` = ?";

    connection.query(query, [hashedPassword, email], (err, results) => {
        try {
            if (results.affectedRows > 0) {
                response.status(200).json({
                    success: true,
                    message: `Senha atualizada com sucesso.`,
                    data: results
                });
            } else {
                response.status(400).json({
                    success: false,
                    message: `Não foi possível realizar a atualização. Verifique os dados informados.`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
            }
        } catch (e) {
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro ao atualizar a senha.",
                error: e
            });
        }
    });
}


// Função que remove usuário no banco
async function deleteUser(request, response) {
    // Preparar o comando de execução no banco
    const query = "DELETE FROM usuarios WHERE `id` = ?";

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
                        message: `Sucesso! Usuário deletado.`,
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
                    message: "Ocorreu um erro. Não foi possível deletar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

module.exports = {
    listUsers,
    storeUser,
    updateUser,
    deleteUser
}
