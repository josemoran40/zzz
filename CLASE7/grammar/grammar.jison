%{
 // imports
%}

%lex

%options case-sensitive

%%

\s+                 //se ignoran los espacios en blanco

"+"                 return 'ADD';
"-"                 return 'MINUS';
"/"                 return 'DIV';
"*"                 return 'TIMES';
'('                 return 'LEFT';
')'                 return 'RIGHT';

[0-9]+("."[0-9]+)?\b return 'NUMBER';
[0-9]+\b             return 'NUMBER';

<<EOF>>             return 'EOF';
.                   {console.log(yylloc.first_line, yylloc.first_columm, 'Lexico', yytext)}
/lex

%left 'ADD', 'MINUS'
%left 'DIV', 'TIMES'
%left UMINUS

%start ini

%%

ini :
    expression EOF{
        return $1
    }
;
expression 
    : MINUS expression %prec UMINUS         {$$ = 0 - $2} //-1
    | expression ADD expression             {$$ = $1 + $3}
    | expression MINUS expression           {$$ = $1 - $3}  
    | expression DIV expression             {$$ = $1 / $3}
    | expression TIMES expression           {$$ = $1 * $3}
    | NUMBER                                {$$ = Number($1)}
;
