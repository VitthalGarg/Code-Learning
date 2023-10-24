// fill in javascript code here

document.querySelector("form").addEventListener("submit",doctor);

let objArr=[];

function doctor(event){
    event.preventDefault();

    let name=document.querySelector("#name").value;
    let docID=document.querySelector("#docID").value;
    let dept=document.querySelector("#dept").value;
    let exp=document.querySelector("#exp").value;
    let mail=document.querySelector("#email").value;
    let mbl=document.querySelector("#mbl").value;

    let obj={
        name:name,
        docID:docID,
        dept:dept,
        exp:exp,
        email:mail,
        mbl:mbl
    }
    objArr.push(obj)

    // console.log(objArr);
    displayTable(objArr);

    function displayTable(objArr){
        document.querySelector("tbody").innerHTML="";
        objArr.forEach(function(elm){
    
            let row=document.createElement("tr");
        
            let col1=document.createElement("td");
            col1.innerText=elm.name;
        
            let col2=document.createElement("td");
            col2.innerText=elm.docID;
        
            let col3=document.createElement("td");
            col3.innerText=elm.dept;
        
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
            col8.innerText="Delete";
            col8.addEventListener("click",function(event){
                event.target.parentNode.remove();
            })

            row.append(col1,col2,col3,col4,col5,col6,col7,col8);
        
            document.querySelector("tbody").append(row);
           
            
        
        })

    }

}




