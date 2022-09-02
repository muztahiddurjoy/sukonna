function selectElement(id){
    document.getElementById(id).classList.add('ring-yellow-400','text-yellow-400')
}
function deselectElement(id){
    document.getElementById(id).classList.remove('ring-yellow-400','text-yellow-400')
}
let method = ""
function setmethod(met){
    method = met
}
function deselPayments(){
    deselectElement('openBkash')
    deselectElement('openRocket')
    deselectElement('openBkash')
    deselectElement('cashOn')
    deselectElement('openNagad')
    deselectElement('openDbbl')
    deselectElement('opencreDeCard')
}
//Modal Codes

function openBkash(){
    document.getElementById('bkashModal').style.display ="flex"
}
function openRocket(){
    document.getElementById('rocketModal').style.display ="flex"
}
function openNagad(){
    document.getElementById('nagadModal').style.display ="flex"
}
function openDBBL(){
    document.getElementById('dbblModal').style.display ="flex"
}
function openVisa(){
    document.getElementById('visaModal').style.display ="flex"
}


document.getElementById('closeBkash').onclick = function(){
    document.getElementById('bkashModal').style.display = "none"
}
document.getElementById('closeRocket').onclick = function(){
    document.getElementById('rocketModal').style.display = "none"
}
document.getElementById('closeNagad').onclick = function(){
    document.getElementById('nagadModal').style.display ="none"
}
document.getElementById('closeDbbl').onclick = function(){
    document.getElementById('dbblModal').style.display ="none"
}
document.getElementById('closeVisa').onclick = function(){
    document.getElementById('visaModal').style.display ="none"
}

document.getElementById('payProc').addEventListener('click',function(){
    switch(method){
        case "bkash":
            openBkash()
            break;
        case "rocket":
            openRocket()
            break;
        case "cod":
            break;
        case "nagad":
            openNagad()
            break;
        case "dbbl":
            openDBBL()
            break;
        case "visa":
            openVisa()
            break;
        default:
            break
    }
})