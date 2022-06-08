function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

  

  
  // let i = 0;
  // function read(){
  //   if(!i){
  //   document.getElementById("more").style.display="inline";
  //   document.getElementById("read").innerHTML="Read Less";
  //   i=1;
  //   }
  //   else
  //   {
  //   document.getElementById("more").style.display="none"
  //   document.getElementById("read").innerHTML="Read More";
  //   i=0;
  //   }
  //   }
 