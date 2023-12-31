const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`is ${el1} greater than ${el2}?`, res => {
        if (res === "yes") {
            callback(true);
        } else {
            callback(false);
        }
    })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i === arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps);
        return;
    } else {
        askIfGreaterThan(arr[i], arr[i + 1], function(boolean) {
            if (boolean) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                madeAnySwaps = true;
            }

            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        })
    }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
    }

    outerBubbleSortLoop(true);
}

absurdBubbleSort([3, -1, 5, 9], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
})

// let callback = function(boolean) {
//     if (boolean) {
//         console.log("hi");
//     } else {
//         console.log("bye");
//     }
// }
// console.log(askIfGreaterThan(9, 4, callback))