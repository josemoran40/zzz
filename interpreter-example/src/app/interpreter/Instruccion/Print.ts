import { Expresion } from "../Expresion/Expresion";
import { Ambito } from "../Extra/Ambito";
import { Instruccion } from "./Instruccion";

export class Print extends Instruccion{
    constructor(private values:Expresion[],line, column ){
        super(line, column)
    }

    public execute(ambito: Ambito) {
        for (const value of this.values) {
            const val = value.execute(ambito)
            console.log(val.value)
        }
    }
}