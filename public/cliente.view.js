export const clienteForm = document.getElementById("cliente-form");

const clientesTable = document.getElementById("clientes-table");
export const clientesTableData = clientesTable.querySelector("tbody");

export function mostrarMensagem(text, type) {
  const mensagemParagraph = document.getElementById("mensagem");

  mensagemParagraph.innerText = text;
  mensagemParagraph.style.fontWeight = "bold";
  mensagemParagraph.style.color = type == "success" ? "green" : "red";
}

export function adicionarClienteTabela(cliente) {
  const tableRow = document.createElement("tr");
  clientesTableData.appendChild(tableRow);

  const nomeCell = document.createElement("td");
  nomeCell.innerText = cliente.nome;
  tableRow.appendChild(nomeCell);

  const emailCell = document.createElement("td");
  emailCell.innerText = cliente.email;
  tableRow.appendChild(emailCell);

  const enderecoCell = document.createElement("td");
  enderecoCell.innerText = cliente.endereco;
  tableRow.appendChild(enderecoCell);
}
