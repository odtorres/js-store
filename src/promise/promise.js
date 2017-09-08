
const equal0 = number => new Promise(function (resolve, reject) {
    if (number == 0)
        resolve("equal")
    else
        reject("different")
})

const write = message => console.log(message)

equal0(0)
    .then(message => write(message))
    .catch(message => write(message))

equal0(1)
    .then(message => write(message))
    .catch(message => write(message))

