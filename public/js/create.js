import { handleCadastrarCliente } from "./modules/cliente/cliente.controller.js";

const clienteForm = document.querySelector("#cliente-form");
clienteForm.addEventListener("submit", handleCadastrarCliente);
