const TOAST_KEY = "toast:storage";

export function getToast() {
  const toastData = sessionStorage.getItem(TOAST_KEY);
  return toastData ? JSON.parse(toastData) : null;
}

export function addToast(text, type) {
  sessionStorage.setItem(
    TOAST_KEY,
    JSON.stringify({
      text,
      type,
    }),
  );
}

export function clearToast() {
  sessionStorage.removeItem(TOAST_KEY);
}
