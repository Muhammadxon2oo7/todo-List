const AdderForm = document.querySelector("#adderform")
const todoInput = document.querySelector("#todoinput")
const AddBtn = document.querySelector("#addBtn")
const todocontainer = document.querySelector("#todolistitem-container")
const clearIcon = document.querySelector(".input__wrapper > i")
const deleteAll = document.querySelector("#delete-All")
 



AdderForm.addEventListener("submit",TodoMainFun)
function TodoMainFun(e){
    e.preventDefault();
    if(todoInput.value.replace(/ /g, "").length>=3){
        //create todoitem element

        const todoItem = document.createElement("div")
        todoItem.appendChild(document.createTextNode(todoInput.value))
        todoItem.className = "todo__item"
        todocontainer.prepend(todoItem);
        todoInput.value='';

        //create todoitem element end
        //copyFun
        todoItem.addEventListener("click",CopyTodoitem) 

        
        function CopyTodoitem(){
            const content = todoItem.textContent;
            navigator.clipboard.writeText("your notes text : "+ content)
        }
        //copyFun end
        //todoitem element bg changer 
        const bgChanger=document.createElement("input")
        bgChanger.type = 'color'
        bgChanger.className = "bgChanger"
        todoItem.prepend(bgChanger)

        bgChanger.addEventListener("click",bgChangerFun)
        function bgChangerFun(){
            todoItem.style.backgroundColor = bgChanger.value
        }
        //todoitem element bg changer end


        //todoitem delete 
        const chesk=document.createElement("div")
        chesk.className = "check__remove"
        todoItem.prepend(chesk)
        const trash=document.createElement("i")
        trash.className = "fas fa-trash-can"
        chesk.prepend(trash)
        chesk.addEventListener("click",Removtodolist)
        function Removtodolist(){
            todoItem.remove()
        }
        //todoitem delete 
        
        
        
    }
           

}


clearIcon.addEventListener("click",ClearIconFun)

function ClearIconFun(){
    todoInput.value='';
    todoInput.focus();
}



deleteAll.addEventListener("click",deleteAllFun)

function deleteAllFun(){
    const isUserAgree = confirm("Are you sure to delete all?");
    if(isUserAgree){
        while(todocontainer.firstChild){
            todocontainer.removeChild(todocontainer.firstChild);
        }
    }
}