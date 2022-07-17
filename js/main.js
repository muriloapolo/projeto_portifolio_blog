const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    // console.log(links.classList)
    // console.log(links.classList.contains('random'))
    // console.log(links.classList.contains('links'))
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // } else{
    //     links.classList.add('show-links');
    // }
    links.classList.toggle('show-links');
})

//navBlog-principal
//blog



const btnSide = document.getElementById('sideHome')
btnSide.addEventListener('click', exibeBarra)

function exibeBarra() {

    const barraLateral = document.querySelector('.sidebar');
    const navBar = document.querySelector('.navBlog-principal');
    const blog = document.querySelector('.blog');
    if (!blog.classList.contains('origem')) {
        barraLateral.classList.add("sidebarRespNone")
        blog.classList.add('origem')
        navBar.classList.add('origem')       
    }
   
     else {
      
        blog.classList.remove('origem')
        navBar.classList.remove('origem')
        barraLateral.classList.remove('sidebarRespNone')
    }
}