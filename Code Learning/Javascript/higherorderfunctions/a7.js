let users = [
    { firstName:"Nrupul", lastName:"Dev", place: "Banglore"},
    { firstName:"Preteek", lastName:"Shukla", place: "Banglore"},
    { firstName:"Yogesh", lastName:"Bhat", place: "Kolkata"}
];

let fullname= function(el){
    return el.firstName+ " "+el.lastName
}

let res=users.map(fullname)

console.log(res)