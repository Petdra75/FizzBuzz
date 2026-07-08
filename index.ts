import process from 'process';
import * as readline from 'readline';


class FizzBuzzModifiers {
    private _fizz: boolean;
    private _buzz: boolean;
    private _bang: boolean;
    private _bong: boolean;
    private _fezz: boolean;
    private _rev: boolean;
    
    constructor(fizz: boolean = false, buzz: boolean = false, bang: boolean = false, bong: boolean = false, fezz: boolean = false, rev: boolean= false){
        this._fizz = fizz
        this._buzz = buzz
        this._bang =bang
        this._bong = bong
        this._fezz = fezz
        this._rev = rev
    }
    
    
    public get fizz() : boolean {return this._fizz}
    public get buzz() : boolean {return this._buzz}
    public get bang() : boolean {return this._bang}
    public get bong() : boolean {return this._bong}
    public get fezz() : boolean {return this._fezz}
    public get rev() : boolean {return this._rev}

}

function getModifiersFromArgs(args: string[]) : FizzBuzzModifiers {
    if (args.length === 0){
        return new FizzBuzzModifiers()
    }
    const fizz = args.includes("fizz")
    const buzz = args.includes("buzz")
    const bang = args.includes("bang")
    const bong = args.includes("bong")
    const fezz = args.includes("fezz")
    const rev = args.includes("rev")
    
    return new FizzBuzzModifiers(fizz, buzz, bang, bong, fezz, rev)
}


function findBcomponent(msg : string[]): number {

    for(let i = 0; i < msg.length; i++){

        if (msg[i].indexOf('B') !== -1) {
            return i
        }
    }
    return -1
}

function fizzBuzz(maxRepetition: number, modifiers: FizzBuzzModifiers): void {
    for (let i : number = 1; i <=maxRepetition; i++){
        const multipleOfThree : boolean = (modifiers.fizz && i % 3 === 0)
        const multipleOfFive : boolean = (modifiers.buzz && i % 5 === 0)
        const multipleOfSeven: boolean = (modifiers.bang && i % 7 === 0)
        const multipleOfEleven: boolean = (modifiers.bong && i % 11 === 0)
        const multipleOfThirtheen: boolean = (modifiers.fezz && i % 13 === 0)
        const multipleOfSeventeen: boolean = (modifiers.rev && i % 17 == 0)

        const numberMatched : boolean = multipleOfFive || multipleOfSeven || multipleOfThree || multipleOfEleven || multipleOfThirtheen || multipleOfSeventeen
        const message : string[] = []
        
        if (modifiers.fizz && multipleOfThree) { message.push("Fizz") }
        if (modifiers.buzz && multipleOfFive) { message.push("Buzz") }
        if (modifiers.bang && multipleOfSeven) { message.push("Bang") }
         
        if (modifiers.bong && multipleOfEleven) { message.length = 0; message.push("Bong")}
        
        if (modifiers.fezz && multipleOfThirtheen) {
            const positionOfBWord : number = findBcomponent(message)
            positionOfBWord === -1 ? message.push("Fezz") : message.splice(positionOfBWord, 0, "Fezz")
        }

        if (modifiers.rev && multipleOfSeventeen){
            message.reverse()
        }
       
        const stringMessage: string = message.join("")   
        stringMessage !== "" ? console.log(stringMessage) : null;

        if (!numberMatched) {
            console.log(i)
        }
    }
}

const args = process.argv.slice(2);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter a number for FizzBuzz simulation: ", (input: string)=> {
    
    const iterations = parseInt(input);
  
    console.log(`Starting FizzBuzz until ${input} iteration`)
    const modifiers : FizzBuzzModifiers = getModifiersFromArgs(args)
    fizzBuzz(iterations, modifiers);
   
    rl.close();
})
