const btnResp = document.querySelector('.btnResponsive');
btnResp.addEventListener('click', menuResponsivo);

function menuResponsivo(){
    // const barraNavegacao = document.querySelector('.navPrincipal');
    const listaMenu = document.querySelector('.navList') 
    listaMenu.classList.toggle('show-links')
   

}