const display = document.getElementById("display")
function append(input){
    display.value+=input
}
function clean(){
    display.value="";
}
function evalu(){
    try{
        if(display.value==""){
            throw new Error 
        }
        display.value=eval(display.value)
    }
    catch(error){
        display.value=""
        window.alert("Error")
    }
}
function backspace(){
    let dis= display.value
    dis=dis.slice(0,-1)
    display.value=dis
}
