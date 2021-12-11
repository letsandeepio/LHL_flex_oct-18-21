// Steps to create new TODO

// Capture the value of the text box



// get the value from it



// Add (append it to the DOM)



//const todoForm = document.getElementById('new-todo-frm');

// Target the form (get the handle -> reference)
// Capture Click on the Add Todo button
const todoForm = document.querySelector('#new-todo-frm');

todoForm.addEventListener("submit",function(event){
  //stops the default behavior of the event i.e. submit the form
  event.preventDefault();

  // target the text box inside the form
  const textBox = this.elements.todo;

  const textBoxValue = textBox.value;

  // Create new LI programmatically
  const newTodo = document.createElement("li");

  // assigning the text inside li to this
  newTodo.textContent = textBoxValue;

  // get the handle on our todos container
  const todoContainer = document.querySelector('#todos');

  todoContainer.append(newTodo);

  textBox.value = "";

  textBox.focus();

})