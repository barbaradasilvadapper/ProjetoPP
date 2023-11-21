const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();
// Importar pacote que implementa o protocolo JSON Web Token
const jwt = require('jsonwebtoken');

// Authentication
async function contaEmissoes(request, response) {
    const values = [
        parseInt(request.body.id),
        parseInt(request.body.mes),
    ];
    console.log(values)
    // Preparar o comando de execução no banco
    const query = `
        SELECT 
            SUM(a.litros * c.consumo * 
                CASE 
                    WHEN c.combustivel = 'gasolina' THEN 2.12
                    WHEN c.combustivel = 'diesel' THEN 2.49
                    WHEN c.combustivel = 'etanol' THEN 1.10
                    ELSE 1.0
                END
            ) as total_emissoes
        FROM 
            abastecimentos a
        INNER JOIN 
            carros c ON a.id_usuario = c.id_usuario
        WHERE 
            a.id_usuario = ? AND 
            MONTH(a.data) = ?
        `;


    // Executa a ação no banco e valida os retornos para o cliente que realizou a solicitação
    connection.query(query, values, (err, results) => {
        try {
            if (results.length > 0) {
                const totalEmitido = results[0].total_emissoes;
                response.status(200).json({
                    success: true,
                    message: `Sucesso! Total de emissões: ${totalEmitido}`,
                    data: totalEmitido
                });
                console.log(results)
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
    contaEmissoes
}


