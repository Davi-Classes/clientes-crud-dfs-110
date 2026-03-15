import {
  clienteForm,
  mostrarMensagem,
  adicionarClienteTabela,
} from "./cliente.view.js";

import { salvarCliente } from "./cliente.model.js";

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

  salvarCliente(cliente);
  adicionarClienteTabela(cliente);
  mostrarMensagem("Cliente cadastrado com sucesso.", "success");

  clienteForm.reset();
});
