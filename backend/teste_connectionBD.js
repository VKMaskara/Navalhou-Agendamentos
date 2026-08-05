import connection from './src/database/connection.js';

async function testConnection(){
    try{
        await connection.raw('SELECT 1')

        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    }catch(err){
        console.error('❌ Erro ao conectar no banco:');
        console.error(err.message);
    }finally{
        connection.destroy();
    }

}
testConnection();