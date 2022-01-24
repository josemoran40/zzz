//posicion =  inicial + velocidad * 60
const lex = (value) => {
    const lTokens = []
    const lErrors = []
    let state = 0
    let token = ''
    value = value + "#"
    const addToken = (typeToken) => {
        lTokens.push({ token: token, typeToken })
        state = 0
        token = ''
    }
    const addError = (error) => {
        lErrors.push({ message: 'Error Lexico', error })
        state = 0
        token = ''
    }

    for (let i = 0; i < value.length; i++) {
        const c = value[i];

        switch (state) {
            case 0:
                if (c === '\n' || c === ' ') {
                    continue;
                } else if (c === '=') {
                    token += c
                    addToken('EQUALS')
                } else if (c === '+') {
                    token += c
                    addToken('ADD')
                } else if (c === '*') {
                    token += c
                    addToken('TIMES')
                } else if (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57) { //[0-9]
                    token += c
                    state = 1
                } else if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) ||
                    (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) || c == '_') {//[a-zA-Z].
                    token += c
                    state = 2
                } else if (c != "#") {
                    addError(c)
                }
                break;

            case 1:
                if (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57) {
                    token += c
                    state = 1
                } else {
                    //60#
                    addToken('NUMBER')
                    i--
                }
                break;

            case 2:
                if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) || //A-Z
                    (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) || //a-z
                    (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57) || //[0-9]
                    c == '_') {
                    token += c
                    state = 2
                } else {
                    addToken('ID')
                    i--
                }
                break
        }
    }

    return { lTokens, lErrors }

}


const result = lex('posicion =  inicial + velocidad * 60')
console.log(result)