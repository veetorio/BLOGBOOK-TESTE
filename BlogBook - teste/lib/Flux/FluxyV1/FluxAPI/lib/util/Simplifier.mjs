
export class Simplifier {

    
     elementCollector(...args){
        let objects = args.map(item => document.getElementById(item))
        return objects;
    }
    CompactTitle(titleArg){
        titleArg = titleArg
        .trim()
        .replaceAll(/\s/g,'-')
        .concat('-' + this.GeneratedIdentifierNatural())
        return titleArg
    }
    CompactWord(wordArg){
        wordArg = wordArg
        .trim()
        .replaceAll(/\s/g,'-')
        
        return wordArg
    }
     gerarLetras(quantidade) {
        let letras = '';
        for (let i = 0; i < quantidade; i++) {
            letras += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        return letras;
    }
    
     gerarNumeros(quantidade) {
        let numeros = '';
        for (let i = 0; i < quantidade; i++) {
            numeros += Math.floor(Math.random() * 10);
        }
        return numeros;
    }
    
    createSlug(str) {
        return str
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .trim();
    }

    GeneratedIdentifierNatural() {
        let codeWord = this.gerarLetras(3)
        let codeNumber = this.gerarNumeros(2)
        let code = codeWord + codeNumber
        return code.toUpperCase();
    }
    














   

    random(...args){
        let max = args[0]
        let min = args[1]
        if(min === undefined) min = 0
        const rand = Math.floor(Math.random() * (max-min + 1) + min)
        return rand;
    }
}