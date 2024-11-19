import { nvl } from '../utils.js';
//================================================
const findInObject = (array, valor, criterio) =>
  array.find((a) => a[`${criterio}`] === valor);

const items = [
  {
    codigo: 1,
    descripcion: 'Operacional',
  },
  {
    codigo: 2,
    descripcion: 'Pre-operacional',
  },
];

items.pop();

console.log(items);
