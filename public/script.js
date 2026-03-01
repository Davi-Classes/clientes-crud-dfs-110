let clientes = [];

const clienteForm = document.getElementById("cliente-form");
const clientesTable = document.getElementById("clientes-table");

function adicionarClienteTabela(cliente) {
  const tableData = clientesTable.querySelector("tbody");

  const tableRow = document.createElement("tr");
  tableData.appendChild(tableRow);

  const nomeCell = document.createElement("td");
  nomeCell.innerText = cliente.nome;
  tableRow.appendChild(nomeCell);

  const emailCell = document.createElement("td");
  emailCell.innerText = cliente.email;
  tableRow.appendChild(emailCell);

  const telCell = document.createElement("td");
  telCell.innerText = cliente.telefone;
  tableRow.appendChild(telCell);

  const dataNascimentoCell = document.createElement("td");
  dataNascimentoCell.innerText =
    cliente.dataNascimento.toLocaleDateString("pt-BR");
  tableRow.appendChild(dataNascimentoCell);
}

function mostrarMensagem(text, type) {
  const mensagemParagraph = document.getElementById("mensagem");

  mensagemParagraph.innerText = text;
  mensagemParagraph.style.fontWeight = "bold";
  mensagemParagraph.style.color = type == "success" ? "green" : "red";
}

clienteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cliente = {
    nome: clienteForm.nome.value.trim(),
    email: clienteForm.email.value.trim(),
    telefone: clienteForm.telefone.value.trim(),
    dataNascimento: clienteForm.dataNascimento.value,
  };

  if (cliente.nome === "") {
    mostrarMensagem("O campo nome é obrigatório.", "error");
    return;
  }

  if (cliente.email === "") {
    mostrarMensagem("O campo email é obrigatório.", "error");
    return;
  }

  if (cliente.telefone === "") {
    mostrarMensagem("O campo telefone é obrigatório.", "error");
    return;
  }

  if (cliente.dataNascimento === "") {
    mostrarMensagem("O campo data de nascimento é obrigatório.", "error");
    return;
  }

  cliente.dataNascimento = new Date(cliente.dataNascimento);

  clientes.push(cliente);
  adicionarClienteTabela(cliente);
  mostrarMensagem("Cliente cadastrado com sucesso.", "success");

  clienteForm.reset();

  console.log(clientes);
});
