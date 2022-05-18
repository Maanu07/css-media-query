window.onresize = screen;
window.onload = screen;

function screen(){
    let width = window.innerWidth
    console.log(width)
    document.getElementById('size').innerText = `Width : ${width} px`
}