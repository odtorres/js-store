let myArray = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(
    myArray.
        map(e => {
            console.log("Map:", e)
            return e + 1
        }).
        reduce((e1, e2) => {
            console.log("Reduce:", e1, " ", e2)
            return e1 + e2
        })
)
