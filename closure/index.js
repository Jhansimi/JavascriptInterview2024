//create a counter function which has increment and getvalue functionality

const privateCounter=()=>{
    let counter=0
    return{
        increment:(val=1)=>{
        counter+=val

        },
        getvalue:()=>{
            return counter
        }
    }

}
const countervalue=privateCounter()
console.log(countervalue) // Whole function

console.log(countervalue.getvalue())//0
countervalue.increment()
console.log(countervalue.getvalue())//1

/*................................ */

const privatecount=()=>{
    const secret="foo"

    return()=>secret
}

const value=privatecount()
console.log(value()) //foo
