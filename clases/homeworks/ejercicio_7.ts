function sum3(a: number, b: number): number | string | void{
    if(typeof a === "string" && typeof b === "string") return a + b;

    if(typeof a === "number" && typeof b === "number") return a + b;
}
// Logra que esta funcion tambien concatene strings