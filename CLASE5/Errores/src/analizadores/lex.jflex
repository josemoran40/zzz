package analizadores;
import Error.*;
import Instruction.*;
import java_cup.runtime.Symbol;


%%

%class Scanner
%public
%line
%char
%cup
%unicode
%ignorecase

%init{
%init}

WHITE = [ \r\t]+
NUMBER = [0-9]+
DECIMAL = [0-9]+("."[0-9]+)?

%%

"(" {return new Symbol(sym.PARLEFT, yytext());}
")" {return new Symbol(sym.PARRIGHT, yytext());}
"+" {return new Symbol(sym.ADD, yytext());}
"-" {return new Symbol(sym.MINUS, yytext());}
"*" {return new Symbol(sym.TIMES, yytext());}
"/" {return new Symbol(sym.DIV, yytext());}
";" {return new Symbol(sym.PUNTOYCOMA, yytext());}

{WHITE} {}
{NUMBER} {return new Symbol(sym.NUMBER, yytext());}
{DECIMAL} {return new Symbol(sym.DECIMAL, yytext());}

. {
	Instruction.list.add(new Error_("Se obtuvo el caracter: "+yytext(), "LEXICO"));
}