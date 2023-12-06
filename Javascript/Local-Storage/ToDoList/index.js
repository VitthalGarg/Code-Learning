document.querySelector("form").addEventListener("submit",todolist);
// let taskArr=[];
let taskArr
if(localStorage.getItem("todolist")==null){
    taskArr=[];
}else{
    taskArr=JSON.parse(localStorage.getItem("todolist"));
}
// console.log(taskArr)
displayTable(taskArr)

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
    // console.log(taskArr);
    localStorage.setItem("todolist",JSON.stringify(taskArr));
    displayTable(taskArr);

}
    
function displayTable(taskArr){
        document.querySelector("tbody").innerHTML="";
        taskArr.forEach(function(elem,index){

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
                // event.target.parentNode.remove();
                // remove from local storage (ls)
                deleterow(elem,index)

            })

            row.append(col1,col2,col3)

            document.querySelector("tbody").append(row); 
        })


        //splice()

        // let arr=[1,2,3,55,5,5,5,8,7,8]
        // //n paramers- splice(startingindex,totalitemstoberemoved)
        // arr.splice(0,2) //[55,5,5,5,8,7,8]
}

function deleterow(elem,index){
    console.log(taskArr)
    taskArr.splice(index,1)
    localStorage.setItem("todolist",JSON.stringify(taskArr));
    // console.log(taskArr)
    displayTable(taskArr)

}