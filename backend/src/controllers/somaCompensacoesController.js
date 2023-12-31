const connection = require('../config/db');

async function somaCompensacoes(request, response) {
    const { id } = request.body;
    const values = [parseInt(id)];

    const query = "SELECT SUM(quantidade) AS total_quantidade FROM compensacoes WHERE id_usuario = ?";
    
    connection.query(query, values, (err, results) => {
        try {
            if (results !== undefined && results.length > 0) {
                const totalQuantidade = results[0].total_quantidade;
                response.status(200).json({
                    success: true,
                    message: `Sucesso! Total de litros: ${totalQuantidade}`,
                    data: totalQuantidade
                });
            } else {
                const totalQuantidade = 0;
                response.status(404).json({
                    success: false,
                    message: `Usuário não encontrado ou sem dados de compensações`,
                    data: totalQuantidade
                });
            }
        } catch (e) {
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro ao buscar os dados de compensações.",
                error: e
            });
        }
    });
}

module.exports = {
    somaCompensacoes
};
