export const nvl = (valor, defaultValue = 0) =>
  valor === undefined || valor === '' || valor === null ? defaultValue : valor;
