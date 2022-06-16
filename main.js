let input = require('prompt-sync')()
const fs = require("fs");
const { callbackify } = require('util');
JSON.stringify
DB= require("./users_data.json")
lista_de_participantes=[]

//configuracoes do code
const data_evento = new Date('2022-06-18') //data do evento
const maximo_de_participantes = 100 //numero maximo de participantes 




console.log(`Bem vindo ao cadastro do evento!
----------------------------------------
Iniciaremos seu cadastro em nosso evento`);
users= require("./users_data.json")
function msg_erro(msg){
    console.log(`
------------------------------------------
Cadastro impossivel.
------------------------------------------

Encontramos um erro ao realizar seu cadastro!
Motivo: ${msg}
`)
}


console.log(`
------------------------------------------
Lista de participantes:
------------------------------------------`)
for (i=0;i<(DB.length);i++){
    console.log(`${i+1}.`, DB[i]["nome"].toUpperCase() + ",", DB[i]["idade"], "anos")
    user = {
        nome: DB[i]["nome"],
        idade: DB[i]["idade"]
    }
    lista_de_participantes.push(user)
}

console.log(`Total de participantes: ${lista_de_participantes.length}\n------------------------------------------`)


if(lista_de_participantes.length >= maximo_de_participantes) {
    msg_erro("Numero maximo de participantes foi excedido!");
    process.exit()}


//captura o nome do usuario
while (true){nome = input("Digite seu nome: ");if (isNaN(nome) & ! nome==""){break} else{console.log("Seu nome nao pode conter numeros.")}}

//primeiro captura o dia de nascimento do usuario
while (true){dia_nascimento = input("Digite o DIA do seu nascimento: ");if (isFinite(dia_nascimento) & ! dia_nascimento=="" & dia_nascimento >= 1 & dia_nascimento<=31){break} else{console.log("Ops, ocorreu um erro. Uma letra foi encontrada ou o DIA de seu nascimento é inexistente.")}}

mes_boolean=true;while(mes_boolean){
    console.log('1. Janeiro\n2. Fevereiro\n3. Marco\n4. Abril\n5. Maio\n6. Junho\n7. Julho\n8. Agosto\n9. Setembro\n10. Outubro\n11. Novembro\n12. Dezembro')
    mes_case = input("Digite seu mes: ")

    //switch case para com base no input do user
    switch (mes_case) {
        case "1":
            mes_nascimento=00
            mes_boolean=false
            break;
        case "2":
            mes_nascimento=01
            mes_boolean=false
            break;
        case "3":
            mes_nascimento=02
            mes_boolean=false
            break;
        case "4":
            mes_nascimento=03
            mes_boolean=false
            break;
        case "5":
            mes_nascimento=04
            mes_boolean=false
            break;
        case "6":
            mes_nascimento=05
            mes_boolean=false
            break;
        case "7":
            mes_nascimento=06
            mes_boolean=false
            break;
        case "8":
            mes_nascimento=07
            mes_boolean=false
            break;
        case "9":
            mes_nascimento=08
            mes_boolean=false
            break;
        case "10":
            mes_nascimento=09
            mes_boolean=false
            break;
        case "11":
            mes_nascimento=10
            mes_boolean=false
            break;
        case "12":
            mes_nascimento=11
            mes_boolean=false
            break;
        default:
            console.log("nenhum mes valido foi selecionado")
    }
}

//captura o ano de nascimento do usuario
while (true){ano_nascimento = input("Digite o ANO do seu nascimento: ");if (isFinite(ano_nascimento) & ! ano_nascimento=="" & ano_nascimento<2022 & ano_nascimento>1900){break} else{console.log("Ops, ocorreu um erro. Uma letra foi encontrada ou seu ANO de nascimento é inexistente.")} }

//recebe data de nascimento e faz uma diferenca com a data do evento. Caso o usuario tenha 18 anos no dia do evento, prossegue como true, caso nao tenha, retorna uma mensagem de erro
let data_nascimento = new Date(ano_nascimento, mes_nascimento, dia_nascimento);
const diferenca = Math.abs(data_evento.getTime() - data_nascimento.getTime())
const anos = Math.ceil(diferenca / (1000 * 60 * 60 * 8760))

if ((anos-1) >= 18){
    console.log(`
------------------------------------------
Cadastro concluido e adicionado ao evento!
------------------------------------------

Informacoes do seu cadastro:
Nome: ${nome}
Nascimento: ${data_nascimento}
Idade: ${anos-1}

Data do evento: ${data_evento}`)
    user = {
        nome:nome,
        idade:(anos-1)
    }
    lista_de_participantes.push(user)
    fs.writeFile("users_data.json", JSON.stringify(lista_de_participantes), err =>{
        if(err) throw err
        console.log("cadastrado com sucesso!")
    })
}else{msg_erro("Idade menor de 18.")}








