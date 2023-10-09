let users = [
    { firstName:"Nrupul", lastName:"Dev", place: "Banglore"},
    { firstName:"Preteek", lastName:"Shukla", place: "Banglore"},
    { firstName:"Yogesh", lastName:"Bhat", place: "Kolkata"}
];

let bangloreusers= function(el){
    return (el.place=="Banglore")
}

let fullName= function(el){
    return el.firstName+" "+el.lastName
}

let res=users.filter(bangloreusers).map(fullName)

console.log(res)