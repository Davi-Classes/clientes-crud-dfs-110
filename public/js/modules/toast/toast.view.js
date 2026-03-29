export function renderToast(text, type) {
  Toastify({
    text: text,
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hoverck
    style: {
      background: type === "success" ? "green" : "red",
    },
  }).showToast();
}
