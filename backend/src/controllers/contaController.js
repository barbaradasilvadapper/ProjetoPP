const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();
// Importar pacote que implementa o protocolo JSON Web Token
const jwt = require('jsonwebtoken');

// Authentication
async function somaAbastecimentos(request, response) {
    // Preparar o comando de execução no banco
    const query = "SELECT litros FROM abastecimentos WHERE `id_usuario` = ?";
    
    const params = parseInt(request.body.id)
    // Executa a ação no banco e valida os retornos para o cliente que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {            
            if (results.length > 0) {                
                const resultados = {
                    id_usuario: results[0].id_usuario,
                    placa: results[0].placa,
                    combustivel: results[0].combustivel,
                };

                const id = results[0].id;

                response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Carro conectado.`,
                    data: resultados
                });
            } else {
                response
                    .status(404)
                    .json({
                        success: false,
                        message: `Carro não encontrado. Verifique o ID informado`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro ao buscar o carro.",
                error: e
            });
        }
    });
}

module.exports = {
    somaAbastecimentos
}