document.addEventListener("DOMContentLoaded", () => {
});
var list = document.getElementById('tasks');//creating ul tag list
var lastid = 0;

const handleSubmit = function(e){
  e.preventDefault();
  let task = document.getElementById('new-task-description');//grabbing item input
  let newList = document.getElementById('tasks');//getting <ul>tag
  let newTask = document.createElement("li");//creating list tag
  newTask.appendChild(document.createTextNode(task.value));//adding task.value as text to li tag aka "child of ul parent"
  newTask.setAttribute('id','item'+lastid);
  console.log(newTask.id)
  var removeButton = document.createElement('button');
  removeButton.appendChild(document.createTextNode("remove"));
  removeButton.setAttribute('onClick','removeTask("'+'item'+lastid+'")');
  newTask.appendChild(removeButton);
  var selectPriority = document.createElement('select')
  newTask.appendChild(selectPriority)
  lastid+=1;
  list.appendChild(newTask);
}

function removeTask(itemid){
  var item = document.getElementById(itemid);
  list.removeChild(item);
}

function editTask(itemid){
  var item = document.getElementById(itemid);
  list.setAttribute(itemid)
  // xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue = "new content"

}

let form = document.getElementById('create-task-form')
form.addEventListener('submit', handleSubmit)

done()