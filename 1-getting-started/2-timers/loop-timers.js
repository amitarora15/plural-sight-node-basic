let counter = 0;
const print = () => {
    counter++;
    console.log("Hello world");
    if(counter == 5){
        console.log("done");
        clearInterval(id);
    }
}
const id = setInterval(print, 1*1000);
