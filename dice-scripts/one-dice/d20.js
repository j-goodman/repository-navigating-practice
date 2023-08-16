let dice = (sides) => {
    return Math.ceil(Math.random() * sides)
}

console.log("Here is the simulated result of rolling one twenty-sided dice:")

console.log(dice(20))