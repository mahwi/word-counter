#! /usr/bin/env node

import inquirer from "inquirer";

let todos :string[] =[];
let conditions = true;

while(conditions)
  
{
  let ans = await inquirer.prompt([{
  name:"select",
  type:"list",
  message:"select an operation you want to do",
  choices:["Add Task","Update Task","View todo-List","Delete Task","Exit"],
}]);

if (ans.select === "Add Task"){

let addTodo = await inquirer.prompt(    
   {
     name:"addmore",
     type:"input",
     message:"Add items in the list:", 
   }
 );
 todos.push(addTodo.addmore);
  console.log(todos);


}
if(ans.select === "Update Task"){
let UpdateTodo =await inquirer.prompt({
 name:"todo",
 type:"list",
 message:"update items in the list",
 choices:todos.map(item => item)
});
let addTodo = await inquirer.prompt(    
 {
   name:"todo",
   type:"input",
   message:"add items in the list:", 
 }
);
let newTodo = todos.filter(val =>val !== UpdateTodo.todo);
todos = [...newTodo,addTodo.todo];
console.log(todos);

}
if(ans.select === "View todo-List"){
console.log("*** TO DO LIST ***");
console.log(todos);
console.log("***************");
}
if(ans.select === "Delete Task"){
let deleteTodo =await inquirer.prompt({
 name:"todo",
 type:"list",
 message:"select item to delete",
 choices: todos.map(item => item)
})
let newTodo = todos.filter(val =>val !== deleteTodo.todo);
todos = [...newTodo];
console.log(todos);
}
if (ans.select ==="Exit"){
  console.log("****Exit program****");
  conditions = false;
}
};



