import { Error_ } from "../Error/Error";
import { Type } from "../Expresion/Retorno";
import { Ambito } from "../Extra/Ambito";
import { Instruccion } from "./Instruccion";

export class If extends Instruccion {
    constructor(private condicion, private cuerpo: Instruccion, private elsE: Instruccion, line: number, column: number) {
        super(line, column)
    }

    public execute(ambito: Ambito) {
        const value = this.condicion.execute(ambito)

        if (value.type != Type.BOOLEAN) throw new Error_(this.line, this.column, 'Semantico', 'La condicion a evaluar en el if no es de tipo boolean')
        // true - false

        if (value.value) {
            return this.cuerpo.execute(ambito)

        } else if (this.elsE != null) {
            return this.elsE.execute(ambito)
        }

    }

}
