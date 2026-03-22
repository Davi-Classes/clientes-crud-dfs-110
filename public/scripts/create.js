import { handleCadastrarCliente } from "../js/cliente.controller.js";

const clienteForm = document.querySelector("#cliente-form");
clienteForm.addEventListener("submit", handleCadastrarCliente);
