let arr=[1,2,3,4]

let odd=function(el){
    return el%2==1
}

let summer=function(sum, el){
    return sum+el
}


let res=arr.filter(odd).reduce(summer)

console.log(res);