const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*****':  ' ',
};

function decode(expr) {
    
    let digiStringPointer = 2;
    let digiString = '';
    let morzeChar = '';
    let abcString = '';

    while (digiStringPointer <= expr.length){

        digiString = expr.slice(digiStringPointer - 2, digiStringPointer);
        
        switch (digiString) {
            case '10':
                morzeChar += '.';
                break;
            case '11':
                morzeChar += '-';
                break; 
            case '**':
                morzeChar += '*';
                break;            
            default:
                break;
        }
        
        if ((digiStringPointer) % 10 === 0) {      
            abcString += MORSE_TABLE[morzeChar];
            morzeChar = '';
        }

        digiStringPointer += 2;

    }
    return abcString;

}

module.exports = {
    decode
}




