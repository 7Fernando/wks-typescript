import { type } from "os";

function suma(a: number, b: string): string;
function suma(a: string, b: string): string;
function suma(a: string, b: number): string;
function suma(a: number, b: number): number;
function suma(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") return a + b;

  return String(a) + String(b);
}
let resultado1 = console.log(suma("2", 5));
//cambien los parametros para ver su comportamiento
//haciendo hover sobre resultado

//Aplicar lo mismo para el resto de las operaciones matematicas!
