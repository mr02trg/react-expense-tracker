# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction
A simple expense tracker project to demonstrate all the fundamental concpet behind ReactJS

## Component Tree

                  App,js
                     |
                     |
        ---------------------------------
        |                               |
        |                               |
      NewExpense                   ExpenseWrapper
        |                               |
        |                               |
      ExpenseForm         ---------------------------------
                          |             |                 |
                          |             |                 |
                  ExpenseFilter   ExpenseChart        ExpenseList
                                        |                 |
                                        |                 |
                                  ExpenseChartBar     ExpenseItem
                                                          |
                                                          |
                                                      ExpenseDate  


## What I learn
1. `ExpenseForm` -> 2 way-binding (between HTML form and React component state) using `useState` hook
2. Refer to `App.js -> Expense*.js` to see how `lifting the state up` to allow the communication between new data generated in `ExpenseForm` and `ExpenseList`
3. `setState` will re-render the component by calling the component function again, returning the new JSX with updated state. <br/>
If parent component is re-rendered, all child components also get re-render 
4. Dynamic styling using `dynamic classes and style`
5. `List / Conditional Rendering `
6. `Event Handling`

## Things to improve
1. Use `CSS Module` to scope CSS to its component