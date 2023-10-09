// syntax of reduce

// array.reduce(function(sum, el, i, arr){

//})

// sum is a value (first element of array or given)  

let nums = [10,4,5,6,7];

let res= nums.reduce(function(sum,el,i,arr){
    return sum+el
})

console.log(res)

//.*********1st case: without initial value of sum ************
// sum=10 // first value of first element of array

// first iteration-->> 10+4-->>  sum=14
// 2nd iteration-->> 14+5-->>  sum=19
// 3rd iteration-->> 19+6-->>  sum=25
// 4th iteration-->> 25+7-->>  sum=32


//.*********2nd case: with initial value of sum ************
// sum=10 // first value of first element of array

let summer= function(sum, el){
    return sum+el
}

let res2= nums.reduce(summer, 20);

console.log(res2)

// sum=20,  el=10
// first iteration-->> 20+10-->>  sum=30
// 2nd iteration-->> 30+4-->>  sum=34
// 3rd iteration-->> 34+5-->>  sum=39
// 4th iteration-->> 39+6-->>  sum=45
// 5th iteration-->> 45+7-->>  sum=52




