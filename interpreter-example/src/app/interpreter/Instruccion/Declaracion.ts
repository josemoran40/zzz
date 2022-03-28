import { Expresion } from "../Expresion/Expresion";
import { Ambito } from "../Extra/Ambito";
import { Instruccion } from "./Instruccion";

export class Declaracion extends Instruccion{
    constructor(private id:string, private value:Expresion, line, column){
        super(line, column)
    }

    public execute(ambito: Ambito) {
        const val = this.value.execute(ambito)
        ambito.setVal(this.id, val.value, val.type, this.line, this.column)
    }
}
