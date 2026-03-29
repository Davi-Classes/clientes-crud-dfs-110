import {
  handleDetalharClienteEdicao,
  handleEditarCliente,
} from "../js/cliente.controller.js";

const clienteForm = document.querySelector("#cliente-form");
clienteForm.addEventListener("submit", handleEditarCliente);
document.addEventListener("DOMContentLoaded", handleDetalharClienteEdicao);
