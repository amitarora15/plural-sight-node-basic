const print = () => {
    console.log("Hello world");
}

let counter = 0;
for(;;){
    counter++;
    setTimeout(print, ((counter) *1000));
}