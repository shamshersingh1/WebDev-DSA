let titleElement=document.getElementById("title");
let descriptionElement=document.getElementById("description");
let dateElement=document.getElementById("date");
let sumbitElement=document.getElementById("addTodo");
let todoList=[];
subElem.addEventListener('click',function(){
    let title=titleElement.value;
    let description=descriptionElement.value;
    let date=dateElement.value;
    if(!title||!description||!date){
        alert("Enter all values!");
        return;
    }
    todoList.push({
        title,
        description,
        date
    });
    titleElement.value="";
    descriptionElement.value="";
    dateElement.value="";
    renderElement();
});
let listToDoElement=document.getElementById("listTodo");
let listFragmentElement=document.createDocumentFragment();
function renderElement(){

for(let i=0;i<todoList.length;i++){
    listToDoElement.innerHTML="";
    let displayTitle=todoList[i].title;
    let displayDescription=todoList[i].description;
    let displayDate=todoList[i].date;
    let divElement=document.createElement("div");
    let titlePara=document.createElement("p");
    let descriptionPara=document.createElement("p");
    let datePara=document.createElement("p");

    titlePara.textContent=displayTitle;
    descriptionPara.textContent=displayDescription;
    datePara.textContent=displayDate;

    let removeElement=document.createElement("button");
    removeElement.textContent("remove");
    removeElement.addEventListener('click',function(){

    });
    divElement.append(titlePara,descriptionPara,datePara,removeElement);
    listFragmentElement.appendChild(divElement);
}
listToDoElement.appendChild(listFragmentElement);
}