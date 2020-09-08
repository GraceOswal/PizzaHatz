let size, email;
size = document.getElementById('#size').value;
email = document.getElementById('#email').value;

function subscribe() {
    alert("Dear Customer " + email + "Thank You for reaching out");
    console.log(email);
}

let validateInput = () => {
    if (size === "") {
        console.log("Please specify the size");
    }
}