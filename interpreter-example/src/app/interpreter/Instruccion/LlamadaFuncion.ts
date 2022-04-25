import { Error_ } from "../Error/Error";
import { Expresion } from "../Expresion/Expresion";
import { Ambito } from "../Extra/Ambito";
import { Instruccion } from "./Instruccion";

export class LlamadaFuncion extends Instruccion{
    constructor(private id:string, private params: Array<Expresion>, line:number, column:number){
        super(line, column)
    }
    public execute(ambito: Ambito) {
        const func = ambito.getFuncion(this.id)
        if(func){
            if(this.params.length === func.paramsIDs.length){
                const newAmbito = new Ambito(ambito.getGlobal())
                for (const i in this.params) {
                    const value = this.params[i].execute(ambito)
                    newAmbito.setVal(func.paramsIDs[i], value.value, value.type, this.line, this.column)
                }
                func.statement.execute(newAmbito)
            }else{
                throw new Error_(this.line, this.column, 'Semantico', `Cantidad de parametros incorrecta`)
            }
        }else{
            throw new Error_(this.line, this.column, 'Semantico', `Funcion ${this.id} no encontrada`)
        }
    }
}

