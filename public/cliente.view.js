const clientesTable = document.getElementById("clientes-table");
export const clienteForm = document.getElementById("cliente-form");

export function mostrarMensagem(text, type) {
  const mensagemParagraph = document.getElementById("mensagem");

  mensagemParagraph.innerText = text;
  mensagemParagraph.style.fontWeight = "bold";
  mensagemParagraph.style.color = type == "success" ? "green" : "red";
}

export function adicionarClienteTabela(cliente) {
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
