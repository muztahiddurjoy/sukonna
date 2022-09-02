var sidebar = document.getElementById('sidebar')
var closer = document.getElementById('sidebarCloser')
var opener = document.getElementById('sidebarOpener')

function openSidebar(){
    sidebar.style.marginLeft = "0px"
}
function closeSidebar(){
    sidebar.style.marginLeft ="-400px"
}
closer.addEventListener('click',function(){
    closeSidebar()
})
opener.addEventListener('click',function(){
    openSidebar()
})