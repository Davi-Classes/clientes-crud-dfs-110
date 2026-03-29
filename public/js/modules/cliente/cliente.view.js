// export function mostrarMensagem(text, type) {
//   const mensagemParagraph = document.getElementById("mensagem");

//   mensagemParagraph.innerText = text;
//   mensagemParagraph.style.fontWeight = "bold";
//   mensagemParagraph.style.color = type == "success" ? "green" : "red";
// }

export function renderClientesTable(clientes, handleExcluir) {
  const clientesTable = document.getElementById("clientes-table");
  const clientesTableData = clientesTable.querySelector("tbody");

  clientesTableData.innerText = "";
  clientes.forEach((cliente) => renderClienteRow(cliente, handleExcluir));
}

export function renderClienteRow(cliente, handleExcluir) {
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

  const actionsCell = createActionsCell(cliente, async () => {
    const deveRemoverLinha = await handleExcluir(cliente);
    if (deveRemoverLinha) tableRow.remove();
  });

  tableRow.appendChild(actionsCell);
}

function createActionsCell(cliente, handleExcluir) {
  const actionsCell = document.createElement("td");
  actionsCell.classList.add("td-actions");

  const deleteButton = document.createElement("button");

  const trashIcon = document.createElement("ion-icon");
  trashIcon.name = "trash";

  deleteButton.appendChild(trashIcon);
  deleteButton.classList.add("btn", "btn-danger");

  actionsCell.appendChild(deleteButton);
  deleteButton.addEventListener("click", handleExcluir);

  const editButton = document.createElement("a");
  editButton.href = `${cliente.id}/editar`;

  const pencilIcon = document.createElement("ion-icon");
  pencilIcon.name = "pencil";

  editButton.appendChild(pencilIcon);
  editButton.classList.add("btn", "btn-secondary");

  actionsCell.appendChild(editButton);

  return actionsCell;
}

export function renderClienteDataForm(cliente) {
  const clienteForm = document.querySelector("#cliente-form");

  clienteForm.clienteId.value = cliente.id;
  clienteForm.nome.value = cliente.nome;
  clienteForm.email.value = cliente.email;
  clienteForm.endereco.value = cliente.endereco;
}
