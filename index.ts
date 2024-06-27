#! /usr/bin/env node
import inquirer from "inquirer"; //importing inquirer package
import chalk from "chalk"; // importing chalk

let todos: string[] = [];
let conditions = true;
//    Welocome Messeage
console.log(chalk.blue.bold("\n \tWelocme to my todo list Application\n"));

let main = async () => {
  while (conditions) {
    let option = await inquirer.prompt([
       {
        name: "choices",
        type: "list",
        message: "Select an option you want to do",
        choices: [
          "Add task",
          "Delete task",
          "Update Task",
          "View Todo-List",
          "Exit",
        ],
      },
    ]);

    if(option.choices === "Add task"){
     await addTask()
    }

    else if(option.choices==="Delete task"){
      await deletee()
    }
    else if(option.choices==="Update Task"){
      await update()
    }

    else if (option.choices === "View Todo-List"){
      await view()
    }

    // Exit button

    else if(option.choices==="Exit"){
      conditions = false;
    }
  }
};
// Function to add task
let addTask = async () => {
  let newtask = await inquirer.prompt([
    {
      name: "add",
      type: "input",
      message: "Enter your new task",
    },
  ]);
  todos.push(newtask.add);
  console.log(`\n${newtask.add} task added Successfully`);
};

// Function to view all todo list
let view = async () => {
  console.log(`\n Your Todo-list:\n`);
  todos.forEach((task , index)=>{
 console.log(`${index + 1} ${task}`)
  });
};
// Function to delete task 
let deletee = async () =>{
  await view()
  let indexTask = await inquirer.prompt([{
    name:"index",
    type:"number",
    message:"Enter the `index number`of the task which you want to delete:"
  }]);
  let deletedTak =todos.splice(indexTask.index -1,1)
  console.log(`${deletedTak} this task has been deleted from the todo list`);
}
// Update task
let update = async () =>{
  await view()
  let updateTask = await inquirer.prompt([{
    name:"index",
    type:"number",
    message:"Enter the `index number` of the task which you want to Update:",
  },
{
 name:"newtask",
 type:"input",
 message:"Enter your New task name",
}
]);
todos[updateTask.index -1] = updateTask.newtask
console.log(`Task at index no. ${updateTask.index-1} Updated Successfully [for updated list check option "View Todo-List"]`)
}
main();