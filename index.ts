#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\tWelcome to CLI Number Guessing Game\n");

const computerNumber=Math.floor(Math.random() * 10 + 1);

const result = await inquirer.prompt([
    {
        name:"guessing_game",
        type:"number",
        message:"Please guess a number between 1-10:",
    },
]);

//condition

if(result.guessing_game === computerNumber){
    console.log("Congratulation! you guess a right number");
}
else{
    console.log("Wrong number, Try Again");
}