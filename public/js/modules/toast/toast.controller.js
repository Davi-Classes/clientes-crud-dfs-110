import { clearToast, getToast } from "./toast.model.js";
import { renderToast } from "./toast.view.js";

export function handleRenderToast() {
  const toast = getToast();
  console.log(toast);

  if (toast == null) {
    return;
  }

  clearToast();
  renderToast(toast.text, toast.type);
}
