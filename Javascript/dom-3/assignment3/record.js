document.querySelector("form").addEventListener("submit",EmployeeList)

let objArr=[];

function EmployeeList(event){
    event.preventDefault();

    let name=document.querySelector("#name").value;
    let employeeID=document.querySelector("#employeeID").value;
    let department=document.querySelector("#department").value;
    let exp=document.querySelector("#exp").value;
    let email=document.querySelector("#email").value;
    let mbl=document.querySelector("#mbl").value;

    let obj={
        name:name,
        employeeID:employeeID,
        department:department,
        exp:exp,
        emial:email,
        mbl:mbl,
    }
    
    objArr.push(obj);
    console.log(objArr);

}