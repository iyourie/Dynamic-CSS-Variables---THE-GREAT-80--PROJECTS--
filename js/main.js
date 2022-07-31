//buttons variables (login and cancel)
let login = document.querySelectorAll("button")[0];
let cancel = document.querySelectorAll("button")[1];
//input variables (id and password)
let id = document.querySelectorAll("input")[0];
let password = document.querySelectorAll("input")[1];
//event click on the button login
login.onclick = () => {
    //create two arrays that are containing id and password values
    let arr = id.value.split("");
    let pass = password.value.split("");
    //alerting the user if he clicks login before writing something in the inputs
    if (id.value.length == 0 && password.value.length == 0) {
        alert("write something first !!");
    } else if (id.value.length == 0) {
        alert("write something in the id field !!");
    } else if (password.value.length == 0) {
        alert("write something in the password field !!");
    }
    //changing the background color of the id input if there is a white space in the value
    if (arr.every((x) => x !== " ") == false) {
        id.style.backgroundColor = "#FFFFCC";
        id.style.borderColor = "#FFFFCC";
        alert("your id contain space , please remove it");
    }
    else if (arr.every((x) => x !== " ") == true) {
        id.style.backgroundColor = "white";
        id.style.borderColor = "black";
    }
    //changing the background color of the password input if there is a white space in the value
    if (pass.every((x) => x !== " ") == false) {
        password.style.backgroundColor = "#FFFFCC";
        password.style.borderColor = "#FFFFCC";
        alert("your password contain space , please remove it");
    } else if (pass.every((x) => x !== " ") == true) {
        password.style.backgroundColor = "white";
        password.style.borderColor = "black";
    }
    //a map that change the typeof of the components of the array ( arr ) to numbers
    let map = arr.map((x) => Number(x));
    //checking if the new map array contains a NaN . if there is change the background color of id to red and alert the user that is writing just numbers is not allowed
    if (map.every((x) => isNaN(x))) {
        console.log("not numbers");
    } else if (map.some((x) => isNaN(x))) {
        console.log("not numbers");
    } else {
        id.style.backgroundColor = "#FFA8b5";
        id.style.borderColor = "#FFA8b5";
        alert("writing just numbers is not allowed");
    }
};
//if user clicks cancel the inputs will be cleared and the background color will change to white and the border color will change to black.
cancel.onclick = () => {
    id.style.backgroundColor = "white";
    id.style.borderColor = "black";
    password.style.backgroundColor = "white";
    password.style.borderColor = "black";
    id.value = ''
    password.value = ''
}