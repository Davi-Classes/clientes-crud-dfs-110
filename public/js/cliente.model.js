const API_URL = "https://clienteapi.onrender.com";

export async function buscarClientes() {
  const res = await fetch(`${API_URL}/clientes`);
  return res.json();
}

export async function buscarClientePeloId(id) {
  const res = await fetch(`${API_URL}/clientes/${id}`);

  if (res.status == 404) {
    return null;
  }

  return res.json();
}

export async function salvarCliente(cliente) {
  const res = await fetch(`${API_URL}/clientes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cliente),
  });

  return res.json();
}

export async function editarCliente(id, cliente) {
  const res = await fetch(`${API_URL}/clientes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cliente),
  });

  return res.json();
}

export async function excluirCliente(id) {
  const res = await fetch(`${API_URL}/clientes/${id}`, {
    method: "DELETE",
  });

  return res.json();
}
