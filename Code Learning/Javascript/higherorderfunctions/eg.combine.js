let nums = [1,2,3,4,5,6]

let div=function(el){
    return el%3==0
}

let cube=function(el){
    return el*el*el
}

let summer=function(acc,el){
    return acc+el
}

let res= nums.filter(div).map(cube).reduce(summer)

console.log(res)

