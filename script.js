const arr=["orange", "yellow", "red", "blue","pink","black", "green"]
let i=0;
setInterval(color,1000)
function color(){
    document.body.style.backgroundColor=arr[i]
    i++
    if(i>arr.length){
        i=0
    }
}
color()