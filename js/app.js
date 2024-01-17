//* SIDEBAR STARTS HERE
let menuIcon = document.querySelector('nav .menuIcon')
let sidebar = document.querySelector('.sidebar')
let cancelBtn = document.querySelector('.cancel')

function showSidebar () {
    sidebar.classList.add("trigger")
}

menuIcon.addEventListener('click', showSidebar)

function hideSidebar () {
    sidebar.classList.remove("trigger")
}
 
cancelBtn.addEventListener('click', hideSidebar)
//* SIDEBAR ENDS HERE


//* PASSWORD FORM STARTS HERE
let passwordHide = document.querySelector('.eyeBtn')
let passwordInput = document.querySelector('.inputWrapper input')

function showHidePassword () {
    if(passwordInput.type == 'text'){
        passwordInput.type = 'password'
        passwordHide.innerHTML = '<i class="bi bi-eye-slash-fill">'
    }
    else{passwordInput.type = 'text'
    passwordHide.innerHTML = '<i class="bi bi-eye-fill"></i></i>'
}
}

passwordHide.addEventListener('click', showHidePassword)

let submitBtn = document.querySelector('form button')

function submitForm (){
    if(passwordInput.value.length > 0)
    submitBtn.innerHTML = 'Success <i class="bi bi-check2-circle"></i>'
    else{
    submitBtn.innerHTML = 'Error Occured <i class="bi bi-exclamation-circle"></i>'
    }
}
submitBtn.addEventListener('click', submitForm)
//* PASSWORD FORM ENDS HERE