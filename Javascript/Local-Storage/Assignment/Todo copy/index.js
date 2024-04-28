
document.querySelector("form").addEventListener("submit",formsubmit)

let arrobj=JSON.parse(localStorage.getItem("todolist"))||[]
display(arrobj);
function formsubmit(event){
    event.preventDefault()

    let formtask=document.querySelector("#task").value;
    let formpriority=document.querySelector("#priority").value;

    obj={
        taskobj:formtask,
        priorityobj:formpriority
    }

    arrobj.push(obj);
    localStorage.setItem("todolist",JSON.stringify(arrobj));
    display(arrobj)
}

function display(arrobj){

    document.querySelector("tbody").innerHTML="";
    arrobj.forEach(function(elem,index){

        let tr=document.createElement("tr");
    
        let td1=document.createElement("td");
        td1.innerText=elem.taskobj;
    
        let td2=document.createElement("td");
        td2.innerText=elem.priorityobj;
        if(elem.priorityobj=="High"){
            td2.style.backgroundColor="red";
        }else{td2.style.backgroundColor="green";}
    
        let td3=document.createElement("td");
        td3.innerText="Delete";
        td3.style.color="red";
        td3.addEventListener("click",function(){
            deletefunc(elem,index)
        })
    
        tr.append(td1,td2,td3);
        document.querySelector("tbody").append(tr);
    
    })

}

function deletefunc(elem,index){
    arrobj.splice(index,1)
    display(arrobj)
    localStorage.setItem("todolist",JSON.stringify(arrobj))
}

