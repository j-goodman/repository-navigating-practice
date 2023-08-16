let dice = (sides) => {
    return Math.ceil(Math.random() * sides)
}

console.log("Here is the result of simulating two dice being rolled and added together:")
console.log(dice(6) + dice(6))