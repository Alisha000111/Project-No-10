import inquirer from "inquirer"
console.log("Wellcome to my quiz system project:")
console.log("You are required to gain maximum 4 points for window.")
let points = 0 
let question1 = await inquirer.prompt([
    {
name: "one",
message: "What is the world's largest ocean?",
type: "list",
choices: ["pacific ocean"," red ocean","blue ocean","ocean"]
    }
])
if (question1.one == "pacific ocean"){
    console.log("your answer is correct")
    points++
}else {
    console.log("incorrect answer")
}
let question2 = await inquirer.prompt([
    {
name: "two",
message: "How far away in the moon?",
type: "list",
choices: ["000 miles","200 miles","238,900 miles","111 miles"]
    }
])
if (question2.two == "238,900 miles"){
    console.log("your answer is correct")
    points++
}else {
    console.log("incorrect answer")
}
let question3 = await inquirer.prompt([
    {
name: "three",
message: "In which year did the titanic sink ?",
type: "list",
choices: ["1920","1970","1930","1912"]
    }
])
if (question3.three == "1912"){
    console.log("your answer is correct")
    points++
}else {
    console.log("incorrect answer")
}
let question4 = await inquirer.prompt([
    {
name: "four",
message: "Which planet rotates on its side?",
type: "list",
choices: ["mars","uranus","venus","earth"]
    }
])
if (question4.four == "uranus"){
    console.log("your answer is correct")
    points++
}else {
    console.log("incorrect answer")
}
let question5 = await inquirer.prompt([
    {
name: "five",
message: "Who color is a giraffe's tongue?",
type: "list",
choices: ["purple","yellow","pink","white"]
    }
])
if (question5.five == "purple"){
    console.log("your answer is correct")
    points++
}else {
    console.log("incorrect answer")
}
if (points >= 4){
    console.log("congratulations!")
    console.log(`your points: ${points}`)
}else {
    console.log("you loss! try next time")
    console.log(`your points: ${points}`)
}