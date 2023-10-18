document.querySelector("form").addEventListener("submit",todolist);

let taskArr=[];

function todolist(event){
    event.preventDefault();
    let taskname=document.querySelector("#task").value;
    let priority=document.querySelector("#priority").value;
    // console.log(taskname,priority);

    let taskObj={
        task:taskname,
        prior:priority
    }

    taskArr.push(taskObj);
    displayTable(taskArr);
    
    function displayTable(taskArr){
        document.querySelector("tbody").innerHTML="";
        taskArr.forEach(function(elem){

            let row= document.createElement("tr");

            let col1= document.createElement("td");
            col1.innerText=elem.task;

            let col2= document.createElement("td");

            col2.innerText=elem.prior;
            if(elem.prior=="High"){
                col2.style.background="red";
            } else{
                col2.style.background="green";
            }

            let col3= document.createElement("td");
            col3.innerText="Delete";
            col3.addEventListener("click",function(event){
                event.target.parentNode.remove();
            })

            row.append(col1,col2,col3)

            document.querySelector("tbody").append(row); 
        })
    }
    }