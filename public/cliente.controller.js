import {
  clienteForm,
  clientesTableData,
  mostrarMensagem,
  adicionarClienteTabela,
} from "./cliente.view.js";

import { buscarClientes, salvarCliente } from "./cliente.model.js";

async function handleListarClientes() {
  const clientes = await buscarClientes();

  clientesTableData.innerText = "";
  clientes.forEach((cliente) => adicionarClienteTabela(cliente));
}

async function handleCadastrarCliente(event) {
  event.preventDefault();

  const cliente = {
    nome: clienteForm.nome.value.trim(),
    email: clienteForm.email.value.trim(),
    endereco: clienteForm.endereco.value.trim(),
  };

  if (cliente.nome === "") {
    mostrarMensagem("O campo nome é obrigatório.", "error");
    return;
  }

  if (cliente.email === "") {
    mostrarMensagem("O campo email é obrigatório.", "error");
    return;
  }

  if (cliente.endereco === "") {
    mostrarMensagem("O campo endereco é obrigatório.", "error");
    return;
  }

  const message = await salvarCliente(cliente);
  mostrarMensagem(message.detail, "success");

  clienteForm.reset();
  await handleListarClientes();
}

clienteForm.addEventListener("submit", handleCadastrarCliente);
document.addEventListener("DOMContentLoaded", handleListarClientes);
