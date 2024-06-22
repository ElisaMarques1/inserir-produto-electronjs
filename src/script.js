var mysql2 = require("mysql2");

//configuraçao para acessar o banco de dados
var connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "avaliacao",
});

function adicionarproduto(event) {
  event.preventDefault()

  var nome = document.getElementById('nome').value
  var quantidade = document.getElementById('quantidade').value
  var codigoproduto = document.getElementById('codigodoproduto').value
  var marca = document.getElementById('marca').value

  console.log(nome, quantidade, codigoproduto, marca);


  connection.connect(function (error) {

    if (error) {
      console.log(error.code);
      console.log(error.fatal);

    } else {
      console.log('conectado ao mysql2');
    }
  });

  var query = `INSERT INTO produtos (nome, quantidade, codigo_produto, marca) VALUES ("${nome}", "${quantidade}", "${codigoproduto}", "${marca}")`;

  connection.query(query, function (error) {

    if (error) {
      console.log("Ocorreu um erro ao inserir no banco de dados");

    } else {
      alert("dados inseridos com sucesso")

    }
  })
}


//adiconar evento de submit no formulario
var adicionar_produto = document.getElementById('adicionar_produto')
adicionar_produto.addEventListener('submit', adicionarproduto)