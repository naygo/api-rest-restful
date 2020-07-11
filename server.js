const express = require ("express"); //chamando express
const app = express(); //instanciando express na variavel app
const data = require("./data.json"); //chamando dados

app.use(express.json()); //falando pra express usar a notação json

/*
        https://localhost:3000/clients -> URI: onde se chama o garçom
        ** pode se dizer que 'clients' é o nome do resource
*/

/**
 * Verbos HTTP
 *
 * GET - recebe dados de um resource
 * POST - envia dados ou informações para serem processados por um resource
 * PUT - atualiza dados de um resource
 * DELETE - deleta um resource
 * 
 *  */ 

//---x--- construindo o resource, o bloco de notas do garçom ---x---

app.get("/clients", function (req, res){
    res.json(data); // por padrão o json sempre vai responder 200?
});

app.get("/clients/:id", function(req, res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);
  
    if (!client) return res.status(204).json();
  
    res.json(client);
});

app.post("/clients", function (req, res){
    const { name, email } = req.body;

    //salvar 

    res.json({ name, email });
});

app.put("/clients/:id", function (req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);
    
    if (!client) return res.status(204).json();

    const { name } = req.body;
    client.name = name;

    res.json(client);
});

app.delete("/clients/:id", function (req, res){
    const { id } = req.params;
    const clientFiltered = data.filter(client => client.id != id);
    
    res.json(clientFiltered);
});


app.listen(3002, function() {
  console.log("Server is running");
});
