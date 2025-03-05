/** Función para retornar un valor 0 o personalizado en caso que el argumento coincida con undefined, string vacio o null */
export const nvl = (valor, defaultValue = 0) =>
  valor === undefined || valor === '' || valor === null ? defaultValue : valor;
