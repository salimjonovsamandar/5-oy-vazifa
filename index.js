// 1-masala
let n = prompt("Ixtiyoriy sonlarni kiriting")
function sum(arg){
    let sum = 0;
    for (const item of arg) {
        if(item%2==0){
            sum += item**2
        }
    }
    return sum
}
console.log(sum(n));


// 2-masala
function words(arg){
    let newArr = []
    for (const item of arg) {
        newArr.push(item[0])
    }
    return newArr
}
// console.log(words(["salom", "dunyo"]));


// 3-masala
// let n = {
//     age: 20,
//     name: "John",
//     born: 2003,
// }
function allSum(arg){
    let a = Object.values(arg)
    let s = 0
    for (const item of a) {
        if(typeof item == "number"){
            s += item
        }
    }
    return s
}
// console.log(allSum(n));


// 4-masala
// let n = [1, 2, 3, 4, 5, 6, 7]
function tub(arg){
    let counter = 0;
    for(let i = 1; i<=arg; i++){
        if(arg%i==0){
            counter++
        }
    }
    return counter
}
function sumTub(arg){
    let res = 0;
    for (const item of arg) {
        if(tub(item)==2){
            res += item
        }
    }
    return res
}
// console.log(sumTub(n));


// 5-masala
// let n = 123457;
function odd(arg){
    let counter = 0;
    for(let i =1; i<=arg; i*=10){
        counter++
    }
    return counter
}
function oddSum(arg){
    let sum = 0;
    for(let i = odd(arg); i>=0; i--){
        let a = Math.trunc(arg/(10**(i-1)))%10
        if(a%2==1){
            sum += Math.trunc(arg/(10**(i-1)))%10
        }
    }
    return sum
}
// console.log(oddSum(n));