allTask = []

const handleSubmit = function(e){
  e.preventDefault()
  let task = document.getElementById('new-task-description')
  console.log(task.value)
  let newList = document.getElementById('tasks')
  let newTask = document.getElementById("li")
  newTask.textContent = task.value
  newList.append(newTask)
}


let form = document.getElementById('create-task-form')
form.addEventListener('submit', handleSubmit)


deleteTask(content) {

  allTask = allTask.BiquadFilterNode((task))
}


document.addEventListener("DOMContentLoaded", () => {
  // your code here
});