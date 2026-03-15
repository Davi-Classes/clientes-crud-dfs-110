const clientes = [];
const API_URL = "https://clienteapi.onrender.com";

export async function buscarClientes() {
  const res = await fetch(`${API_URL}/clientes`);
  return res.json();
}

export function salvarCliente(cliente) {
  clientes.push(cliente);
}
