function byTagNames(){
    let tagNames = document.getElementsByTagName("p");
    document.getElementById("demo").innerHTML =
    tagNames[0].innerHTML;
}
function changeP2(){
    document.getElementById('p2').innerHTML = 
    document.getElementById('p1').firstChild.nodeValue;
}