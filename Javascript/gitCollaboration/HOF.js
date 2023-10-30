// 1. Reduce (sum)
// 2. map(return a new array)
// 3. filter(return a new array with smaller length-> conditionaly) 
// 4. forEach (simple for loop) no return

let array=[1,2,3,4];

console.log(array.forEach(function(el){
    console.log(el)
})) // 1 2 3 4 undefined, fir each not return

let products=[
    {
        name:"I-phone1",
        price:10,
    },
    {
        name:"I-phone2",
        price:11,
    },
    {
        name:"I-phone3",
        price:12,
    }
]

// let a=products.reduce(function(sum,ele){
//     return sum+ele.price;
// },0) //output== 33

// let a=products.reduce(function(sum,ele){
//     return sum.price+ele.price;
// },0) //output== nan

// let a=products.reduce(function(sum,ele){
//     return sum+ele.price;
// }) //output== undefined

let a=array.reduce(function(sum,ele){
    return sum+ele;
}) //output== 33

console.log(a);
