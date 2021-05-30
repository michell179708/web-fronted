//creating a node next to the list items
let list = document.getElementsByTagName("LI");
for(let i=0; i<list.length; i++){
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list[i].appendChild(span);
}
//hide the current list
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
//adding a check in the list
let listCheck = document.querySelector('ul');


listCheck.addEventListener('click', function(evento) {
  if(evento.target.tagName ==='LI'){
    evento.target.classList.toggle('checked');
    if(!evento.target.classList.contains("checked")){
      completed--;
      remaining++;
    }else{
      completed++;
      remaining--;  
    }
    document.getElementById("completed_task").innerHTML = completed;
    document.getElementById("remaining_task").innerHTML = remaining;
  }
}, false);
//creating a list 
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("new-task").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("new-task").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  remaining++; 
  document.getElementById("total_task").innerHTML = completed + remaining;
  document.getElementById("remaining_task").innerHTML = remaining;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
      if(li.classList.contains("checked")){
        console.log("entra1");
        completed--; 
        document.getElementById("completed_task").innerHTML = completed;
      }else{
        console.log("entra2");
        remaining--;  
        document.getElementById("remaining_task").innerHTML = remaining;
      }
      document.getElementById("total_task")
.innerHTML = remaining + completed;
    }
  }
}
//filter task
let completed=0;
let remaining=0;
