const func = (num) => {
    console.log("Hello after " + num + " seconds");
}

setTimeout(func, 4*1000, 4);
setTimeout(func, 8*1000, 8);