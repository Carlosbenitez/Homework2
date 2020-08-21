//I want to store and send myself an email with the form information

//Pull information from form
let button = document.querySelector(".btn")
let userInput = document.querySelector("#user-input")

var getInfo = $('#user-input').serializeArray();
    console.log(getInfo)

button.addEventListener('click', (e) => {
    let submitInfo = userInput.value;
        console.log(submitInfo);

//stores submit value in session storage
sessionStorage.setItem("submit", submit);
    window.location.href='thankyou.html';
});

let submit = sessionStorage.getItem("submit");
    console.log(submit);


//Send information to my email

