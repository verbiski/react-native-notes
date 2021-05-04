// May 4, 2021
// Async code

// a use could be a callback function.. here we have a nested callback.
// a callback function is a function passed as an argument to another fucntion.
// it allows for a function to call another function. a callback function can run after another function is finished.
const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {     //use 'new' keyword to make a new object based on a constructor
        setTimeout(() => {
            callback('Done!');
        }, 1500);
        }); 
        return promise;
    };

    setTimeout(() => {
        callback('Done!');
    }, 1500);
};

setTimeout() => { //function built into note.js
    console.log('Timer is done!');
    fetchData()
        .then(text => { //this chain of .then blocks is more readable then having infinitely nested callback functions.
        console.log(text);
        return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);  // since there is a 2 sec delay, this code is asyncronous

// this code is synchronous, the only lag in execution is bc of the hardware
console.log('Hello!');
console.log('Hi!');

//async code is code that doesnt finish immediately.

//We can also use a feature called promises in node.js
//usually we have 3rd party packages which use promises for us


