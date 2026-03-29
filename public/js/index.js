import { handleListarClientes } from "./modules/cliente/cliente.controller.js";
import { handleRenderToast } from "./modules/toast/toast.controller.js";

document.addEventListener("DOMContentLoaded", () => {
  handleRenderToast();
  handleListarClientes();
});
