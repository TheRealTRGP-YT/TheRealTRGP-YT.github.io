function add(a, b) {
    return a + b;
}

function Get(id) {
    let a = document.getElementById(id);
}

function GetAdd(id, id2, id3) {
    let a = document.getElementById(id).innerHTML;
    console.log(a);
    let b = document.getElementById(id2).innerHTML;
    console.log(b);
    let c = document.getElementById(id3).innerHTML = a + b;
    console.log(c);


}