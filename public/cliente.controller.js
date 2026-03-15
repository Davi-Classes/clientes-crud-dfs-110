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

  salvarCliente(cliente);
  adicionarClienteTabela(cliente);
  mostrarMensagem("Cliente cadastrado com sucesso.", "success");

  clienteForm.reset();
});
