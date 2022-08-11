let loginTab = document.getElementById('loginTab')
let signUpTab = document.getElementById('signUpTab')
let loginPage = document.getElementById('loginPage')
let signUpPage = document.getElementById('signUpPage')
let statusText = document.getElementById('status')
let forgotPass = document.getElementById('forgotPassword')
let forBtn = document.getElementById('forgotPassBtn')
const pass = document.getElementById('logPass')
const rePass = document.getElementById('signPass')
const togglePass = document.getElementById('logToggle')
const toggleRe = document.getElementById('signToggle')

loginTab.addEventListener('click',(e)=>{
    signUpTab.classList.remove('text-black')
    signUpTab.classList.remove('border-black')
    signUpTab.classList.add('text-slate-400')
    signUpTab.classList.add('border-slate-300')
    e.target.classList.remove('border-slate-300')
    e.target.classList.remove('text-slate-400')
    e.target.classList.add('text-black')
    e.target.classList.add('border-black')
    signUpPage.classList.add('hidden')
    signUpPage.classList.remove('block')
    loginPage.classList.remove('hidden')
    forgotPass.classList.remove('block')
    forgotPass.classList.add('hidden')
    loginPage.classList.add('block')
    statusText.innerHTML = "Login"
})
signUpTab.addEventListener('click',(e)=>{
    loginTab.classList.remove('text-black')
    loginTab.classList.remove('border-black')
    loginTab.classList.add('text-slate-400')
    loginTab.classList.add('border-slate-300')
    e.target.classList.remove('border-slate-300')
    e.target.classList.remove('text-slate-400')
    e.target.classList.add('text-black')
    e.target.classList.add('border-black')
    loginPage.classList.remove('block')
    loginPage.classList.add('hidden')
    signUpPage.classList.remove('hidden')
    forgotPass.classList.remove('block')
    forgotPass.classList.add('hidden')
    signUpPage.classList.add('block')
    statusText.innerHTML = "Sign Up"
})

forBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    loginPage.classList.remove('block')
    signUpPage.classList.remove('block')
    signUpPage.classList.add('hidden')
    loginPage.classList.add('hidden')
    forgotPass.classList.remove('hidden')
    forgotPass.classList.add('block')
    statusText.innerHTML = "Forgot Password"
})
togglePass.addEventListener('click',()=>{
    if(pass.type==="password"){
        pass.type = "text"
    }
    else{
        pass.type = "password"
    }
})
toggleRe.addEventListener('click',()=>{
    if(rePass.type === "password"){
        rePass.type = "text"
    }
    else{
        rePass.type = "password"
    }
})