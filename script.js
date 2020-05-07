const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let i=0;
function newTodo() {

  i++;
let container=  document.createElement("div");
container.classList.add( 'todo-container');
list.appendChild(container);

let chk= document.createElement("input");
chk.setAttribute("type", "checkbox");
chk.setAttribute('id','chk'+i);
chk.classList.add('todo-checkbox');

let txt = document.createElement("input");
txt.setAttribute("type", "text");
txt.classList.add('todo-text');

let del=document.createElement("button");
del.innerHTML="Delete";
del.classList.add('todo-delete');
del.setAttribute('id','del'+i);

container.appendChild(chk);
container.appendChild(txt);
container.appendChild(del);

document.getElementById('del'+i).addEventListener('click',function() {
 
  container.parentNode.removeChild(container);
  itemCountSpan.textContent--;
 countChk();
 });

 document.getElementById('chk'+i).addEventListener('change',function(){
   // I can use countChk(); but I like to use another method
  if(this.checked==true){
  uncheckedCountSpan.textContent--; 
 }
 else{
  uncheckedCountSpan.textContent++; 
 }
  });
 
itemCountSpan.textContent= count();
countChk();

}


function count(){
return document.querySelectorAll("#todo-list .todo-container").length;
}

function countChk(){
  let countRec=count();
 
  let ctr=0;
for (let i=0; i<countRec;i++){

  let isChk= document.querySelectorAll("#todo-list .todo-container .todo-checkbox");
 if (isChk[i].checked===false){
  
ctr++;
 }
 uncheckedCountSpan.textContent=ctr;
}
}