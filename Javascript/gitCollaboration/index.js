let red=[2,3,4,5];

function calculateArea(red){
    let areas=[];
    for(let i=0; i<red.length;i++){
        areas.push(3.14*red[i]**2);
    }
    return (areas);
}

let a=calculateArea(red);

console.log(a);

function calculatePeri(red){
    let peri=[];
    for(let i=0; i<red.length;i++){
        peri.push(2*3.14*red[i]);
    }
    return (peri);
}

let b=calculatePeri(red);

console.log(b);

function Area(redious){
    return 3.14*redious**2;
}

function peri(redious){
    return 2*3.14*redious;
}

function calculate(array,Callback){
    let newarr=[];
    for(let i=0;i<array.length;i++){
        newarr.push(Callback(array[i]))
    }
    return newarr;
}

console.log(calculate(red,Area));
console.log(calculate(red,peri));