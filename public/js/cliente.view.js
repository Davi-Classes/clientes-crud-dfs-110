// export function mostrarMensagem(text, type) {
//   const mensagemParagraph = document.getElementById("mensagem");

//   mensagemParagraph.innerText = text;
//   mensagemParagraph.style.fontWeight = "bold";
//   mensagemParagraph.style.color = type == "success" ? "green" : "red";
// }

export function renderClientesTable(clientes) {
  const clientesTable = document.getElementById("clientes-table");
  const clientesTableData = clientesTable.querySelector("tbody");

  clientesTableData.innerText = "";
  clientes.forEach(renderClienteRow);
}

export function renderClienteRow(cliente) {
  const clientesTable = document.getElementById("clientes-table");
  const clientesTableData = clientesTable.querySelector("tbody");

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
