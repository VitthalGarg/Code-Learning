document.querySelector("form").addEventListener("submit",inputdata)

let taskarr=JSON.parse(localStorage.getItem("tasklist"))||[]
displaytable(taskarr)

function inputdata(event){
    event.preventDefault()
    let taskdata=document.querySelector("#task").value
    let prioritydata=document.querySelector("#priority").value

    let dataobj={
        task:taskdata,
        priority:prioritydata
    }

    // console.log(dataobj);
    taskarr.push(dataobj)
    localStorage.setItem("tasklist",JSON.stringify(taskarr))
    // console.log(taskarr)
    displaytable(taskarr)
}

function displaytable(taskarr){
    document.querySelector("tbody").innerHTML="";
    taskarr.forEach(function(elm,index){
        let row=document.createElement("tr")

        let c1=document.createElement("td")
        c1.innerText=elm.task

        let c2=document.createElement("td")
        c2.innerText=elm.priority
        if(elm.priority=="High"){
            c2.style.backgroundColor="red";
        }else{
            c2.style.backgroundColor="green"
        }

        let c3=document.createElement("td")
        c3.innerText="Delete"
        c3.style.color="red"
        c3.addEventListener("click",function(event,index){
            event.target.parentNode.remove();
            taskarr.splice(index,1)
            localStorage.setItem("tasklist",JSON.stringify(taskarr))
        })

        row.append(c1,c2,c3)
        document.querySelector("tbody").append(row)

    })
}