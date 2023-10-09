let nums=[1,4,5,6,7]

let x=nums.map(function(el){
    return (el%2==0)
})

console.log(x)
// [false, true, f, t, f]

let y=nums.filter(function(el){
    return (el%2==0)
})



console.log(y) //[4,6] //filter only one item

let z=nums.filter(function(el){
    return (el%3==0)
})

console.log(z) //[6]

// filter and map are same but filter returns only elements which are satistying the condition

let devisibleby4= function(el){
    return el % 4 ==0
}

let res=nums.filter(devisibleby4)

console.log(res) //[4]



