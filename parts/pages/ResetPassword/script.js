const pass = document.getElementById('newPass')
const rePass = document.getElementById('renewPass')
const togglePass = document.getElementById('passToggle')
const toggleRe = document.getElementById('reToggle')

togglePass.addEventListener('click',(e)=>{
    if(pass.type === "password"){
        pass.type = "text"
    }
    else{
        pass.type = "password"
    }
})
toggleRe.addEventListener('click',(e)=>{
    if(rePass.type == "password"){
        rePass.type = "text"
    }
    else{
        rePass.type = "password"
    }
})