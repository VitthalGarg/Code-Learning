let arr=[2,4,5,3,6,8]

// Given an array of numbers, return the elements that have even index (starting the count at 0) and are even

let res=arr.filter(function(x){
    if(arr.indexOf(x)%2==0 && x%2==0){
        return x
    }
})

console.log(res)