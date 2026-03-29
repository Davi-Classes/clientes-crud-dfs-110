import { renderClientesTable, renderClienteDataForm } from "./cliente.view.js";
import {
  buscarClientePeloId,
  buscarClientes,
  editarCliente,
  excluirCliente,
  salvarCliente,
} from "./cliente.model.js";
import { redirectTo } from "./utils.js";

export async function handleListarClientes() {
  const clientes = await buscarClientes();
  renderClientesTable(clientes, handleExcluirCliente);
}

async function handleExcluirCliente(cliente) {
  const confirmacao = confirm(
    `Deseja realmente excluir o cliente ${cliente.nome}?`,
  );

  if (!confirmacao) {
    return false;
  }

  await excluirCliente(cliente.id);
  return true;
}

export async function handleCadastrarCliente(event) {
  event.preventDefault();
  const clienteForm = event.target;

  const cliente = {
    nome: clienteForm.nome.value.trim(),
    email: clienteForm.email.value.trim(),
    endereco: clienteForm.endereco.value.trim(),
  };

  if (cliente.nome === "") {
    // mostrarMensagem("O campo nome é obrigatório.", "error");
    return;
  }

  if (cliente.email === "") {
    // mostrarMensagem("O campo email é obrigatório.", "error");
    return;
  }

  if (cliente.endereco === "") {
    // mostrarMensagem("O campo endereco é obrigatório.", "error");
    return;
  }

  const message = await salvarCliente(cliente);
  // mostrarMensagem(message.detail, "success");

  clienteForm.reset();
  redirectTo("/");
}

export async function handleEditarCliente(event) {
  event.preventDefault();
  const clienteForm = event.target;

  const clienteId = clienteForm.clienteId.value;

  const cliente = {
    nome: clienteForm.nome.value.trim(),
    email: clienteForm.email.value.trim(),
    endereco: clienteForm.endereco.value.trim(),
  };

  if (cliente.nome === "") {
    // mostrarMensagem("O campo nome é obrigatório.", "error");
    return;
  }

  if (cliente.email === "") {
    // mostrarMensagem("O campo email é obrigatório.", "error");
    return;
  }

  if (cliente.endereco === "") {
    // mostrarMensagem("O campo endereco é obrigatório.", "error");
    return;
  }

  const message = await editarCliente(clienteId, cliente);
  // mostrarMensagem(message.detail, "success");

  clienteForm.reset();
  redirectTo("/");
}

export async function handleDetalharClienteEdicao() {
  const pathname = window.location.pathname;
  const clienteId = Number(pathname.split("/")[1]);

  if (isNaN(clienteId)) {
    return redirectTo("/not-found");
  }

  const cliente = await buscarClientePeloId(clienteId);

  if (!cliente) {
    return redirectTo("/not-found");
  }

  renderClienteDataForm(cliente);
}
