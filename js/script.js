const btnResp = document.querySelector('.btnResponsive');
btnResp.addEventListener('click', menuResponsivo);

function menuResponsivo(){
    const listaMenu = document.querySelector('.navList') 
    listaMenu.classList.toggle('show-links')
   

}