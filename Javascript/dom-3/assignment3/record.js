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
        email:email,
        mbl:mbl,
    }
    
    objArr.push(obj);
    displaytable(objArr);

    function displaytable(objArr){
        document.querySelector("tbody").innerHTML=""

        objArr.forEach(function(elm){
            let row=document.createElement("tr");

            let col1=document.createElement("td");
            col1.innerText=elm.name;

            let col2=document.createElement("td");
            col2.innerText=elm.employeeID;

            let col3=document.createElement("td");
            col3.innerText=elm.department;

            let col4=document.createElement("td");
            col4.innerText=elm.exp;

            let col5=document.createElement("td");
            col5.innerText=elm.email;

            let col6=document.createElement("td");
            col6.innerText=elm.mbl;

            let col7=document.createElement("td");
            if(elm.exp<=1){
                col7.innerText="Trainee";
            } else if(1<(elm.exp) && (elm.exp) <=5){
                col7.innerText="Junior";
            }else{
                col7.innerText="Senior";
            }

            let col8=document.createElement("td");
            col8.innerText="delete";
            col8.addEventListener("click",function(event){
                event.target.parentNode.remove();
            })

            row.append(col1,col2,col3,col4,col4,col5,col6,col7,col8);
            document.querySelector("tbody").append(row); 
        })
    }
}

