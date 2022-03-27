
package Analizadores;
import java_cup.runtime.Symbol; 

%%
%class Scanner /*Class name will be Scanner*/
%public /*Will be public*/
%line /*Count of lines*/
%char /*Count of recognized characters*/
%cup /*Will works with cup*/
%unicode /*Set of characters is unicode*/
%ignorecase 

%init{
%init}

WHITE = [ \r\t]+
NUMBER = [0-9]+
DECIMAL = [0-9]+("."[0-9]+)?

%%

"+" {return new Symbol(sym.ADD, yytext());} 
"-" {return new Symbol(sym.MINUS, yytext());} 
"*" {return new Symbol(sym.TIMES, yytext());} 
"/" {return new Symbol(sym.DIV, yytext());}  
";" {return new Symbol(sym.PUNTOYCOMA, yytext());} 

{WHITE} {}
{NUMBER} {return new Symbol(sym.NUMBER, yytext());}
{DECIMAL} {return new Symbol(sym.DECIMAL, yytext());}

. {
	System.out.println("Error lexico: "+yytext());
}
