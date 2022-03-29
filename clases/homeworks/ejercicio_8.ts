//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!
function pluck <DataType, KeyType extends keyof DataType>(arreglo:DataType[], prop:KeyType): DataType[KeyType][]{
    return arreglo.map((object) => {
        return object[prop]
    }) 
}