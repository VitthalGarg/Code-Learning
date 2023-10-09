let arr=["assignment", "media", "problem", "masai"]

// print the array of words which first or last letter is "a"

let res=arr.filter(function(x){
    if(x[0]=="a" || x[x.length-1]=="a"){
        return (x);
    }
})

console.log(res);