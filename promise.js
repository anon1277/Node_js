// // Function that returns a Promise
// function asyncTask(message, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // Simulate success after delay
//             resolve(`Task completed: ${message}`);
//             // Simulate an error after delay
//             // reject(`Error occurred during the task: ${message}`);
//         }, delay);
//     });
// }

// // Using Promises to handle asynchronous tasks
// asyncTask("Task 1", 2000)
//     .then(result => {
//         console.log(result);
//         return asyncTask("Task 2", 1500);
//     })
//     .then(result => {
//         console.log(result);
//         return asyncTask("Task 3", 1000);
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error(error);
//     });



let a=20 , b =0 ;


let watingData = new Promise((resolve ,reject)=>{

setTimeout(() => {
    resolve(20);
    //  b= 20;
}, 2000);

   
})


watingData.then((data)=>{
    console.log(a + data)
})
