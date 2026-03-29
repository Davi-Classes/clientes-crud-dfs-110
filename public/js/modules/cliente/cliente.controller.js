import { renderClientesTable, renderClienteDataForm } from "./cliente.view.js";
import {
  buscarClientePeloId,
  buscarClientes,
  editarCliente,
  excluirCliente,
  salvarCliente,
} from "./cliente.model.js";
import { redirectTo } from "../../utils.js";
import { renderToast } from "../toast/toast.view.js";
import { addToast } from "../toast/toast.model.js";

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
    renderToast("O campo nome é obrigatório.", "error");
    return;
  }

  if (cliente.email === "") {
    renderToast("O campo email é obrigatório.", "error");
    return;
  }

  if (cliente.endereco === "") {
    renderToast("O campo endereco é obrigatório.", "error");
    return;
  }

  const message = await salvarCliente(cliente);

  addToast(message.detail, "success");
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
    renderToast("O campo nome é obrigatório.", "error");
    return;
  }

  if (cliente.email === "") {
    renderToast("O campo email é obrigatório.", "error");
    return;
  }

  if (cliente.endereco === "") {
    renderToast("O campo endereco é obrigatório.", "error");
    return;
  }

  const message = await editarCliente(clienteId, cliente);

  addToast(message.detail, "success");
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
