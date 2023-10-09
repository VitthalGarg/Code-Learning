let nums=[1,4,5,6,7]
//[2,8,10,12,14]

let arr=[]
nums.forEach(function(el){
    arr.push(el*2)
})

console.log(arr)

let x=nums.map(function(el){
    return (el*2)
})

console.log(x)