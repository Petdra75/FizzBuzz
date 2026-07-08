function findBcomponent(msg : string[]): number {

    for(let i = 0; i < msg.length; i++){

        if (msg[i].indexOf('B') !== -1) {
            return i
        }
    }
    return -1
}

function fizzBuzz(): void {
    for (let i : number = 1; i <=100; i++){
        const multipleOfThree : boolean = i % 3 === 0
        const multipleOfFive : boolean = i % 5 === 0
        const multipleOfSeven: boolean = i % 7 === 0
        const multipleOfEleven: boolean = i % 11 === 0
        const multipleOfThirtheen: boolean = i % 13 === 0
        const multipleOfSeventeen: boolean = i % 17 == 0

        const numberMatched : boolean = multipleOfFive || multipleOfSeven || multipleOfThree || multipleOfEleven || multipleOfThirtheen || multipleOfSeventeen
        let message : string[] = []
        
        if (multipleOfThree) { message.push("Fizz")}
        if (multipleOfFive) {message.push("Buzz")}
        if (multipleOfSeven) (message.push("Bang"))
         
        if (multipleOfEleven) {message = ["Bong"]}
        
        if (multipleOfThirtheen) {
             
            const positionOfBWord : number = findBcomponent(message)
            positionOfBWord === -1 ? message.push("Fezz") : message.splice(positionOfBWord, 0, "Fezz")
        }

        if (multipleOfSeventeen){
            message = message.reverse()
        }
       
        const stringMessage: string = message.join("")   
        stringMessage !== "" ? console.log(stringMessage) : null;

        if (numberMatched) {continue}

        console.log(i)
    }
}

fizzBuzz();