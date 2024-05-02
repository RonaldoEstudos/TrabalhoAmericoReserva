const express = require("express") //importa o modulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req, res){
    res.send("<h1>Bem vindo ao meu site</h1>")
})

//rota do cadastro de usuarios
app.get("/usuarios", function(req,res){
    res.send("<h1>Lista de Usuarios</h1>")
})

//rota com parametro
app.get("/usuario/:parametro", function(req, res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno nome do usuario:" + req.params.parametro)
})

//rota com parametro opcional 
app.get("/cadastro/:nome?", function(req, res){
    //req --> dados enviado pelo cliente
    var nome = req.params.nome
    if(nome){
        res.send("<h1> usuario " + nome + " criado</h1>")
    }else{
        res.send("usuario criado")
    }
})


app.listen(4000,function(erro){ //cria a aplicação na porta 4000
    if(erro){
        console.log("erro ao iniciar")
    }else{
        console.log("Servidor iniciado")
    }
})