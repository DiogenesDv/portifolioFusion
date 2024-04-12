 const menuIcon = document.querySelector('.menuIcon');
 const menuDropdown = document.querySelector('.menuDropdown');

// menuIcon.onclick = function (){} ou 
menuIcon.onclick = () => {
    console.log('Clicou')
    menuDropdown.classList.toggle('ativo');
}