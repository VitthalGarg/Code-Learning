let sweets = ["kaju", "laddu", "burfi", "kova"]

// for (let i=0;, i<sweets.length: i++){
    // console.loh(sweets(i))
// }

//syntax:
// array.forEach(function(elem, index, array)){

// }

sweets.forEach(function(e,i,a){
    console.log(e,i,a)
})

// kaju-> forEach-> kaju 0-> ["kaju", "laddu", "burfi", "kova"]
// laddu-> forEach-> laddu 1> ["kaju", "laddu", "burfi", "kova"]
// burfi-> forEach-> burfi 2-> ["kaju", "laddu", "burfi", "kova"]
// kova-> forEach-> kova 2-> ["kaju", "laddu", "burfi", "kova"]

console.log("----------------------------------------------------------");

var box= []

sweets.forEach(function (e,i){
    box.push(e)
})

console.log(box)

// ["kaju", "laddu", "burfi", "kova"]

console.log("----------------------------------------------------------");

var box= []

let x=sweets.forEach(function (e,i){
    return (e)
})

console.log(x); //output->undefined

// forEach is returning undefined

console.log("----------------------------------------------------------");

// map

let y=sweets.map(function (e,i){
    return (e)
})

console.log(y); // output--// ["kaju", "laddu", "burfi", "kova"]
// map is returning

//-------------------------//

// forEach vs map

// 1. forEach wont return anything, it will return undefined
// 2. map will return aaray
// 3. forEach has extra charges- []
// 4. map doesnt have additonal charges by default it return array

//----------------------------//

console.log("----------------------------------------------------------");

// map

let z=sweets.map(function (e,i){
    return (e, i)
})

console.log(z); // output--// [0, 1, 2, 3]

//-------------------------//

console.log("----------------------------------------------------------");

// map

let a=sweets.map(function (e,i, array){
    return (array)
})

console.log(a); 
// output--
// ["kaju", "laddu", "burfi", "kova"]
// ["kaju", "laddu", "burfi", "kova"]
// ["kaju", "laddu", "burfi", "kova"]
// ["kaju", "laddu", "burfi", "kova"]

//-------------------------//

console.log("----------------------------------------------------------");

// map

let b=sweets.map(function (e,i, array){
    return (e, i, array)
})

console.log(b); 
// output--
// ["kaju", "laddu", "burfi", "kova"]
// ["kaju", "laddu", "burfi", "kova"]
// ["kaju", "laddu", "burfi", "kova"]
// ["kaju", "laddu", "burfi", "kova"]

//-------------------------//

console.log("----------------------------------------------------------");

// map

let c=sweets.map(function (e,i, array){
    return (i)
})

console.log(c); 
// output--
// [0,1,2,3]

//-------------------------//

console.log("----------------------------------------------------------");

// map

let d=sweets.map(function (e, i, array){
    return (i, array)
})

console.log(d); 
// output--
// [0,1,2,3]

//-------------------------//
console.log("----------------------------------------------------------");

// map

let e=sweets.map(function (e, i, array){
    return (e, array)
})

console.log(e); 
// output--
// [0,1,2,3]

//-------------------------//


