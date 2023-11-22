const connection = require('../config/db');

async function somaAbastecimentos(request, response) {
    const { id } = request.body;
    const values = [parseInt(id)];

    const query = `SELECT 
    SUM(a.litros * c.consumo * 
        CASE 
            WHEN c.combustivel = 'gasolina' THEN 2.12
            WHEN c.combustivel = 'diesel' THEN 2.49
            WHEN c.combustivel = 'etanol' THEN 1.10
            ELSE 1.0
        END) as total_emissoes
        FROM 
            abastecimentos a
        INNER JOIN 
            carros c ON a.id_usuario = c.id_usuario
        WHERE 
            a.id_usuario = ?`;

    connection.query(query, values, (err, results) => {
        try {
            if (results !== undefined && results.length > 0) {
                const totalLitros = results[0].total_litros;
                response.status(200).json({
                    success: true,
                    message: `Sucesso! Total de litros: ${totalLitros}`,
                    data: totalLitros
                });
            } else {
                const totalLitros = 0;
                response.status(200).json({
                    success: true,
                    message: "Nenhum dado de abastecimento encontrado ou total de litros zero",
                    data: totalLitros
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
