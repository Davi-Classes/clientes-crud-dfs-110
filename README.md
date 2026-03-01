# Gerenciamento de Clientes.

## a. 

Faça um formulário no HTML para armazenar dados de clientes, o formulário deve conter os campos: "nome", "email", "telefone", "dataNascimento"

## b. 

Crie um "eventListener" no Javascript para o evento de submit desse formulário, você deve criar um objeto "cliente" com os dados que foram preenchidos no formulário e mostrar utilizando o "console.log"

## c. 

Adicione validações no formulário para mostrar mensagens de error caso algum dos campos "nome", "email", "telefone", "dataNascimento" não sejam preenchido. Exemplo: "O campo nome é obrigatório"

```javascript
function mostrarMensagem(text, type) {
  const pMensagem = document.getElementById("mensagem");

  pMensagem.innerText = text;

  pMensagem.style.fontWeight = "bold";
  pMensagem.style.color = type == "success" ? "green" : "red";
}
```

## d. 

Separe o arquivo html do css e do Javascript criando os arquivos "style.css" e "script.js". Você deve mover o conteúdo da tag `<style>` para o arquivo css e o conteúdo da tag `<script>` para o arquivo javascript.

## e. 

Crie uma tabela com o id "clientes-table" e com os cabeçalhos "Nome", "Email", "Telefone", "Data de Nascimento" dentro da tag `<thead>`, além de um `<tbody>` vazio. Você deve também adicionar o css abaixo no seu "style.css"

```css
#clientes-table {
  width: 100%;
  max-width: 800px;
}

#clientes-table,
#clientes-table th,
#clientes-table td {
  text-align: center;
  border: 1px solid;
  border-collapse: collapse;
}
```

## f. 

Crie uma função chamada `adicionarClienteTabela` que deve receber um objeto com todos os campos do cliente e criar uma nova linha na tabela utilizando o `document.createElement`. Exemplo:

```js
function adicionarClienteTabela(cliente) {
  // 1, Busque o elemento onde os dados vão na tabela
  const clienteTable = document.getElementById("clientes-table");
  const tableData = clienteTable.querySelector("tbody");

  // 2. Crie uma nova linha e adicione na tabela
  const tableRow = document.createElement("tr");
  tableData.appendChild(tableRow);

  // 3. Crie as celulas e adicione o valor dos dados do cliente...
  // ...
}
```

Essa função deve ser executada no submit do formulário, após as validações.
