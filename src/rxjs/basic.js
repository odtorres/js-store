// types of data sources
const Rx = require("rxjs/Rx")

//SINGLE-VALUE, SYNCHRONOUS
Rx.Observable.of(42).subscribe(console.log) //-> 42

//MULTI-VALUE, SYNCHRONOUS
Rx.Observable.from([1, 2, 3]).subscribe(console.log)

Rx.Observable.from("RxJS").subscribe(console.log)

//SINGLE-VALUE, ASYNCHRONOUS
const fortyTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(42)
    }, 5000)
})
Rx.Observable.fromPromise(fortyTwo)
    .map(e => e + 1)
    .subscribe(console.log) 