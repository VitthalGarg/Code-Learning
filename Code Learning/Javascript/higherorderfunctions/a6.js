let arr=[1,2,3,4,5,6]

let visibleby3=function(el){
    return el%3==0
}

let cube=function(el){
    return(el*el*el)
}

let summer=function(sum, el){
    return sum+el
}


let res=arr.filter(visibleby3).map(cube).reduce(summer)

console.log(res);