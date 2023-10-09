let arr=["A", "good", "problem"]

// print the sum of length of odd character string

let length=function(x){
    return x.length
}

let isodd=function(y){
    if(y%2==1){
        return y
    }
}

let summer=function(sum,el){
    return sum+el
}

let res=arr.map(length).filter(isodd).reduce(summer)

console.log(res); //8