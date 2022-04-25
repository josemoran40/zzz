import { Ambito } from "../Extra/Ambito";
import { Instruccion } from "./Instruccion";
import { Statement } from "./Statement";

export class Funcion extends Instruccion{
    constructor(public id: string, public statement:Statement, public paramsIDs:Array<string>, line:number, column:number){
        super(line, column)
    }

    public execute(ambito: Ambito) {
        ambito.guardarFuncion(this.id, this)
    }
}

// function a(b,c,d){
//     //instrucciones
//     print('hola');
// }
//function b(a:string,b,c){
//     //instrtucciones
// }

// a()

