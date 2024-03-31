#!/usr/bin/env node

import inquirer from "inquirer"

interface ansType {
    userId: string,
    userPin: number,
    accountType: string,
    transactionType: string,
    amount: number,

}

console.log("Welcome to Bank Al Habib")
const answers = await inquirer.prompt(
    [
        {
            type: "input",
            name: "userId",
            message: "Please enter your Id: "
        },
        {
            type: "number",
            name: "userPin",
            message: "Please enter your PIN: "
        },
        {
            type: "list",
            name: "accountType",
            choices: ["Current", "Saving"],
            message: "Select your account type: ",

        },
        {
            type: "list",
            name: "transactionType",
            choices: ["Fast Cash", "Withdraw"],
            message: "Select your transaction",
            when(answers) {
                return answers.accountType
            },
        },
        {
        type: "list",
        name: "amount",
        choices: [1000, 4000, 10000, 30000],
        message: "Select your amount",
        when(answers) {
            return answers.transactionType == "Fast Cash"
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "Withdraw"
        },
    },
    ]
)

if(answers.userId && answers.userPin)
{
    const balance = 40000
    console.log(balance)
    const Enteredamount = answers.amount
    if(balance >= Enteredamount)
    {
        const remaining = balance - Enteredamount
        console.log("Your remaining balance is: ",remaining)
    }else{
        console.log("Insuficient Balance")
    }

}

