import { renderClientesTable } from "./cliente.view.js";
import {
  buscarClientes,
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
