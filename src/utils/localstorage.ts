import Cookies from "js-cookie";

const setLocalStorage = (key: string, value: string): void => {
  Cookies.set(key, value, { expires: 365 }); // Define o valor no localStorage com uma validade de 365 dias
};

const getLocalStorage = (key: string): string | undefined => {
  return Cookies.get(key); // Obtém o valor do localStorage
};

const removeLocalStorage = (key: string): void => {
  Cookies.remove(key); // Remove o valor do localStorage
};

export { setLocalStorage, getLocalStorage, removeLocalStorage };
