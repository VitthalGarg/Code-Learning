let arr= [1,2,3,4]

// sum of odd-->> 1+3=4
//filter().reduce()

let res = arr.filter(function(el){
    return el%2==1
})

console.log(res)

var out= res.reduce(function(acc,el){
    return acc+el
})

console.log(out)

console.log("-----------------------------")

let res2= arr.filter(function(el){
    return el%2==1
}).reduce(function(acc,el){
    return acc+el
})
console.log(res2)

console.log("-----------------------------")

let isodd= function(el){
    return el % 2 ==1
}

let summer= function(acc, el){
    return acc+el
}

let res3= arr.filter(isodd).reduce(summer)
console.log(res3)


// chaining

//forEach, map, filter, reduce----> array

// array.forEach  undefined
// array.map  array
// array.filter  array
// array.reduce  single number

// forEach().map() - not possible
// map().forEach()-> possible
// map().filter-> possible
// filter().reduce()-> possible

let st= [
    {name:"nrupul", age: "dev", place:"delhi"},
    {name:"krishna", age: "avtar", place:"swm"},
    {name:"vitthal", age: "garg", place:"delhi"},
    {name:"mayank", age: "gupta", place:"jc"}
];

let nam= st.map(function(el){
    return (el.name)
})

console.log(nam);

let nam2= st.map(function(el){
    return (el.name + " " + el.age)
})

console.log(nam2);


let na= st.filter(function(el){
    return (el.place== "delhi")
}).map(function(el){
    return el.name
})

console.log(na)





