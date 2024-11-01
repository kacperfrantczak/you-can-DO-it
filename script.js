const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function taskAdd(){
    if(inputBox.value === ''){
        alert("Musisz coś dodać...");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    dataSave();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        dataSave();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        dataSave();
    }
}, false);

function dataSave(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function taskShow(){
    listContainer.innerHTML = localStorage.getItem("data");
}
taskShow();