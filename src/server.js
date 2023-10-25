// Para Importar o Framework Express
//pegando a pasta e colocando aqui dentro
const express = require("express");

// Preciso inicializar o Express
// Definir a porta de express, qual endereço que ele vai atender  
const app = express();


//Metodo GET para fazer leitura
// a barra ( / ) seria nossa raiz da api
// Criar uma função arrow function 
// fazendo a request e response 
// .send (ENVIAR MENSAGEM PARA QUEM SOLICITOU)

// Aprender usar Resquest, conseguimos obter informações através da API
// Parametro = /:id
app.get("/messenge/:id/:user", (request, response) => {

    // Para não ficar repetindo request.params
    // Desestruturar 
    const { id, user } = request.params;

    // Recuperando a informação 
    // Interpolação de stringers

    // Pegando a informação do parametro, 
    // recuperando através do params.id
    //Usar somente o id do const mencinado no = request.params
    
    response.send(`
    mensagem ID: ${id}.
    Para o usuário: ${user}.
    `);
})


// Query Params
// 
app.get("/users", (request, response) => {
    const { page, limit } = request.query;

    response.send(`Pagina ${page}. Mostrar: ${limit}`)
});


// Porta
// Extrutura, a porta no terminal 
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

// Os parms são utlizado para dados simples
// não passar informações grandes e complexas

//request.params será mais passado dados como id
//Para exibir o produto para usuário