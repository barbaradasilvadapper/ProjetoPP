const connection = require('../config/db');

async function somaAbastecimentos(request, response) {
    const { id } = request.body;
    const values = [parseInt(id)];

    const query = "SELECT SUM(litros) AS total_litros FROM abastecimentos WHERE id_usuario = ?";
    
    connection.query(query, values, (err, results) => {
        try {
            if (results.length > 0) {
                const totalLitros = results[0].total_litros;
                response.status(200).json({
                    success: true,
                    message: `Sucesso! Total de litros: ${totalLitros}`,
                    data: totalLitros
                });
            } else {
                response.status(404).json({
                    success: false,
                    message: `Usuário não encontrado ou sem dados de abastecimento`,
                    error: err
                });
            }
        } catch (e) {
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro ao buscar os dados de abastecimento.",
                error: e
            });
        }
    });
}

module.exports = {
    somaAbastecimentos
};
